import React, {useEffect, useRef, useState} from 'react';
import {Input} from "./components/Input";
import Button from "./components/Button";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

const App = () => {
    const [todos, setTodos] = useState<TodosType[]>([])
    // const [newTitle, setNewTitle] = useState('')

    const newTitle = useRef<HTMLInputElement>(null)

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, []);


    const ButtonHandler = () => {
        fetchFoo()
    }

    const DeleteButtonHandler = () => {
        setTodos([])
    }

    const addTodo = () => {
        if (newTitle.current) {
            const newTodo = {userId: 999, id: todos.length + 1, title: newTitle.current.value, completed: false}
            setTodos([newTodo, ...todos])
            newTitle.current.value=''
        }

    }

    return (
        <div>
            <Button name={'Show Todo'} callBack={ButtonHandler}/>
            <Button name={'Delete Todos'} callBack={DeleteButtonHandler}/>
            <div>
                <Input
                    newTitle={newTitle}
                />
                <Button name={'Add Todo'} callBack={addTodo}/>
            </div>

            <ul>
                {todos.map(el => {
                    return (
                        <ol key={el.id}>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </ol>
                    )
                })}
            </ul>

        </div>
    );
};

export default App;