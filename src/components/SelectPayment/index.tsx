import * as C from "./styles"
import { IconProps } from "@phosphor-icons/react"

interface SelectPaymentProps {
  icon?: IconProps,
  title: string,
}

export function SelectPayment({icon, title}: SelectPaymentProps) {



  return (
  <C.MainContainer>
    <C.BlockTextIcon>
      <>
       {icon}
      </>
        <p>{title}</p>
    </C.BlockTextIcon>
  </C.MainContainer>
  )
}