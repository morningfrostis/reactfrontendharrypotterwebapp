import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import {
  Character,
  getCharacters,
  syncCharacters,
} from "../../services/api/characters";
import { App, Container, SyncButton } from "./styles";

const Characters: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
    console.log(characterList);
  }, []);

  const syncData = useCallback(async () => {
    await syncCharacters();
    setLoading(false)
    getCharactersList();
  }, []);

  // useEffect(() => {
  //   console.log("entramos");
  //   getCharactersList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/characterdetails/${id}`, { replace: true });
    },
    [navigate]
  );

if(loading) {
  return(
    <h1>LOADING</h1>
  )
}

  return (
    <App>
      <Navbar />
      <SyncButton onClick={syncData}>Sync Characters</SyncButton>
      <Container>
        {characterList.map((character, index) => (
          <Card
            key={index}
            image={character.image}
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
