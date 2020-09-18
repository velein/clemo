import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Carousel, CarouselSlide } from '.'
import { CarouselDots } from './components/CarouselDots'
import { CarouselSlides } from './components/CarouselSlides'

export default {
    title: 'Components/Slider',
    component: Carousel,
} as Meta

const Template: Story = (args) => (
    <Carousel {...args}>
        <CarouselSlides>
            <CarouselSlide>1</CarouselSlide>
            <CarouselSlide>2</CarouselSlide>
            <CarouselSlide>3</CarouselSlide>
        </CarouselSlides>
        <CarouselDots />
    </Carousel>
)

export const CarouselStory = Template.bind({})
CarouselStory.args = {
    arrows: true,
    dots: true,
}
