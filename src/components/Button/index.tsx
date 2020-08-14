import React from 'react'

import { ButtonStyled } from './styled'

export interface ButtonProps {
    variant: 'dark' | 'light' | 'ghost'
    onClick?: () => void
    label: string
}
export type ButtonStyleProps = Pick<ButtonProps, 'variant'>

export const Button: React.FC<ButtonProps> = ({ variant, label, onClick }) => {
    return (
        <ButtonStyled onClick={onClick} variant={variant}>
            {label}
        </ButtonStyled>
    )
}
