import React from 'react'
import styled from '@emotion/styled'
import { Button } from '../components'

const Section = styled.section`
    max-width: 600px;
    border: 1px solid black;
    padding: 10px 20px;
`

const PageLayout: React.FC = ({ children }) => {
    return (
        <Section>
            {children}{' '}
            <Button colorSchema="dark" onClick={() => {}}>
                Boop
            </Button>
        </Section>
    )
}

export default PageLayout
