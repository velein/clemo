/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

/**
 * Basically a button reset
 */
const buttonStyles = css`
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
    outline: none;
`

export const buttonTransition = css`
    transition: background-color 250ms, color 500ms, border-color 500ms;
`

export interface ButtonProps {
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button css={buttonStyles} {...rest}>
            {children}
        </button>
    )
}
