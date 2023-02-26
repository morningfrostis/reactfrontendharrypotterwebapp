import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Description, Image } from "./styles";
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
  type = 'list', 

}) => {
  return (
    <Container>
      <Image src={image} />
      {type === 'list' &&  <Description>Name: {name}</Description>}
      {type === 'list' && <Description>Hogwarts house: {house}</Description>}
      {type === 'details' &&  <Description>Specie: {species}</Description>}
     {type === 'details' && <Description>Is a wizard? {wizard}</Description>}
     {type === 'details' && <Description>Ancestry: {ancestry}</Description>}
     {type === 'details' && <Description>Wand: {wand}</Description>}
     {type === 'details' && <Description>Patronus: {patronus}</Description>}
     {type === 'details' && <Description>Actor: {actor}</Description>}
       {type === 'list' && <Link to={`/details/${id}`}>View detalles</Link>}
      {type === 'details' && <Description>Id: {id}</Description>}
    </Container>
  );
};

export default Card;
