import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Carousel } from '.'

export default {
    title: 'Components/Slider',
    component: Carousel,
} as Meta

const Template: Story = (args) => (
    <Carousel {...args} slides={[<div>1</div>, <div>2</div>, <div>3</div>]} />
)

export const CarouselStory = Template.bind({})
CarouselStory.args = {
    arrows: true,
}
