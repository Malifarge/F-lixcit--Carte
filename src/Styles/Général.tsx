import styled from "styled-components";

export const Body=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
`
export const ButtonStyle=styled.button`
    background: none;
    border:  1px solid ${({color})=>color};
    border-radius:20px;
    color: #00000090;
    width:100px;
    height: 30px;

    :hover{
        cursor:pointer;
        color: #000000;
    }
`