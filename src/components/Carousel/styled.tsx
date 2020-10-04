import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const SliderWrapper = styled.section`
    position: relative;
`

// TODO: Make a dot a separate component
type DotStyledProps = {
    isActive: boolean
}

export const DotActive = ({ isActive }: DotStyledProps) =>
    isActive &&
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
    cursor: pointer;

    &:hover {
        background-color: #000;
    }

    ${DotActive}
`
