import styled, { keyframes } from "styled-components";

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const Container = styled.div`
  /* border: 1px solid white; */
  padding: 15px;
  width: 10em;
`;

export const Spellcards = styled.div`
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
  flex: 0 0 300px;
  padding: 5px;
  margin: 2em;
  border-radius: 20px;
  box-shadow: 0 0 0 14px #333;
  text-align: center;
  position: relative;
  &:before {
    content: "Harry Potter spells";
    font-family: "Cinzel";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: linear-gradient(to top, #9d523c 0%, #f2a65a 74%);
    position: absolute;
    z-index: 10;
    max-width: 225px;
    top: -8px;
    padding: 5px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Spellcardinner = styled.div`
  border-radius: 17px;
  overflow: hidden;
  background: #333;
`;

export const Spellcardshape = styled.div`
  width: 100%;
  height: 300px;
  background: #333;
  display: grid;
  place-items: center;
  position: relative;
  margin-top: 20px;
  svg {
    width: 70%;
    max-width: 250px;
    filter: drop-shadow(0 0 12px #0ff) drop-shadow(-2px -2px 12px #00bcd4);
  }
`;

export const Spellcardtrace = styled.div`
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/expecto.svg");
  position: absolute;
  width: 100%;
  opacity: 0.4;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;
  &:hover {
    cursor: pointer;
    .trace-motion {
      animation: ${draw} 0.7s linear forwards;
    }
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 45px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.RavenclawGreyLady};
`;

export const DetailsButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  cursor: pointer;
`;
