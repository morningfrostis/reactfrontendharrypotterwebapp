import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { getStudents, Student } from "../../services/api/students";
// import Navbar from "../../components/Navbar";
import { App, ButtonContainer, Container, ButtonBack } from "./styles";

const StudentsDetail: FC = () => {
  const [studentList, setStudentList] = useState<Student[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const params = useParams();

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentList(students);
  }, []);

  // const getStudentsList = useCallback(async () => {
  //   const students = await getStudents();
  //   setStudentList(students);
  // }, []);

  useEffect(() => {
    getStudentsList();
  }, [getStudentsList]);

  // useEffect(() => {
  //   getStudentsList();
  // }, [getStudentsList]);

  const goToBack = useCallback(() => {
    navigate("/students", { replace: true });
  }, [navigate]);
  const { id } = params;
  const filteredItems = studentList.filter((item) => item.id === id);
  return (
    <App>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        {filteredItems.map((character, index) => (
          <Card
            key={index}
            image={character.image}
            house={character.house}
            name={character.name}
            species={character.species}
            wizard={character.wizard}
            ancestry={character.ancestry}
            actor={character.actor}
            patronus={character.patronus}
            id={character.id}
            type="details"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(StudentsDetail);
