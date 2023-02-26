import { FC } from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Description,
  DescriptionApi,
  DetailsButton,
  Image,
} from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({
  name,
  house,
  image,
  id,
  species,
  wizard,
  ancestry,
  wand,
  patronus,
  actor,
  // type = "list",
  type,
  spellId,
  spellsName,
  description,
  studentsId,
}) => {
  return (
    <Container>
      <Image src={image} />
      {type === "list" && (
        <Description>
          Name:&nbsp;&nbsp;
          <DescriptionApi>{name}</DescriptionApi>
        </Description>
      )}
      {type === "liststudents" && <Description>Name: {name}</Description>}
      {type === "list" && (
        <Description>
          Hogwarts house:&nbsp;&nbsp;
          <DescriptionApi>{house}</DescriptionApi>
        </Description>
      )}
      {type === "liststudents" && (
        <Description>Hogwarts house: {house}</Description>
      )}
      {type === "details" && <Description>Specie: {species}</Description>}
      {type === "details" && <Description>Is a wizard? {wizard}</Description>}
      {type === "details" && <Description>Ancestry: {ancestry}</Description>}
      {type === "details" && <Description>Wand: {wand}</Description>}
      {type === "details" && <Description>Patronus: {patronus}</Description>}
      {type === "details" && <Description>Actor: {actor}</Description>}
      {type === "list" && (
        <DetailsButton to={`/characterdetails/${id}`}>
          View details
        </DetailsButton>
      )}
      {type === "liststudents" && (
        <DetailsButton to={`/studentsdetails/${id}`}>
          View details
        </DetailsButton>
      )}
      {type === "liststaff" && (
        <DetailsButton to={`/staffdetails/${id}`}>View details</DetailsButton>
      )}
      {type === "details" && <Description>Id: {id}</Description>}
    </Container>
  );
};

export default Card;
