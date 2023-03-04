import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { getStudents, StudentResponse } from "../../services/api/students";
// import Navbar from "../../components/Navbar";
import { App, ButtonContainer, Container, ButtonBack } from "./styles";

const StudentsDetail: FC = () => {
  const [studentList, setStudentList] = useState<StudentResponse[]>([]);
  const navigate = useNavigate();
  const params = useParams();
  const [isloading, setIsLoading] = useState<boolean>(false);


  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentList(students);
  }, []);

  useEffect(() => {
    getStudentsList();
  }, [getStudentsList]);

  const goToBack = useCallback(() => {
    navigate("/students", { replace: true });
  }, [navigate]);

  const goToEdit = useCallback(
    (id: string) => {
      navigate(`/studentedit/${id}`, { replace: true });
    },
    [navigate]
  );

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
            type="edit"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(StudentsDetail);
