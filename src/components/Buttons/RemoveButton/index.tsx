import { IconProps } from '@phosphor-icons/react'
import * as C from './styles'


interface SecondaryButtonProps {
    text: string,
    icon?: IconProps,
    onClick: () => void
}

export function RemoveButton({ text, icon, onClick }: SecondaryButtonProps) {
    return (
        <>
            <C.ButtonStyled onClick={onClick}>
                <C.BlockTextIcon>
                    <>
                        {icon}
                    </>
                    <C.Text>
                        {text}
                    </C.Text>
                </C.BlockTextIcon>
            </C.ButtonStyled>
        </>
    )
}