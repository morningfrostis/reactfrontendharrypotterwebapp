import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.RavenclawGreyLady};
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const SignoutButton = styled.button`
  font-family: Oswald;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export const ProfileButton = styled.button`
  font-family: Oswald;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export const Tittle = styled(Link)`
  padding-bottom: 16px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.DementorBlack};
  font-family: ${({ theme }) => theme.font.MyFont};
  text-decoration: none;
  font-size: 30px;
  &:hover {
    color: ${({ theme }) => theme.colors.GriffindorRedDark};
  }
`;

export const Logoimg = styled.div`
  background-image: url("https://i.ibb.co/v1Rbx3Z/Logo-title-navbar-ok.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  height: 50px;
`;

// export const WelcomeButton = styled(Link)`
//   padding: 10px 20px;
//   background-color: ${({ theme }) => theme.colors.GriffindorRedDark};
//   color: ${({ theme }) => theme.colors.white100};
//   border-radius: 5px;
//   font-family: Oswald;
//   text-decoration: none;
//   margin: 0 10px;
// `;
