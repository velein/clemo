import styled from '@emotion/styled'
import React from 'react'
import { Section } from '~components/Section'
import { Heading } from '~components/Section/styled'
import { Services } from '~components/Services'

const ServicesGridHeading = styled(Heading)`
    margin: 0 0 100px;
`

type ServicesGridProps = {
    heading: string
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
    heading = 'what we do?',
}) => {
    return (
        <Section>
            <ServicesGridHeading>{heading}</ServicesGridHeading>
            <Services
                services={[
                    {
                        category: 'creative',
                        heading: 'kitchen',
                        image: '',
                        content: (
                            <div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo.
                                </p>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.
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
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo.
                                </p>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.
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
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo.
                                </p>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
        </Section>
    )
}
