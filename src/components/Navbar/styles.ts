import styled from "styled-components";

export const CustomNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.RavenclawGreyLady};
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
`;
export const BackButton = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export const SignoutButton = styled.button`
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
export const Tittle = styled.p`
  padding: 16px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.GriffindorRed};
  font-family: ${({ theme }) => theme.font.MyFont};
`;

export const Logoimg = styled.div`
  background-image: url("https://i.ibb.co/v1Rbx3Z/Logo-title-navbar-ok.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  height: 50px;
`;
