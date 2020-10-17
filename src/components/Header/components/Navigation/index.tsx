import React from 'react'

import { NavigationItem, NavigationLink, NavigationStyled } from './styled'

export interface NavigationItemStyleProps {
    active?: boolean
}

export const Navigation: React.FC = () => {
    return (
        <NavigationStyled>
            <NavigationItem active>
                <NavigationLink to="/about-us">about us</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/services">services</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/contact">contact</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/blog">blog</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/contact">contact</NavigationLink>
            </NavigationItem>
        </NavigationStyled>
    )
}
