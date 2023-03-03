import styled, { css } from "styled-components";

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
`;

export const Container = styled.div`
  padding: 5em;
  gap: 24px;
`;
export const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  /* color: ${({ theme }) => theme.colors.white}; */
  color: white;
  font-size: large;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  margin-right: 20px;
`;

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

export const Image = styled.img`
  max-width: 400px;
  min-height: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.white100};
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  margin: 10px;
  border: none; /* eliminar el borde predeterminado */
  border-bottom: 1px solid ${({ theme }) => theme.colors.white100}; /* agregar borde inferior */
  background: transparent; /* hacer el fondo transparente */
  color: ${({ theme }) =>
    theme.colors.white100}; /* establecer el color de texto */
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.GriffindorYellow};
      border-bottom-color: ${theme.colors
        .GriffindorYellow}; /* agregar borde inferior amarillo cuando hay un error */
    `}
`;

export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const EditButton = styled.button`
  /* border-radius: 5px;
  cursor: pointer;
  margin: 16px;
  padding: 5px;
  font-family: Oswald;
  background-color: ${({ theme }) => theme.colors.GriffindorGold}; */
  
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
   color: ${({ theme }) => theme.colors.white}; 
  color: white;
  font-size: large;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  margin-right: 20px;
`;




