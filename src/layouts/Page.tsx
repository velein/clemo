import React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Button } from '../components'
import { global } from '../styled/global'

const Section = styled.section`
    max-width: 600px;
    border: 1px solid black;
    padding: 10px 20px;
    margin: 0 auto;
`

const PageLayout: React.FC = ({ children }) => {
    return (
        <Section>
            <Global styles={global} />
            {children} <Button colorSchema="dark" label="Boop" />
        </Section>
    )
}

export default PageLayout
