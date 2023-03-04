import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  getStudents,
  removeStudent,
  StudentResponse,
  syncStudents,
} from "../../services/api/students";
import {
  App,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
  SyncButton,
} from "./styles";

const Students: FC = () => {
  const [studentsList, setStudentsList] = useState<StudentResponse[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
  }, []);

  const syncData = useCallback(async () => {
    await syncStudents();
    setIsLoading(false);
    getStudentsList();
  }, []);

  const handleRemoveStudent = useCallback(async (id: string) => {
    setIsLoading(true);
    await removeStudent(id);
    setStudentsList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getStudentsList();
  }, [getStudentsList]);

  const goToEdit = useCallback(
    (id: string) => {
      navigate(`/studentedit/${id}`, { replace: true });
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
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      <SyncButton onClick={syncData}>Sync Students</SyncButton>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
      <Container>
        {studentsList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((student, index) => (
            <div key={index}>
              <Card
                image={student.image}
                name={student.name}
                house={student.house}
                onClick={goToEdit}
                id={student.id}
                type="students"
              />
              <DeleteButton onClick={() => handleRemoveStudent(student.id)}>
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

export default memo(Students);
