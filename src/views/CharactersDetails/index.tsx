import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { Character } from "../../models/character";
// import Navbar from "../../components/Navbar";
import {  getCharacters, removeCharacter } from "../../services/api/characters";
// import Navbar from "../../components/Navbar";
import { App, ButtonBack, ButtonContainer, Container } from "./styles";

const CharactersDetail: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const params = useParams();

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
  }, []);

  // const getStudentsList = useCallback(async () => {
  //   const students = await getStudents();
  //   setStudentList(students);
  // }, []);

  const handleRemoveCharacter = useCallback(async (id: string) => {
    console.log("entramos en remove");

    setIsLoading(true);
    await removeCharacter(id);
    setCharacterList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("entramos");
    getCharactersList();
  }, [getCharactersList]);

  const goToBack = useCallback(() => {
    navigate('/characters', { replace: true });
  },
  [navigate]
);


  // useEffect(() => {
  //   console.log("entramos");
  //   getStudentsList();
  // }, [getStudentsList]);

  // const goBack = useCallback(() => {
  //   navigate("/home", { replace: true });
  // }, [navigate]);

  const { id } = params;
  const filteredItems = characterList.filter((item) => item.id === id);
  return (
    <App>
        <ButtonContainer>
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        {filteredItems.map((character, index) => (
          <div key={index}>
            <Card
              // key={index}
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
            <button onClick={() => handleRemoveCharacter(character.id)}>
              Delete
            </button>
          </div>
        ))}
      </Container>
    </App>
  );
};

export default memo(CharactersDetail);
