import React from 'react'

import { Container } from '~components/Container'
import { GlobalStyles } from '~styled/global'

const PageLayout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Container>{children}</Container>
        </>
    )
}

export default PageLayout
