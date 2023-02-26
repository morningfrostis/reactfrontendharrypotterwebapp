import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Character, getCharacters } from "../../services/api/characters";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

const Detail: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const navigate = useNavigate();
  const params = useParams();

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
  }, []);

  useEffect(() => {
    console.log("entramos");
    getCharactersList();
  }, [getCharactersList]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goBack = useCallback(() => {
    navigate("/home", { replace: true });
  }, [navigate]);

  const { id } = params;
  const filteredItems = characterList.filter((item) => item.id === id);
  return (
    <App>
      <Navbar type="details" />
      <Container>
        {filteredItems.map((character, index) => (
          <Card
            key={index}
            house={character.house}
            name={character.name}
            species={character.species}
            wizard={character.wizard}
            ancestry={character.ancestry}
            actor={character.actor}
            patronus={character.patronus}
            id={character.id}
            image={character.image}
            type="details"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Detail);
