import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '.'

export default {
    title: 'Components/Button',
    component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Dark = Template.bind({})
Dark.args = {
    variant: 'dark',
    label: 'get in touch',
}

export const Ghost = Template.bind({})
Ghost.args = {
    variant: 'ghost',
    label: 'learn more',
}

export const Light = Template.bind({})
Light.args = {
    variant: 'light',
    label: 'get started',
}
