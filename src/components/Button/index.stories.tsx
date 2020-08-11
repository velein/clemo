import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '.'

export default {
    title: 'Example/Buttton',
    component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Dark = Template.bind({})
Dark.args = {
    colorSchema: 'dark',
    label: 'get in touch',
}

export const Ghost = Template.bind({})
Ghost.args = {
    colorSchema: 'ghost',
    label: 'learn more',
}

export const Light = Template.bind({})
Light.args = {
    colorSchema: 'light',
    label: 'get started',
}
