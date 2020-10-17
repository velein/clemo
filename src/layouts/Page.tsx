import React from 'react'

import { GlobalStyles } from '~styled/global'

const PageLayout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

export default PageLayout
