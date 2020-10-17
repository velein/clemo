import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Dot } from '.'

export default {
    title: 'Components/Dot',
    component: Dot,
}

export const Default: Story = (args) => <Dot {...args} />
