import { FC } from "react";
import {
  Spellcards,
  Spellcardinner,
  Spellcardshape,
  Spellcardtrace,
  DetailsButton,
} from "./styles";
import { Props } from "./types";

const SpellCard: FC<Props> = ({ name, spellId, description, onClick }) => {
  return (
    <Spellcards>
      <Spellcardinner>
        <Spellcardshape>
          <Spellcardtrace />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.37 169.75">
            <clipPath id="clip-expecto">
              <path d="M218.62,114.53q0-2-.09-3.87c0-.46,0-.72,0-.72h0a53,53,0,0,0-1.22-9.76h0c-6.51-41.7-44.33-73.7-90-73.7-50.26,0-91,38.73-91,86.5,0,29.21,15.24,55,38.56,70.68q2,1.4,4.11,2.62l.35.2c.28.17,9.64,5.23,12.77,6.27.67.27,6.78,1.88,8.85,2.24,24.88,4.39,48.69-2.58,64-26.22A71.2,71.2,0,0,0,171.46,149c3.9-22.1-2.76-43.25-16-56.77,8.48,12.87,12.3,29.81,9.46,47.42-5.58,28.59-34.78,47.26-65.73,41.8a61,61,0,0,1-21.18-8A77.72,77.72,0,0,1,54.81,146.4c-.31-.77-2.94-7-3.69-9.43,0,.26-4.39-15.33-4.39-24,0-42.28,36.1-76.56,80.63-76.56,39.69,0,72.64,27.22,79.36,63.07a50.17,50.17,0,0,1,1.59,7.88c.68,3.45,1.54,8.42,2.14,14.09C211.39,148.75,195,183,195,183c3-2,10-7,10-7C218.13,165.33,218.8,127.69,218.62,114.53Z" />
            </clipPath>
            <path
              clip-path="url(#clip-expecto)"
              className="trace-motion"
              fill="none"
              stroke="#ddfffb"
              stroke-miterlimit="10"
              stroke-width="10"
              d="M155,92s49,94-49,97c0,0-62-6-65-78,0,0,7-63,54-73,0,0,29-18,76,4,0,0,58,26,41,111,0,0-9,31-17,30"
              transform="translate(-36.27 -26.47)"
            />
          </svg>
        </Spellcardshape>
        <div className="spell-card__name">
          <h5>Name: {name}</h5>
          <p>Description: {description}</p>
        </div>
        <DetailsButton onClick={() => onClick(spellId)}>Edit</DetailsButton>
      </Spellcardinner>
    </Spellcards>
  );
};

export default SpellCard;
