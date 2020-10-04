import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Carousel, CarouselNav, CarouselSlides } from '.'
import { Dot } from './styled'

export default {
    title: 'Components/Slider',
    component: Carousel,
} as Meta

// TODO: Add more stories with navigation items, arrows etc.
const Template: Story = (args) => (
    <Carousel>
        <CarouselSlides>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
        </CarouselSlides>
        <CarouselNav renderItem={(props) => <Dot {...props} />} />
    </Carousel>
)

export const CarouselStory = Template.bind({})
