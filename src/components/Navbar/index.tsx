/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useCallback } from "react";
import { Props } from "./types";
import { useNavigate } from "react-router-dom";
import {
  ContainerButton,
  Logoimg,
  ProfileButton,
  SignoutButton,
  Tittle,
} from "../../components/Navbar/styles";
import { CustomNavbar } from "./styles";
import { GlobalStyle } from "../../styles/theme";

const Navbar: FC<Props> = ({ type = "list" }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    window.localStorage.clear();
    navigate("/");
  };

  const handleProfile = async () => {
    navigate("/profile");
  };

  return (
    <>
      <GlobalStyle />
      <CustomNavbar>
        <Tittle to="/landing">
          <Logoimg></Logoimg>
        </Tittle>
        <ContainerButton>
          <ProfileButton onClick={handleProfile}>Profile</ProfileButton>
          <SignoutButton onClick={handleSignOut}>LogOut</SignoutButton>
        </ContainerButton>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
