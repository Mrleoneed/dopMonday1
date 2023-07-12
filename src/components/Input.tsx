import React, {ChangeEvent, RefObject, useState} from 'react';

type PropsType = {
    newTitle: RefObject<HTMLInputElement>
    // setNewTitle: (newTitle: string) => void
}

export const Input = (props: PropsType) => {
    // const [newTitle, setNewTitle] = useState('')
    console.log(props.newTitle)
    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     props.setNewTitle(event.currentTarget.value)
    // }
    return (
        // <input value={props.newTitle} onChange={onChangeHandler}/>
        <input ref={props.newTitle}/>
    );
};


/////////////////____________________________


// import React, {ChangeEvent, useState} from 'react';
//
// type PropsType = {
//     newTitle: string
//     setNewTitle: (newTitle: string) => void
// }
//
// export const Input = (props: PropsType) => {
//     // const [newTitle, setNewTitle] = useState('')
//     console.log(props.newTitle)
//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         props.setNewTitle(event.currentTarget.value)
//     }
//     return (
//         <input value={props.newTitle} onChange={onChangeHandler}/>
//     );
// };
