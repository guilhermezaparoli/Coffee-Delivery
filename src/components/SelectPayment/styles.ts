import styled from "styled-components";

export const MainContainer = styled.button`
padding: 16px;
border-radius: 6px;
background-color: ${({theme}) => theme["base-button"]};
display: inline-block;
cursor: pointer;

border: none;
outline: none;

transition: 0.3s;

border: 1px solid transparent;

&:hover {
  background-color: ${({theme}) => theme["base-hover"]};
}

&:focus {
border: 1px solid ${({theme}) => theme.purple};
background-color: ${({theme}) => theme["purple-light"]};
}
`

export const BlockTextIcon = styled.div`
display: flex;
gap: 12px;
align-items: center;

> svg {
  font-size: 1rem;
  color: ${({theme}) => theme.purple};
}

> p {
  font-size: 0.75rem;
  text-transform: uppercase;
}
`