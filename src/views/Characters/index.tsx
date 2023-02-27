import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import {
  Character,
  getCharacters,
  syncCharacters,
} from "../../services/api/characters";
// import Navbar from "../../components/Navbar";
import { App, Container, SyncButton } from "./styles";

const Characters: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const navigate = useNavigate();

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
    console.log(characterList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const syncData = useCallback(async () => {
    await syncCharacters();
  }, []);

  useEffect(() => {
    console.log("entramos");
    getCharactersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/characterdetails/${id}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      <Navbar />
      <SyncButton onClick={syncData}>Sync Characters</SyncButton>
      <Container>
        {characterList.map((character, index) => (
          <Card
            key={index}
            // image={character.image}
            image={
              character.image !== ""
                ? character.image
                : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6187/6187014_sd.jpg"
            }
            name={character.name}
            house={character.house}
            onClick={goToDetails}
            id={character.id}
            type="list"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Characters);
