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
`;
export const Container = styled.div`
background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
  flex: 0 0 300px;
  padding: 5px;
  padding-bottom: 25px;
  margin: 2em;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #740001;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:before {
    content: "User Profile";
    font-family: "Oswald";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: linear-gradient(to top, #740001 0%, #740001 74%);
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

export const SpinnerContainer = styled.h1`

`
export const Info = styled.p`
  color: ${({ theme }) => theme.colors.DementorBlack};
  font-size: 22px;
  font-weight: bold;
`
