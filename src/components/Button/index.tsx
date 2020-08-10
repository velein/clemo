import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const DarkButton = ({ colorSchema }: Pick<Button, 'colorSchema'>) =>
    colorSchema === 'dark' &&
    css`
        background-color: #000000;
        color: #ffffff;

        &:hover {
            background-color: #ffcb93;
            color: #000000;
        }
    `

const StyledButton = styled.button<Button>`
    color: red;
    ${DarkButton}
`

type Button = {
    colorSchema: 'dark' | 'light' | 'ghost'
    onClick: () => void
}

export const Button: React.FC<Button> = ({
    colorSchema,
    onClick,
    children,
}) => {
    return (
        <StyledButton onClick={onClick} colorSchema={colorSchema}>
            {children}
        </StyledButton>
    )
}
