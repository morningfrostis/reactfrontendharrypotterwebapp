import styled from "styled-components";
export const App = styled.div`
  text-align: center;
  background-color: #282C34;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const Container = styled.div`
  padding: 5em;
  padding-top: 5px;
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;
export const SyncButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonPreview = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonNext = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
`;



