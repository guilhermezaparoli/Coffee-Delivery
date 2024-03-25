import { CSSProperties, InputHTMLAttributes } from "react"
import * as C from "./styles"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string,
  style?: CSSProperties,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any,
errors?: boolean

}

export function InputText({ type = "text", placeHolder, style, register, errors = false, ...rest }: InputTextProps) {
  return (
    <C.Input  type={type} placeholder={placeHolder} style={style} errors={errors} {...register} {...rest} />
  );
}
