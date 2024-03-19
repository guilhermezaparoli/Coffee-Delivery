import { IconProps } from '@phosphor-icons/react'
import * as C from './styles'


interface SecondaryButtonProps {
    text: string,
    icon?: IconProps
}

export function RemoveButton({ text, icon }: SecondaryButtonProps) {
    return (
        <>
            <C.ButtonStyled>
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