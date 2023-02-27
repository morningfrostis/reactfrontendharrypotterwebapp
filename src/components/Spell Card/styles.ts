import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  padding: 15px;
  width: 10em;
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
