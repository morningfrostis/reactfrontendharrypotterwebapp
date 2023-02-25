import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

const Home: FC = () => {
  // const [marsList, setMarsList] = useState<Mars[]>([]);
  const navigate = useNavigate();

  // const getCharactersList = useCallback(async () => {
  //   const characters = await getMars();
  //   setMarsList(mars);
  // }, []);

  // useEffect(() => {
  //   console.log("entramos");
  //   getMarsList();
  // }, [getMarsList]);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/details/${id}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      {/* <Navbar /> */}
      <Container>
          {/* {marsList.map((mars, index) => (
            <Card
              key={index}
              nasaId={mars.nasaId}
              id={mars.id}
              sol={mars.sol}
              image={mars.image}
              onClick={goToDetails}
            />
          ))} */}
      </Container>
    </App>
  );
};

export default memo(Home);
