import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Icon } from '.'

export default {
    title: 'Components/Icon',
    component: Icon,
}

export const Arrow: Story = (args) => <Icon icon="arrow" {...args} />
