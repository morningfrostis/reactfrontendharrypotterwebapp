import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Character } from "../../models/character";
import {
  getCharacters,
  removeCharacter,
  syncCharacters,
} from "../../services/api/characters";
import {
  App,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
} from "./styles";

const Characters: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);

  }, []);

  const syncData = useCallback(async () => {
    await syncCharacters();
    setIsLoading(false);
    getCharactersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveCharacter = useCallback(async (id: string) => {
    setIsLoading(true);
    await removeCharacter(id);
    setCharacterList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/characterdetails/${id}`, { replace: true });
    },
    [navigate]
  );
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (isloading) {
    return <h1>LOADING</h1>;
  }
  return (
    <App>
      <SyncButton onClick={syncData}>Sync Characters</SyncButton>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>

      </ButtonContainer>
      <Container>
        {characterList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((character, index) => (
            <div key={index}>
              <Card
                image={character.image}
                name={character.name}
                house={character.house}
                onClick={goToDetails}
                id={character.id}
                type="listcharacters"
              />
              <button onClick={() => handleRemoveCharacter(character.id)}>
                DELETE
              </button>
            </div>
          ))}
      </Container>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
    </App>
  );
};

export default memo(Characters);
