import React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'

import { globalStyles } from '~styled/global'
import { Button } from '~components/Button'

const Section = styled.section`
    max-width: 600px;
    border: 1px solid black;
    padding: 10px 20px;
    margin: 0 auto;
`

const PageLayout: React.FC = ({ children }) => {
    return (
        <Section>
            <Global styles={globalStyles} />
            {children} <Button variant="dark" label="Boop" />
        </Section>
    )
}

export default PageLayout
