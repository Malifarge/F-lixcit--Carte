import styled, { keyframes } from "styled-components";

const RotateAnim=keyframes`
    0% {
        transform: translateX(-300px)rotate(0deg);
    }
    100% {
        transform: translateX(0px)rotate(360deg);
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

    img {
        animation: ${RotateAnim} 0.8s linear;
        width: 50px;
        transform: scale(1);
        transition: transform 1s;
        opacity: 0.8;
        
      }
    
      img:hover {
        opacity: 1;
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 1s;
        animation-delay: 0s;
      }
`
