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
      navigate(`/staffdetails/${staffId}`, { replace: true });
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
      <Navbar />
      <SyncButton onClick={syncData}>Sync Staff</SyncButton>  
      <Container>
        {staffList.map((staff, index) => (
          <Card
            key={index}
            image={staff.image}
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
