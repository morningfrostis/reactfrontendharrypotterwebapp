import styled, { css } from "styled-components";
import { Form as DefaultForm } from 'formik'


export const FormContainer = styled.div`
width: 100vw;
height:100vh;
align-items: center;
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.colors.ReactBlue};

`

export const Form = styled(DefaultForm)`
display: flex;
flex-direction: column ; 
background-color:${({ theme }) => theme.colors.grey100}; 
border-radius: 10px;
height: 25rem;
width:22.5rem;
margin-top: 6.25rem;
margin-left: 1.7rem;
margin-right: 1.7rem;
`
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const Input = styled.input<{ $hasError?: boolean }>`
padding:10px;
margin:10px;
border-radius: 5px;
${({ $hasError, theme }) =>
        $hasError ? theme.colors.danger : theme.colors.grey900};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
        $hasError &&
        css`
      color: ${theme.colors.danger};
    `}
`
export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;

`

export const FormButton = styled.button`
   border-radius: 5px;
   cursor:pointer;
   margin: 16px;
   padding:5px;
`

export const FormMessage = styled.p`
    align-items: center;
display: flex;
justify-content: center;
`

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
`


