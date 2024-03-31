import styled from "styled-components";

interface MainContainerProps {
  isSelected: boolean
}

export const MainContainer = styled.button<MainContainerProps>`
padding: 16px;
border-radius: 6px;
background-color: ${({theme, isSelected}) => isSelected ? theme["purple-light"] : theme["base-button"]};
display: inline-block;
cursor: pointer;

border: ${({theme, isSelected}) => isSelected ? `1px solid ${theme.purple} ` : '1px solid transparent'};

outline: none;

transition: 0.3s;

&:hover { 
  background-color: ${({theme}) => theme["base-hover"]};
}

&:focus {
border: 1px solid ${({theme}) => theme.purple};
background-color: ${({theme}) => theme["purple-light"]};
}

@media (max-width: 768px) {
  padding: 12px;
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