import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.GriffindorRedDark};
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
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
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
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
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
