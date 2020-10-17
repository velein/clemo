import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { ServicesGrid } from '~modules/ServicesGrid'

export default function Services() {
    return (
        <PageLayout>
            <Header />
            <ServicesGrid heading="services" />
        </PageLayout>
    )
}
