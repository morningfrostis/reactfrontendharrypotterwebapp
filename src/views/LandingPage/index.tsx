import React, { FC } from "react";
import {
  ButtonBoxes,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
} from "./styles";

const Landing: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeMessage>Select the info that you want</WelcomeMessage>
      <ButtonBoxes>
        <WelcomeButton to="/characters">All Characters</WelcomeButton>
        <WelcomeButton to="/students">All Students</WelcomeButton>
        <WelcomeButton to="/staff">Staff</WelcomeButton>
        <WelcomeButton to="/spells">Spells</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Landing;
