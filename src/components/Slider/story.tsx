import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Slider } from '.'

export default {
    title: 'Components/Slider',
    component: Slider,
} as Meta

const Template: Story = (args) => (
    <Slider {...args}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </Slider>
)

export const Dark = Template.bind({})
// Dark.args = {
//     variant: 'dark',
//     label: 'get in touch',
// }
