import styled from "styled-components";
import { Link } from "react-router-dom";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white500};
  background-image: url("https://www.gratistodo.com/wp-content/uploads/2021/11/Harry-Potter-Fondos-de-pantalla-scaled.jpg");
  background-size: cover;
`;

export const WelcomeMessage = styled.h4`
  font-size: 70px;
  font-family: url(https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap);
  margin-top: 20px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const RedirectMessage = styled.p`
  color: ${({ theme }) => theme.colors.black}; ;
`;

export const ButtonBoxes = styled.div`
  display: block;
  margin: 20px;
`;

export const WelcomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.GriffindorRedDark};
  color: ${({ theme }) => theme.colors.white100};
  border-radius: 5px;
  font-family: Oswald;
  text-decoration: none;
  margin: 0 10px;
`;
