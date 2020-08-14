import React from 'react'

import { NavigationItem, NavigationLink, NavigationStyled } from './styled'

export interface NavigationItemStyleProps {
    active?: boolean
}

export const Navigation: React.FC = () => {
    return (
        <NavigationStyled>
            <NavigationItem active>
                <NavigationLink href="/about-us">about us</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink href="/services">services</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink href="/contact">contact</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink href="/blog">blog</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink href="/contact">contact</NavigationLink>
            </NavigationItem>
        </NavigationStyled>
    )
}
