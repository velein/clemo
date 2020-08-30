import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { CarouselIntro } from '../blocks/CarouselIntro'

export default function Index() {
    return (
        <PageLayout>
            <Header />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            aliquid nesciunt pariatur corporis ipsa quae, rerum nam aliquam!
            Nemo temporibus magnam rem sapiente officia sunt ipsum quos placeat
            quia dolores?
            <CarouselIntro />
        </PageLayout>
    )
}
