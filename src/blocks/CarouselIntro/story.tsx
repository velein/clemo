import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CarouselIntro } from '.'

export default {
    title: 'Blocks/Carousel Intro',
    component: CarouselIntro,
} as Meta

const Template: Story = (args) => <CarouselIntro />

export const Preview = Template.bind({})
