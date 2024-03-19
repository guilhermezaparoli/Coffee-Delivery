import * as C from './styles' 

interface ConfirmButtonProps {
text: string,

}

export function ConfirmButton({text} : ConfirmButtonProps) {
  return(
    <>
    <C.ButtonStyled>
      <p>
      {text}
      </p>
    </C.ButtonStyled>
    </>
  )
}