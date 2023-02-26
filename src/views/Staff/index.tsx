import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Staff } from "../../services/api/staff";
import { getStaff, syncStaff } from "../../services/api/staff";
// import Navbar from "../../components/Navbar";
import { App, Container, SyncButton } from "./styles";

const Staffs: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const navigate = useNavigate();

  const getStaffList = useCallback(async () => {
    const staff = await getStaff();
    setStaffList(staff);
    console.log(staffList);
  }, []);

  const syncData = useCallback(async () => {
    await syncStaff();
  }, []);

  useEffect(() => {
    console.log("entramos");
    getStaffList();
  }, [getStaffList]);

  const goToDetails = useCallback(
    (staffId: string) => {
      navigate(`/staffdetails/${staffId}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      <Navbar />
      <Container>
        <SyncButton onClick={syncData} />
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
