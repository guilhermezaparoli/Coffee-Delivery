import styled from "styled-components";

export const Global = styled.div`
max-width: 70rem;
margin: 5.875rem auto 10rem;


display: flex;
gap: 32px;
`

export const LeftBlock = styled.div`
> h3 {
  margin-bottom: 16px;
}
`


export const BaseBlock = styled.div`
padding: 40px;
background-color: ${({theme}) => theme["base-card"]};
border-radius: 6px;
`

const BaseTextIconBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 8px;
margin-bottom: 32px;

> svg {
  font-size: 22px;
}
`

export const TextIconBlock = styled(BaseTextIconBlock)`

> svg {
  color: ${({theme}) => theme["yellow-dark"]};
}
`

const BaseText = styled.p`
color: ${({theme}) => theme["base-subtitle"]};

`

export const TextTitle = styled(BaseText)`
font-size: 16px;
color: ${({theme}) => theme["base-subtitle"]};
` 

export const TextSubtitle = styled(BaseText)`
font-size: 14px;
color: ${({theme}) => theme["base-subtitle"]};
`
export const WrapperInputsText = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

`

export const WrapperInputsInternal = styled.div`
display: flex;
gap: 12px;
`
export const TextIconBlockPayment = styled(BaseTextIconBlock)`

> svg {

  color: ${({theme}) => theme.purple};
}
`

export const PaymentMethod = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

export const RightBlock = styled.div`
>h3 {
  margin-bottom: 16px;
}
`

export const CartBlock = styled(BaseBlock)`
border-radius: 6px 44px;
`

export const ItemCart = styled.div`
padding: 8px 4px;


display: flex;
gap: 20px;

> img {
  width: 64px;
  height: 64px;
}
`

export const NameAmountRemoveItemContainer = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const AmountAndRemoveContainer = styled.div`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
`

export const Price = styled.p`
font-weight: 700;
line-height: 1.3;
color: ${({theme}) => theme["base-text"]};
margin-left: 50px;
`

export const DivisionLine = styled.div`
margin: 24px 0;

height: 1px;
background-color: ${({theme}) => theme["base-button"]};
`

export const Checkout = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

export const LineCheckout = styled.div`
display: flex;
justify-content: space-between;
`

export const SimpleText = styled.p`
font-size: 0.875rem;
color: ${({theme}) => theme["base-text"]};
line-height: 1.3;
`


export const BoldText = styled.p`
font-size: 1.25rem;
font-weight: 700;
line-height: 1.3;
color: ${({theme}) => theme["base-subtitle"]};

`