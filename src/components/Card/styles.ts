import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  padding: 15px;
  width: 10em;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  margin-right: 1px;
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.RavenclawGreyLady};
`;

export const DescriptionApi = styled.p`
  display: contents;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const DetailsButton = styled(Link)`
  padding: 10px 20px;
  background-color: #3498db;
  color: ${({ theme }) => theme.colors.white100};
  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
`;
