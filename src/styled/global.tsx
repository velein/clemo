import React from 'react'
import { css } from '@emotion/core'
import { Global } from '@emotion/core'

const styles = css`
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        color: #000000;
    }

    a,
    button {
        color: inherit;
        font-family: inherit;
    }

    a {
        text-decoration: none;
    }
`

export const GlobalStyles: React.FC = () => <Global styles={styles} />
