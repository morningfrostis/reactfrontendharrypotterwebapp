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
  const [loading, setLoading] = useState(false);

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
    console.log(characterList);
  }, []);

  const syncData = useCallback(async () => {
    await syncCharacters();
    setLoading(false);
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
            type="list"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Characters);
