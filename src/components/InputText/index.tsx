import { CSSProperties } from "react"
import * as C from "./styles"

interface InputTextProps {
  type: string,
  placeHolder?: string,
  style?: CSSProperties
}

export function InputText({type = "text", placeHolder, style}: InputTextProps) {
return (
  <C.Input type={type} placeholder={placeHolder} style={style}>

  </C.Input>
)
}