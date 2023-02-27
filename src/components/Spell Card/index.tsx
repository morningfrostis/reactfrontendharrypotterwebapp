import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Description, Image } from "./styles";
import { Props } from "./types";

const SpellCard: FC<Props> = ({
  type = "list",
  spellId,
  name,
  description,
}) => {
  return (
    <Container>
      <Description>Name: {name}</Description>
      <Description>Description: {description}</Description>
      {type === "list" && <Link to={`/edit/${spellId}`}>Edit</Link>}
      <Description>Id: {spellId}</Description>
    </Container>
  );
};

export default SpellCard;
