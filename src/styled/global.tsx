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
        font-family: inherit;
    }
`

export const GlobalStyles: React.FC = () => <Global styles={styles} />
