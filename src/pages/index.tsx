import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { CarouselIntro } from '../modules/CarouselIntro'
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
