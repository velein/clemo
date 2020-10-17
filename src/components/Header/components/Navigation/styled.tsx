import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from '~components/Link'

import { NavigationItemStyleProps } from '.'

export const NavigationStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 300;
`

const test = ({ active }: NavigationItemStyleProps) =>
    active &&
    css`
        color: #000000;

        &::after {
            width: 45%;
        }
    `

export const NavigationItem = styled.li<NavigationItemStyleProps>`
    position: relative;
    color: #989898;

    &:not(:last-of-type) {
        margin: 0 15px 0 0;
    }

    padding: 0 0 4px;

    &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        height: 1px;
        background-color: #000000;
        left: 0px;

        transition-property: width;
        transition-duration: 250ms;
        width: 0;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        height: 1px;
        background-color: #000000;
        left: 0px;

        transition-property: width;
        transition-duration: 250ms;
        width: 0;
    }

    &:hover {
        &::after {
            width: 45%;
        }
    }

    ${test}
`

export const NavigationLink = styled(Link)`
    text-decoration: none;

    transition-property: color;
    transition-duration: 250ms;

    /* &:hover {
        color: #000000;
    } */
`
