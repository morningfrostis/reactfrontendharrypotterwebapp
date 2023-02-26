import styled from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.RavenclawGreyLady};
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  border: 1px solid white;
  padding: 15px;
  width: 10em;
`;
