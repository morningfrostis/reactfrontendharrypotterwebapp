import { FC, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
// import useLogic from "./logic";
import { App, Container, SyncButton } from "./styles";
import {
  getCharacters,
  removeCharacter,
  syncCharacters,
} from "../../services/api/characters";
import { Character } from "../../models/character";
// import  { CharacterInput } from "../../models/character";

const Characters: FC = () => {
  // const {isloading, handleRemoveCharacter, handleSyncCharacters, characters, goToDetails} = useLogic()

  // if (isloading) {
  //   return <h1>LOADING</h1>;
  // }

  const [characters, setCharacter] = useState<Character[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGetCharactersList = useCallback(async () => {
    setIsLoading(true);
    const characters = await getCharacters();
    setCharacter(characters);
    setIsLoading(false);
  }, []);

  const handleRemoveCharacter = useCallback(async (id: string) => {
    console.log('entramos en remove')

    setIsLoading(true);
    await removeCharacter(id);
    setCharacter((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  const handleSyncCharacters = useCallback(async () => {
    setIsLoading(true);
    await syncCharacters();
    await handleGetCharactersList();
    setIsLoading(false);
  }, [handleGetCharactersList]);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/character/${id}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      <SyncButton onClick={handleSyncCharacters}>Sync Characters</SyncButton>

      <Container>
        {characters.map((character, index) => (
          <Card
            key={index}
            image={character.image}
            name={character.name}
            house={character.house}
            onClick={goToDetails}
            id={character.id}
            type="listcharacters"
            onClick2={() => handleRemoveCharacter(character.id)}
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Characters);
