import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Character, getCharacters, syncCharacters } from "../../services/api/characters";
// import Navbar from "../../components/Navbar";
import { App, Container, SyncButton } from "./styles";

const Students: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [studentsList, setStudentsList] = useState<Character[]>([]);
  const navigate = useNavigate();

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
    console.log(studentsList);
  }, []);
 
  const syncData = useCallback(async () => {
    await syncCharacters();
 }, []);

 

  useEffect(() => {
    console.log("entramos");
    getCharactersList();
  }, [getCharactersList]);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/details/${id}`, { replace: true });
    },
    [navigate]
  );

  

  return (
    <App>
      <Navbar />
      <Container>
        <SyncButton onClick={syncData}/>
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

export default memo(Students);
