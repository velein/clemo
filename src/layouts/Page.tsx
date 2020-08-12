import React from 'react'

import { Button } from '~components/Button'
import { Container } from '~components/Container'
import { Logo } from '~components/Logo'
import { GlobalStyles } from '~styled/global'

const PageLayout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Logo />
                {children}
                <Button variant="dark" label="Boop" />
            </Container>
        </>
    )
}

export default PageLayout
