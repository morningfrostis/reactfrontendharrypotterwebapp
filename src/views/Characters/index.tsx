import { FC, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
// import useLogic from "./logic";
import { App, Container, SyncButton } from "./styles";
import {
  getCharacters,
  syncCharacters,
} from "../../services/api/characters";
import { App, Container, SyncButton } from "./styles";

const Characters: FC = () => {
  // const {isloading, handleRemoveCharacter, handleSyncCharacters, characters, goToDetails} = useLogic()

  // if (isloading) {
  //   return <h1>LOADING</h1>;
  // }

  const [characters, setCharacter] = useState<Character[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetCharactersList = useCallback(async () => {
    setIsLoading(true);
    const characters = await getCharacters();
    setCharacterList(characters);
    console.log(characterList);
  }, []);

  const syncData = useCallback(async () => {
    await syncCharacters();
    setLoading(false);
    getCharactersList();
  }, []);

  const handleRemoveCharacter = useCallback(async (id: string) => {
    console.log("entramos en remove");

    setIsLoading(true);
    await removeCharacter(id);
    setCharacterList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  const handleRemoveCharacter = useCallback(async (id: string) => {
    console.log("entramos en remove");

    setIsLoading(true);
    await removeCharacter(id);
    setCharacterList((prev) => prev.filter((item) => item.id !== id));
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

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <Navbar />
      <SyncButton onClick={syncData}>Sync Characters</SyncButton>
      <Container>
        {characterList.map((character, index) => (
          <Card
            key={index}
            image={
              character.image !== ""
                ? character.image
                : (() => {
                    switch (character.house) {
                      case "Gryffindor":
                        return "https://64.media.tumblr.com/9e0ee5d829bcc71745f02d366adc1479/tumblr_o8s13618fJ1s42pu5o2_1280.jpg";
                      case "Slytherin":
                        return "https://64.media.tumblr.com/7dbc0f5abd753c81f66c079e573e765f/tumblr_o8s13618fJ1s42pu5o4_1280.jpg";
                      case "Ravenclaw":
                        return "https://64.media.tumblr.com/43e8caab3d582a1dfd0c15fa2b9388c8/tumblr_o8s13618fJ1s42pu5o1_1280.jpg";
                      case "Hufflepuff":
                        return "https://64.media.tumblr.com/b56e9126b9da847babbf877cb260a08c/tumblr_o8s13618fJ1s42pu5o3_1280.jpg";
                      default:
                        return "https://i.pinimg.com/564x/07/a4/99/07a4993c3feeb70605ee13c7a2fc1041.jpg";
                    }
                  })()
            }
            name={character.name}
            house={character.house}
            onClick={goToDetails}
            id={character.id}
            type="listcharacters"
          />
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
