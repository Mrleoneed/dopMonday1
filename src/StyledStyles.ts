import styled from "styled-components";


const Banknote = styled.div
    `
      background-color: ${props => props.color};
      width: 100px;
      height: 100px;
      margin: 10px;
    `


const Name = styled.div
    `
      display: flex;
      justify-content: center;
      font-size: 30px;

    `

const Nominal = styled.div
    `
      display: flex;
      justify-content: center;
      margin-top: 10px;
      font-size: 40px;

    `

export const S = {
    Banknote,
    Name,
    Nominal
}