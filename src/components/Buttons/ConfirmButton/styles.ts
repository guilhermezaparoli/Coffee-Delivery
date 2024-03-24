import styled from "styled-components";

export const ButtonStyled = styled.button`
/* border: 1px solid ${({theme}) => theme.black}; */
border: none;
border-radius: 6px;
padding: 12px 8px;
width: 100%;

cursor: pointer;
text-transform: uppercase;
color: ${({theme}) => theme.white};
font-weight: 500;
background-color: ${({theme}) => theme.yellow};

transition: 0.3s;
&:hover {
    background-color: ${({theme}) => theme["yellow-dark"]};
    box-shadow: 0px 4px 4px 25% ${({theme}) => theme.black};
    /* border: 1px solid ${({theme}) => theme["yellow-dark"]}; */
}

`