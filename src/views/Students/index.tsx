import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  getStudents,
  removeStudent,
  Student,
  syncStudents,
} from "../../services/api/students";
import {
  App,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
  SyncButton,
} from "./styles";

const Students: FC = () => {
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const syncData = useCallback(async () => {
    await syncStudents();
    setIsLoading(false);
    getStudentsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const goToDetails = useCallback(
    (studentsId: string) => {
      navigate(`/student/${studentsId}`, { replace: true });
    },
    [navigate]
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <App>
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
                image={
                  student.image !== ""
                    ? student.image
                    : (() => {
                        switch (student.house) {
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
                name={student.name}
                house={student.house}
                onClick={goToDetails}
                id={student.id}
                type="liststudents"
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
