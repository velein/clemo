import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Dot, DotProps } from '.'

export default {
    title: 'Components/Dot',
    component: Dot,
}

export const Default: Story<DotProps> = (args) => <Dot {...args} />
