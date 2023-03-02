import { FC } from "react";
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
  
}) => {

return (
  <Container>
    <Image src={image} />
    {type === "listcharacters" && (
      <>
        <Description>Name:&nbsp;&nbsp;<DescriptionApi>{name}</DescriptionApi></Description>
        <Description>Hogwarts house:&nbsp;&nbsp;<DescriptionApi>{house}</DescriptionApi></Description>
        <DetailsButton to={`/character/${id}`}>View character</DetailsButton>
      </>
    )}
    {type === "liststudents" && (
      <>
        <Description>Name:&nbsp;&nbsp;<DescriptionApi>{name}</DescriptionApi></Description>
        <Description>Hogwarts house:&nbsp;&nbsp;<DescriptionApi>{house}</DescriptionApi></Description>
        <DetailsButton to={`/student/${id}`}>View student</DetailsButton>
      </>
    )}
    {type === "liststaff" && (
      <>
        <Description>Name:&nbsp;&nbsp;<DescriptionApi>{name}</DescriptionApi></Description>
        <Description>Hogwarts house:&nbsp;&nbsp;<DescriptionApi>{house}</DescriptionApi></Description>
        <DetailsButton to={`/staff/${id}`}>View staff</DetailsButton>
      </>
    )}
    {type === "details" && (
      <>
        <Description>Specie: {species}</Description>
        <Description>Is a wizard? {wizard}</Description>
        <Description>Ancestry: {ancestry}</Description>
        <Description>Wand: {wand}</Description>
        <Description>Patronus: {patronus}</Description>
        <Description>Actor: {actor}</Description>
        <Description>Id: {id}</Description>
      </>
    )}
  </Container>
);
};

export default Card;
