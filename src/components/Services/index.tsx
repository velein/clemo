import React from 'react'
import {
    Grid,
    GridItem,
    GridItemArticle,
    GridItemImage,
    ServiceCategory,
    ServiceHeading,
} from './styled'

type Service = {
    category: 'creative' | 'art' | 'print'
    image: string
    heading: string
    content: JSX.Element
}

type ServicesProps = {
    services: Service[]
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <Grid>
            {services.map(({ category, content, heading, image }, index) => (
                <GridItem key={index}>
                    <GridItemImage src="https://picsum.photos/560/560" />
                    <GridItemArticle>
                        <ServiceCategory>{category}</ServiceCategory>
                        <ServiceHeading>{heading}</ServiceHeading>
                        <main>{content}</main>
                    </GridItemArticle>
                </GridItem>
            ))}
        </Grid>
    )
}
