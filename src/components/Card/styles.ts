import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
  flex: 0 0 300px;
  padding: 5px;
  padding-bottom: 25px;
  margin: 1em;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #740001;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:before {
    content: "Harry Potter character";
    font-family: "Oswald";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: linear-gradient(to top, #9d523c 0%, #f2a65a 74%);
    position: absolute;
    z-index: 10;
    max-width: 225px;
    top: -15px;
    padding: 5px;
    left: 0;
    right: 0;
    margin: auto;
  }
  /* Efecto de iluminación */
  &:hover {
    box-shadow: 0 0 10px 10px #2f73d8;
    transform: scale(1.05);
    transition: box-shadow 0.5s ease, transform 0.5s ease;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 5px;
  border-radius: 6px;
`;

export const Description = styled.p`
  margin-right: 1px;
  font-size: 18px;
  font-family: Oswald;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionApi = styled.p`
  display: contents;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.GriffindorRedDark};
`;

export const DetailsButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: large;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  /* color: ${({ theme }) => theme.colors.white}; */
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
`;
