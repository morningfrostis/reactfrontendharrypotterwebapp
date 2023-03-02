import styled, { css } from "styled-components";

export const CustomButton = styled.button<{ $isDisabled?: boolean }>`
  font-family: "Oswald", sans-serif;
  background-color: ${({ theme }) => theme.colors.grey100};
  color: ${({ theme }) => theme.colors.blue900};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white100};
    color: ${({ theme }) => theme.colors.red100};
    box-shadow: 0px 5px ${({ theme }) => theme.colors.red100};
    transform: translate(0, -5px);
  }
  ${({ $isDisabled, theme }) =>
    $isDisabled &&
    css`
      background-color: grey;
    `}
`;
