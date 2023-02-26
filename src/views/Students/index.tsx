import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getStudents, Student, syncStudents } from "../../services/api/students";
// import Navbar from "../../components/Navbar";
import { App, Container, SyncButton } from "./styles";

const Students: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const navigate = useNavigate();

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
    console.log(studentsList);
  }, []);
 
  const syncData = useCallback(async () => {
    await syncStudents();
 }, []);

 

  useEffect(() => {
    console.log("entramos");
    getStudentsList();
  }, [getStudentsList]);

  const goToDetails = useCallback(
    (studentsId: string) => {
      navigate(`/details/${studentsId}`, { replace: true });
    },
    [navigate]
  );

  

  return (
    <App>
      <Navbar />
      <Container>
        <SyncButton onClick={syncData}/>
        {studentsList.map((student, index) => (
          <Card
            key={index}
            image={student.image}
            name={student.name}
            house={student.house}
            onClick={goToDetails}
            id={student.id}
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Students);
