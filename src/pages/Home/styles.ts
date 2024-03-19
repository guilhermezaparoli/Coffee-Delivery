import styled from "styled-components";

export const GlobalStyle = styled.div`
max-width: 70rem;
margin: 5.875rem auto 10rem;
`

export const FirstBlock = styled.div`
/* padding: 6rem 10rem 10rem; */
display: flex;
gap: 3.5rem;
margin-bottom: 6rem;
`

export const TextBlock = styled.div``

export const ImageBlock = styled.div``

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
`

export const FeaturesBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 4rem;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;

`

export const TextIconBlock = styled.div`
display: flex;
align-items: center;
gap: 12px;

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



`

export const Coffee = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

gap: 40px 32px;

`