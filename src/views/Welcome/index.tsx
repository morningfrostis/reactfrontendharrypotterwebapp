import { FC } from "react";
import {
  ButtonBoxes,
  RedirectMessage,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
  WelcomeVideo,
} from "./styles";

const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeVideo
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn-hogwartslegacy.warnerbrosgames.com/home/hero.mp4?c=b"
        className="trailer-video"
      />
      <WelcomeMessage>
        {/* Welcome to Harry Potter Web App */}
        <img
          src="https://fontmeme.com/permalink/230227/0eecad55196fd91ef5f27c6568252660.png"
          alt=""
        />
      </WelcomeMessage>
      <RedirectMessage>
        {/* Please login or create an account to continue */}
        <img
          src="https://fontmeme.com/permalink/230227/5e7ac541557ac33e2b7befa4126d0a54.png"
          alt=""
        />
      </RedirectMessage>
      <ButtonBoxes>
        <WelcomeButton to="/login">Login</WelcomeButton>
        <WelcomeButton to="/signup">Signup</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Welcome;
