import React from 'react'
import { GlobalStyles } from '~styled/global'
import PageLayout from '~layouts/Page'

export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <PageLayout>
                <Story />
            </PageLayout>
        </>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
}
