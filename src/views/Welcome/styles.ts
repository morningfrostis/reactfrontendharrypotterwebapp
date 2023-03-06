import styled from "styled-components";
import { Link } from "react-router-dom";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const WelcomeVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const WelcomeMessage = styled.h1`
  font: ${({ theme }) => theme.font.MyFont};
  color: ${({ theme }) => theme.colors.black};
`;

export const RedirectMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
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
  text-decoration: none;
  margin: 0 10px;
  font-family: Oswald;
`;
