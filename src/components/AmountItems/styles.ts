import styled from "styled-components";

export const Main = styled.div`
padding: 8px;
border-radius: 6px;
background-color: ${({theme}) => theme["base-button"]};


display: flex;
gap: 4px;
align-items: center;
justify-content: space-between;
min-height: 38px;


>span {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  color: ${({theme}) => theme["base-title"]};
  text-align: center;
  user-select: none;
  min-width: 20px;
}
`

const baseIcon = styled.button`

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
background-color: transparent;
border: none;


&:disabled {
   svg {
    opacity: 0.2;
    cursor: initial;
   }
  }

> svg {
  color: ${({theme}) => theme.purple};
  font-size: 16px;

 
}

`

export const IconMinus = styled(baseIcon)`

transition: 0.3s;
&:hover {
  filter: brightness(0.7);
}

`
export const IconPlus = styled(baseIcon)`
transition: 0.3s;
&:hover {
  filter: brightness(0.7);
}

`