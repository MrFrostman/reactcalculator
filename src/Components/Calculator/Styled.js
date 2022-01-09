import styled from "styled-components";
import Styled from "styled-components";

export const Container = Styled.div`
   display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`;

export const Screen = Styled.div`
grid-column: 1 / -1;
background-color: rgba(119, 149, 248, 0.83);
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 10px;
word-wrap: break-word;
word-breakL break-all;
text-align: right;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const Previus = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  background-color: rgba(255, 255, 255);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  //Funcion para expander los botonoes del formulario Calc
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column:span ${gridSpan};`;
    }
  }} //Arrow Function

  ${({ Operation }) => Operation && `background-color: gray;`}
  ${({ Control }) => Control && `background-color: rgba(77, 118, 221, 1);`}
  ${({ equals }) =>
    equals && `border-bottom-right-radius:10px; background-color: gray;`}
    ${({ period }) =>
    period &&
    `border-bottom-left-radius:10px; background-color:rgba(77, 118, 221, 1);`}
`;
