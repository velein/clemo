import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Header } from '.'

export default {
    title: 'Components/Header',
    component: Header,
} as Meta

export const Template: Story = (args) => <Header {...args} />
