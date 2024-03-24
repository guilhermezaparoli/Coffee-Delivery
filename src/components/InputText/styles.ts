import styled from "styled-components";


interface InputProps {
  errors: boolean
}
export const Input = styled.input<InputProps>`
width: 100%;
padding: 12px;

border-radius: 4px;
border: 1px solid ${({theme, errors}) => errors ? "red" : theme["base-button"]};

background-color: ${({theme}) => theme["base-input"]};
color: ${({theme}) => theme["base-text"]};
outline: none;


&&::-webkit-outer-spin-button,
&&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


&::placeholder {
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({theme}) => theme["base-label"]};
}

&:focus, &:focus-visible {
  border: 1px solid ${({theme}) => theme["yellow-dark"]};
}
`