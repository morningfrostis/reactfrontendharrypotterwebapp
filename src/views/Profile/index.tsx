import { FC, useState, useCallback, useEffect, memo } from "react";
import { App, Container, Info, SpinnerContainer } from "./styles";
import { getUserInfo } from "../../services/api/profile";
import type { Profile } from '../../models/profile'
import { useNavigate } from "react-router-dom";

const Profile: FC = () => {
  const [userinfo, setUserInfo] = useState<Profile | null>(null)
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  
  const getProfileList = useCallback(async () => {
    setIsLoading(true)
    const userprofile = await getUserInfo();
    setUserInfo(userprofile);
    setIsLoading(false)
  }, []);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  if (isloading) {
    return <SpinnerContainer>LOADING</SpinnerContainer>;
  }

  return (
    <App>
      <Container>
      <Info>ID: {userinfo?.id}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
        {/* {userinfo.map((user, index) => (
          <div key={index}>
            <Card id={user.id} email={user.email} />
          </div>
        ))} */}
      </Container>
    </App>
  );
};

export default memo(Profile);
