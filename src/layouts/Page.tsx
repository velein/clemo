import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
    max-width: 600px;
    border: 1px solid black;
    padding: 10px 20px;
`

const PageLayout: React.FC = ({ children }) => {
    return <Section>{children}</Section>
}

export default PageLayout
