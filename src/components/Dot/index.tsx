import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { Button } from '~components/Button'

export type DotProps = {
    isActive: boolean
}

export const isActiveDot = ({ isActive }: DotProps) =>
    isActive &&
    css`
        background-color: #000;
    `

/**
 * TODO: We should not pass isActive directly to styled native button.
 * We should do something like `({ isActive, ...rest}) => <Button {...rest} />`
 */
export const Dot = styled(Button, {})<DotProps>`
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #000;
    background: transparent;
    cursor: pointer;

    &:hover {
        background-color: #000;
    }

    ${isActiveDot}
`
