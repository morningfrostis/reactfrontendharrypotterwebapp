import { FC, useState, useCallback, useEffect, memo } from "react";
import {
  App,
  ButtonBack,
  ButtonContainer,
  Container,
  Info,
  SpinnerContainer,
} from "./styles";
import { getUserFavorites, getUserInfo } from "../../services/api/profile";
import type { Favorites, Profile } from "../../models/profile";
import { useNavigate, useParams } from "react-router-dom";

const Profile: FC = () => {
  const [userinfo, setUserInfo] = useState<Profile | null>(null);
  const [userfavs, setUserFavs] = useState<Favorites | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getProfileList = useCallback(async () => {
    setIsLoading(true);
    const userprofile = await getUserInfo();
    setUserInfo(userprofile);
    setIsLoading(false);
  }, []);

  const getFavoriteList = useCallback(async (id?:string) => {
    setIsLoading(true);
    const userfavorites = await getUserFavorites();
    console.log(userfavorites, 'esto es userfav')
    setUserFavs(userfavorites);
    setIsLoading(false);
  }, []);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  useEffect(() => {
    getFavoriteList();
  }, [getFavoriteList]);

  if (isloading) {
    return <SpinnerContainer>LOADING</SpinnerContainer>;
  }

  return (
    <App>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        <Info>ID: {userinfo?.id}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
      </Container>

      <Container>
        <Info>Image: {userfavs?.favorites.image}</Info>
        <Info>ID: {userfavs?.id}</Info>
        <Info>CharacterId: {userfavs?.characterId}</Info>
        <Info>Name: {userfavs?.name}</Info>
        <Info>Species: {userfavs?.species}</Info>
        <Info>House: {userfavs?.house}</Info>
        <Info>Wizard: {userfavs?.wizard}</Info>
        <Info>Ancestry: {userfavs?.ancestry}</Info>
        <Info>Patronus: {userfavs?.patronus}</Info>
        <Info>Actor: {userfavs?.actor}</Info>
      </Container>
    </App>
  );
};

export default memo(Profile);
