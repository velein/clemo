import React from 'react'
import PageLayout from '~layouts/Page'
import { Header } from '~components/Header'
import { CarouselIntro } from '../modules/CarouselIntro'
import { Section } from '~components/Section'
import { Services } from '~components/Services'

export default function Index() {
    return (
        <PageLayout>
            <Header />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            aliquid nesciunt pariatur corporis ipsa quae, rerum nam aliquam!
            Nemo temporibus magnam rem sapiente officia sunt ipsum quos placeat
            quia dolores?
            <CarouselIntro />
            <Section heading="what we do?">
                <Services
                    services={[
                        {
                            category: 'creative',
                            heading: 'kitchen',
                            image: '',
                            content: (
                                <div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas
                                        sit aspernatur aut odit aut fugit, sed
                                        quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            ),
                        },
                        {
                            category: 'art',
                            heading: 'installation',
                            image: '',
                            content: (
                                <div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas
                                        sit aspernatur aut odit aut fugit, sed
                                        quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            ),
                        },
                        {
                            category: 'print',
                            heading: 'design',
                            image: '',
                            content: (
                                <div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas
                                        sit aspernatur aut odit aut fugit, sed
                                        quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            ),
                        },
                    ]}
                />
            </Section>
        </PageLayout>
    )
}
