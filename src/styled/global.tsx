import React from 'react'
import { css } from '@emotion/core'
import { Global } from '@emotion/core'
import { reset } from './reset'

// TODO: Fix google fon't won't appear in Storybook
const styles = css`
    ${reset}

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    button {
        color: inherit;
        font-family: inherit;
    }

    a {
        text-decoration: none;
    }
`

export const GlobalStyles: React.FC = () => <Global styles={styles} />
