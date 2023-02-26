import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getStudents, Student } from "../../services/api/students";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

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
    console.log("entramos");
    getStudentsList();
  }, [getStudentsList]);

  // useEffect(() => {
  //   console.log("entramos");
  //   getStudentsList();
  // }, [getStudentsList]);

  // const goBack = useCallback(() => {
  //   navigate("/home", { replace: true });
  // }, [navigate]);

  const { id } = params;
  const filteredItems = studentList.filter((item) => item.id === id);
  return (
    <App>
      <Navbar type="details" />
      <Container>
        {filteredItems.map((character, index) => (
          <Card
            key={index}
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
        ))}
      </Container>
    </App>
  );
};

export default memo(StudentsDetail);
