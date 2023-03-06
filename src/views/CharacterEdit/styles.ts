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
  flex-direction: row;
`;

export const AppEdit = styled.div`
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
  flex: 0 0 300px;
  padding: 5px;
  padding-bottom: 25px;
  margin: 1em;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #740001;
  position: relative;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  &:before {
    content: "Harry Potter character";
    font-family: "Oswald";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: linear-gradient(to top, #9d523c 0%, #f2a65a 74%);
    position: absolute;
    z-index: 10;
    max-width: 225px;
    top: -15px;
    padding: 5px;
    left: 0;
    right: 0;
    margin: auto;
  }
  /* Efecto de iluminación */
  &:hover {
    box-shadow: 0 0 10px 10px #2f73d8;
    transform: scale(1.05);
    transition: box-shadow 0.5s ease, transform 0.5s ease;
  }
`;

export const Container = styled.div`
  padding: 5em;
  gap: 24px;
`;

export const Image = styled.img`
  width: 175px;
  height: 250px;
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
  border-radius: 5px;
  cursor: pointer;
  margin: 16px;
  padding: 5px;
  font-family: Oswald;
  background-color: ${({ theme }) => theme.colors.GriffindorGold};
`;

export const ButtonBack = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;
