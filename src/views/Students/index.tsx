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
            image={
              student.image !== '' ? student.image :
              (() => {
              
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
        ))}
      </Container>
    </App>
  );
};

export default memo(Students);
