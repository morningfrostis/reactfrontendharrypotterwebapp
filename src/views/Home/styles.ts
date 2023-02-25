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
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 24px;
`

