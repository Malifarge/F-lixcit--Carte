import styled from "styled-components";

export const HeaderStyle= styled.header`
    display:flex;
    justify-Content: space-between;
    padding:10px;
    border-bottom: 2px solid ${({color})=>color};

    img{
        width:50px;
    }
`