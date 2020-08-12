import React from 'react'
import { GlobalStyles } from '~styled/global'

export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
}
