import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Logo } from '.'

export default {
    title: 'Components/Logo',
    component: Logo,
} as Meta

export const Template: Story = (args) => <Logo {...args} />
