/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useCallback } from "react";
import { Props } from "./types";
import { useNavigate } from "react-router-dom";
import {
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

  return (
    <>
      <GlobalStyle />
      <CustomNavbar>
        <Tittle to="/landing">
          <Logoimg></Logoimg>
        </Tittle>
        <ProfileButton to="/profile">Profile</ProfileButton>
        <SignoutButton onClick={handleSignOut}>LogOut</SignoutButton>
      </CustomNavbar>
    </>
  );
};

export default Navbar;

//   return (
//     <CustomNavbar>
//       <GlobalStyle>
//         <Tittle>Harry Potter Web App</Tittle>
//       </GlobalStyle>
//       {type === "details" && <BackButton onClick={goToBack}>🔙</BackButton>}
//       {/* <SignoutButton onClick={handleSignOut}>LogOut</SignoutButton> */}
//     </CustomNavbar>
//   );
// };
