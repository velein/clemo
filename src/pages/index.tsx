import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { CarouselIntro } from '../modules/CarouselIntro'
import { ServicesGrid } from '~modules/ServicesGrid'
import { Icon } from '~components/Icon'

export default function Index() {
    return (
        <PageLayout>
            <Header />
            <Icon icon="arrow" />
            <CarouselIntro />
            <ServicesGrid heading="what we do?" />
        </PageLayout>
    )
}
