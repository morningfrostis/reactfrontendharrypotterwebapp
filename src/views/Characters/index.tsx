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
<<<<<<< HEAD:src/views/Home/index.tsx
  }, [characterList]);
=======
  }, []);
 
  const syncData = useCallback(async () => {
    await syncCharacters();
 }, []);

 
>>>>>>> e739a6eb800b6d4e5ddfce252855a41d11e67802:src/views/Characters/index.tsx

  useEffect(() => {
    console.log("entramos");
    getCharactersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/details/${id}`, { replace: true });
    },
    [navigate]
  );

<<<<<<< HEAD:src/views/Home/index.tsx
  const syncData = useCallback(async () => {
    await syncCharacters();
  }, []);
=======
  
>>>>>>> e739a6eb800b6d4e5ddfce252855a41d11e67802:src/views/Characters/index.tsx

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
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Characters);
