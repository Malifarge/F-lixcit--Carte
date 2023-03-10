import styled from "styled-components";

export const FooterStyle = styled.footer`
    background: black;
    display: flex;
    padding:20px;
    align-items:center;
    position:fixed;
    bottom: 0;
    width:100%;
    height: 218px;
    div{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        h3{
            color: white;
        };
        a{  
            color: #FFFFFF90;
            margin:0;
            text-decoration:none;
            :hover{
                cursor:pointer;
                color:white;
                text-decoration: underline 2px ${({color})=>color}
            };
        };
    };
    img{
        width: 100px;
    };
`