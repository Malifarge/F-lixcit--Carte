import styled from "styled-components";

export const InfoContain= styled.div`
flex:1;
margin: 72px 0 258px;
padding:0 30px 10px;
overflow:auto;

h1{
    text-align:center;
    text-decoration: underline 2px ${({color})=>color};
}

p{
    :hover{
        margin-left:5px;
        text-decoration: underline 2px ${({color})=>color};
    }
}

input{
    border:none;
    width:35px;
    height:35px;
    background:transparent;
    cursor:pointer;

    ::-webkit-color-swatch {
        border-radius:50%;
        border:none;
    }

    ::-moz-color-swatch {
        border-radius:50%;
        border:none;
    }
}

section{
    display: flex;
    justify-content:space-between;

    @media (max-width: 500px){
        flex-direction:column;
        text-align:center;
        justify-content:center;
        align-items:center;
        gap: 5px;
    }
}
`

