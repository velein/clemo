import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { resetButton } from '../../styled/helpers'

export interface ButtonProps {
    colorSchema: 'dark' | 'light' | 'ghost'
    onClick?: () => void
    label: string
}

const DarkButton = ({ colorSchema }: Pick<ButtonProps, 'colorSchema'>) =>
    colorSchema === 'dark' &&
    css`
        background-color: #000000;
        color: #ffffff;

        &:hover {
            background-color: #ffcb93;
            color: #000000;
        }
    `

const StyledButton = styled.button<Pick<ButtonProps, 'colorSchema'>>`
    ${resetButton}
    border-radius: 25px;
    font-size: 18px;
    padding: 16px 32px;
    ${DarkButton}
`

export const Button: React.FC<ButtonProps> = ({
    colorSchema,
    label,
    onClick,
}) => {
    return (
        <StyledButton onClick={onClick} colorSchema={colorSchema}>
            {label}
        </StyledButton>
    )
}
