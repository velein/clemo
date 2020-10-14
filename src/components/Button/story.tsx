import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button, ButtonProps, ButtonGhost, ButtonDark, ButtonLight } from '.'

export default {
    title: 'Components/Button',
    component: Button,
}

export const Default: Story<ButtonProps> = (args) => (
    <Button {...args}>Click me</Button>
)

export const Ghost: Story<ButtonProps> = (args) => (
    <ButtonGhost {...args}>Click me</ButtonGhost>
)

export const Dark: Story<ButtonProps> = (args) => (
    <ButtonDark {...args}>Click me</ButtonDark>
)

export const Light: Story<ButtonProps> = (args) => (
    <ButtonLight {...args}>Click me</ButtonLight>
)
