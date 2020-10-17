import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { CarouselIntro } from '../modules/CarouselIntro'
import { Section } from '~components/Section'
import { Services } from '~components/Services'
import { ServicesGrid } from '~modules/ServicesGrid'

export default function Index() {
    return (
        <PageLayout>
            <Header />
            <CarouselIntro />
            <ServicesGrid heading="what we do?" />
        </PageLayout>
    )
}
