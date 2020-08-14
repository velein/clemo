import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ButtonStyleProps } from '.'

const variantDark = ({ variant }: ButtonStyleProps) =>
    variant === 'dark' &&
    css`
        background-color: #000000;
        color: #ffffff;

        &:hover {
            background-color: #ffcb93;
            color: #000000;
        }
    `

const variantGhost = ({ variant }: ButtonStyleProps) =>
    variant === 'ghost' &&
    css`
        border: 1px solid #d8d8d8;
        color: #000000;

        &:hover {
            border: 1px solid #000000;
        }
    `

const variantLight = ({ variant }: ButtonStyleProps) =>
    variant === 'light' &&
    css`
        &:hover {
            background-color: #ffcb93;
        }
    `

export const ButtonStyled = styled.button<ButtonStyleProps>`
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    border-radius: 25px;
    font-size: 18px;
    padding: 16px 32px;
    transition-property: all;
    transition-duration: 250ms;

    ${variantLight}
    ${variantDark}
    ${variantGhost}
`
