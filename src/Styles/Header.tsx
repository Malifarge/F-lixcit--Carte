import styled from "styled-components";

export const HeaderStyle= styled.header`
    display:flex;
    width:100vw;
    justify-Content: space-around;
    align-items: center;
    padding:10px;
    position:fixed;
    top:0;
    border-bottom: 2px solid ${({color})=>color}90;

    img{
        width:50px;
    }
`