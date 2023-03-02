import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Staff } from "../../services/api/staff";
import { getStaff, syncStaff } from "../../services/api/staff";
import { App, Container, SyncButton } from "./styles";

const Staffs: FC = () => {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)


  const getStaffList = useCallback(async () => {
    const staff = await getStaff();
    setStaffList(staff);
    console.log(staffList);
  }, []);

  const syncData = useCallback(async () => {
    await syncStaff();
    setLoading(false)
    getStaffList();
  }, []);

  // useEffect(() => {
  //   console.log("entramos");
  //   getStaffList();
  // }, [getStaffList]);

  const goToDetails = useCallback(
    (staffId: string) => {
      navigate(`/staff/${staffId}`, { replace: true });
    },
    [navigate]
  );

  if(loading) {
    return(
      <h1>LOADING</h1>
    )
  }

  return (
    <App>
      <SyncButton onClick={syncData}>Sync Staff</SyncButton>  
      <Container>
        {staffList.map((staff, index) => (
          <Card
            key={index}
            image={
              staff.image !== '' ? staff.image :
              (() => {
              
                switch (staff.house) {
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
            name={staff.name}
            house={staff.house}
            onClick={goToDetails}
            id={staff.id}
            type="liststaff"
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Staffs);
