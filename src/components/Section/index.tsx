import React from 'react'
import { Container } from '~components/Container'
import { Heading } from './styled'

type SectionProps = {
    heading: string
}

export const Section: React.FC<SectionProps> = ({ heading, children }) => {
    return (
        <section>
            <Heading>{heading}</Heading>
            {children}
        </section>
    )
}
