import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import {
  getStudents,
  Student,
  syncStudents,
} from "../../services/api/students";
import { App, Container, SyncButton } from "./styles";

const Students: FC = () => {
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
    console.log(studentsList);
  }, []);

  const syncData = useCallback(async () => {
    await syncStudents();
    setLoading(false);
    getStudentsList();
  }, []);

  // useEffect(() => {
  //   console.log("entramos");
  //   getStudentsList();
  // }, [getStudentsList]);

  const goToDetails = useCallback(
    (studentsId: string) => {
      navigate(`/studentsdetails/${studentsId}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      <Navbar />
      <SyncButton onClick={syncData}>Sync Students</SyncButton>
      <Container>
        {studentsList.map((student, index) => (
          <Card
            key={index}
            image={student.image}
            name={student.name}
            house={student.house}
            onClick={goToDetails}
            id={student.id}
            type="liststudents"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Students);
