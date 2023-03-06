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
  BackContainer,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
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

  const goToEdit = useCallback(
    (id: string) => {
      navigate(`/characteredit/${id}`, { replace: true });
    },
    [navigate]
  );

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

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
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <SyncButton onClick={syncData}>Sync Characters</SyncButton>
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
                onClick={goToEdit}
                id={character.id}
                type="characters"
              />
              <DeleteButton onClick={() => handleRemoveCharacter(character.id)}>
                DELETE
              </DeleteButton>
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
