import styled from "styled-components";

export const GlobalStyle = styled.div`
max-width: 70rem;
margin: 5.875rem auto 10rem;

@media (max-width: 768px) {
 padding: 10px;
 margin: 2rem auto 5rem;
}
`

export const FirstBlock = styled.div`
/* padding: 6rem 10rem 10rem; */
display: flex;
gap: 3.5rem;
margin-bottom: 6rem;

@media (max-width: 768px) {
  flex-direction: column-reverse;
  gap: 2.5rem;
}
`

export const TextBlock = styled.div``

export const ImageBlock = styled.div`
@media (max-width: 768px) {
  display: flex;
  justify-content: center;
  > img {
    width: 100%;
  }
}
`

export const TitleAndSubtitleBlock = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
> h1 {
  color: ${({theme}) => theme["base-title"]};
  font-family: "Baloo 2", sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.3;
}

> p {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  > h1 {
    font-size: 1.5rem;
  }

  > p {
  font-size: 1rem;
}
}
`

export const FeaturesBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 4rem;

@media (max-width: 768px) {
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;

@media (max-width: 768px) {
  width: 100%;
  gap: 15px;
}

`

export const TextIconBlock = styled.div`
display: flex;
align-items: center;
gap: 12px;

@media (max-width: 768px) {
> p {
  font-size: 0.85rem;
}
}

`

const IconBase = styled.div`
padding: 8px;
border-radius: 1000px;

width: 32px;
height: 32px;

display: flex;
align-items: center;
justify-content: center;

> svg {
color: ${({theme}) => theme.white};
}

`

export const IconCartRounded = styled(IconBase)`
background-color: ${({theme}) => theme["yellow-dark"]};


`

export const IconPackageRounded = styled(IconBase)`
background-color: ${({theme}) => theme["base-text"]};


`
export const IconTimerRounded = styled(IconBase)`
background-color: ${({theme}) => theme.yellow};


`
export const IconCoffeeRounded = styled(IconBase)`
background-color: ${({theme}) => theme.purple};


`

export const ListCoffee = styled.div`
> h1 {
  font-size: 2rem;
  color: ${({theme}) => theme["base-subtitle"]};
  font-weight: 800;
  margin-bottom: 3.375rem;
}

@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

`

export const Coffee = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 40px 32px;


`