import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { DotStyledProps } from '.'

export const DotActive = ({ active }: DotStyledProps) =>
    active &&
    css`
        background-color: #000;
    `

export const Dot = styled.span<DotStyledProps>`
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #000;
    background: transparent;
    margin: 0 4px;

    &:hover {
        background-color: #000;
    }

    ${DotActive}
`

export const DotsWrapper = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 10px;
`
