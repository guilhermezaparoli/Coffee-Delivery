import * as C from './styles' 

interface ConfirmButtonProps {
text: string,
onClick: () => void

}

export function ConfirmButton({text, onClick} : ConfirmButtonProps) {
  return(
    <>
    <C.ButtonStyled onClick={onClick}>
      <p>
      {text}
      </p>
    </C.ButtonStyled>
    </>
  )
}