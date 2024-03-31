import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import styled from "styled-components";

export const Main = styled.div`
width: 100%;

padding: 2rem 0;
max-width: 70rem;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
  padding: 1rem 0.5rem;
}
`

export const Logo = styled.div`
display: flex;
justify-content: center;
> img {
  cursor: pointer;
} 
  
`

export const LocationAndCart = styled.div`
display: flex;
align-items: center;
justify-content: center;

gap: 12px;
`

export const CardLocation = styled.div`
 padding: 8px;

 display: flex;
 justify-content: center;
 align-items: center;
 gap: 4px;

 background-color: ${({theme}) => theme["purple-light"]};
 border-radius: 6px;

`

export const TextCardLocation = styled.p`
font-family: "Roboto", sans-serif;
font-size: 14px;
line-height: 1.3;
color: ${props => props.theme["purple-dark"]};

`

export const IconMapPin = styled(MapPin).attrs({
  weight: "fill",
})`
color: ${({theme}) => theme.purple};

font-size: 22px;
@media (max-width: 768px) {
  font-size: 1rem;

}
`


export const CartStatus = styled.div`
padding: 8px;
border-radius: 6px;
background-color: ${({theme}) => theme["yellow-light"]};

height: 38px;
position: relative;
cursor: pointer; 
`

export const AmountItensCart = styled.div`
width: 20px;
height: 20px;
border-radius: 1000px;
background-color: ${({theme}) => theme["yellow-dark"]};
display: flex;
align-items: center;
justify-content: center;

top: 0;
right: 0;
margin-top: -8px;
margin-right: -5px;
position: absolute;
`
export const TextAmountItensCart = styled.p`
width: 20px;

text-align: center;

color: ${({theme})=> theme.white};
font-size: 0.75rem;
font-weight: 700;
line-height: 1.3;
font-family: "Roboto", sans-serif;
`

export const IconCart = styled(ShoppingCart).attrs(({
  weight: "fill",
  size: "22px",
}))`

color: ${({theme}) => theme["yellow-dark"]};

`
