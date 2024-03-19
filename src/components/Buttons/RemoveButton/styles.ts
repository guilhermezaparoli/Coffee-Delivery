import styled from "styled-components";

export const ButtonStyled = styled.button`
border: none;
outline: none;
user-select: none;

cursor: pointer;
padding: 0 8px;
height: 38px;

display: flex;
align-items: center;
gap: 4px;

border-radius: 6px;
background-color: ${({ theme }) => theme["base-button"]};

transition: 0.3s;


&:hover {
    background-color: ${({ theme }) => theme["base-hover"]};

   > div  p {
    color: ${({ theme }) => theme["base-subtitle"]};

   };
   > div svg {
    color: ${({ theme }) => theme["purple-dark"]};
    font-size: 16px;
}
}

`

export const BlockTextIcon = styled.div`
display: flex;
align-items: center;
gap: 4px;


> svg {
    color: ${({ theme }) => theme.purple};
    font-size: 16px;
}
`

export const Text = styled.p`
font-size: 12px;
line-height: 1.6;

`