import styled from "styled-components";

export const GlobalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 20px 20px;

max-width: 256px;
max-height: 310px;

border-radius: 6px 36px;
background-color: ${({theme}) => theme["base-card"]};

position: relative;
> img {
  position: absolute;
  top: 0;
  margin-top: -15px;
}
`

export const TagsCofee = styled.div`
padding: 4px 8px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 100px;
background-color: ${({theme}) => theme["yellow-light"]};

> p {
font-size: 0.625rem;
font-weight: 700;
text-transform: uppercase;
color: ${({theme}) => theme["yellow-dark"]};
}
`

export const CoffeeName = styled.h1`
/* font-family: 'Baloo 2'; */
font-size: 1.25rem;
font-weight: 700;
line-height: 1.3;
color: ${({theme}) => theme["base-subtitle"]};
margin: 20px 0 8px;

`

export const CoffeeDescription = styled.p `
text-align: center;
font-family: "Roboto", sans-serif;
font-size: 0.875rem;
`

export const WrapperFooter = styled.div`

display: flex;
align-items: center;
gap: 15px;

margin-top: 2rem;

 
> p, span {
  font-size: 14px;
  line-height: 1.3;
  color: ${({theme}) => theme["base-text"]};
}

> p span {
  font-family: "Baloo 2", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
}
`

export const AmountItemsAndAddCart = styled.div`

display: flex;
align-items: center;
gap: 8px;

`
export const AddItemsCard = styled.button`

display: flex;
align-items: center;
justify-content: center;

padding: 8px;
border-radius: 6px;
background-color: ${({theme}) => theme["purple-dark"]};
transition: 0.3s;
cursor: pointer;
border: none;

>svg {
  font-size: 22px;
  color: ${({theme}) => theme["base-card"]};
}

&:hover {
background-color: ${({theme}) => theme.purple};
 
}
`
export const WrapperTags = styled.div`
display: flex;
align-items: center;
gap: 4px;
`
