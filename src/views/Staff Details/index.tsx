import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { getStaff, Staff } from "../../services/api/staff";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

const StaffDetails: FC = () => {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const navigate = useNavigate();
  const params = useParams();

  const getStaffList = useCallback(async () => {
    const staff = await getStaff();
    setStaffList(staff);
  }, []);

  useEffect(() => {
    console.log("entramos");
    getStaffList();
  }, [getStaffList]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goBack = useCallback(() => {
    navigate("/staff", { replace: true });
  }, [navigate]);

  const { id } = params;
  const filteredItems = staffList.filter((item) => item.id === id);
  return (
    <App>
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

export default memo(StaffDetails);
