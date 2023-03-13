import styled, { keyframes } from "styled-components";

const ScaleAnim= keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

const RotateAnim=keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

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
        animation: ${RotateAnim} 0.8s linear;
        width:50px;
        opacity:0.8;

        :hover{
            opacity:1;
            cursor:pointer;
            animation: ${ScaleAnim} 0.8s linear;
        };
    }
`
