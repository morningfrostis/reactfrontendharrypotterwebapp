import styled from "styled-components";

export const CustomNavbar = styled.nav`
    background-color:${({ theme }) => theme.colors.RavenclawGreyLady};
    display:flex;
    justify-content:space-between;
    height:60px;
    width: 100%;
`
export const BackButton = styled.button`
    width: 40px;
    height: 30px;
    border-radius: 5px;
    margin:10px;
    cursor:pointer;
`

export const SignoutButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 20px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;
    font-weight:bold;
    cursor:pointer;
`
export const Tittle = styled.p`
    padding:16px;
    margin:16px;
    color:black;
    ` 

