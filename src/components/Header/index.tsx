import React from 'react'

import { Container } from '~components/Container'
import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'
import { HeaderStyled, HeaderWrapper } from './styled'

export const Header: React.FC = () => (
    <HeaderStyled>
        <Container>
            <HeaderWrapper>
                <Logo />
                <Navigation />
            </HeaderWrapper>
        </Container>
    </HeaderStyled>
)
