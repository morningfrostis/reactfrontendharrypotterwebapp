import { FC, useState, useCallback, useEffect } from "react";
import { App, Container } from "./styles";
import { getUserInfo, ProfileResponse } from "../../services/api/profile";
import Card from "../../components/Card";

const Profile: FC = () => {
  const [userinfo, setUserInfo] = useState<ProfileResponse[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  const getProfileList = useCallback(async () => {
    const userprofile = await getUserInfo();
    //@ts-ignore
    setUserInfo(userprofile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  if (isloading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <Container>
        {userinfo.map((user, index) => (
          <div key={index}>
            <Card id={user.id} email={user.email} />
          </div>
        ))}
      </Container>
    </App>
  );
};

export default Profile;
