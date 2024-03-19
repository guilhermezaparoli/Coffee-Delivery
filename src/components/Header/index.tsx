import * as C from "./styles"
import LogoCoffeeDelivery from "../../assets/images/logo.svg"



export function Header() {
  return (

    <C.Main>
      <C.Logo>
        <img src={LogoCoffeeDelivery} alt="" />
      </C.Logo>
      <C.LocationAndCart>
        <C.CardLocation> 
          <C.IconMapPin/>
          <C.TextCardLocation>
            Porto Alegre, RS
          </C.TextCardLocation>
        </C.CardLocation>
          <C.CartStatus>
            <C.IconCart/>
          </C.CartStatus>
      </C.LocationAndCart>

    </C.Main>

  )
}