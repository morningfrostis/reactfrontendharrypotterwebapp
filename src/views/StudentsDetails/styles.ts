import styled from "styled-components";

export const App = styled.div`
 text-align: center;
 background-color: #282c34;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;    
`

export const Container = styled.div`
padding: 5em;
gap: 24px;
`
export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
`;


export const ButtonBack = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
