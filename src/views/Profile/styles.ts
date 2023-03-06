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
export const Container = styled.div`
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
  flex: 0 0 300px;
  padding: 5px;
  padding-bottom: 25px;
  margin: 2em;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #740001;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:before {
    content: "User Profile";
    font-family: "Oswald";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: linear-gradient(to top, #740001 0%, #740001 74%);
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

export const SpinnerContainer = styled.h1``;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.DementorBlack};
  font-size: 22px;
  font-weight: bold;
`;
export const MainContainerProfile = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin-top: 5rem;
`;

export const FavH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

export const IdContainer = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.light};
`;

export const EmailContainer = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.light};
`;

export const NameContainer = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ApodFavContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 500px;
  width: 300px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBack = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;
