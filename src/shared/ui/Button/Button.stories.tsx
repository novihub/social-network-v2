import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
	decorators: [
		Story => (
			<div className={`app ${Theme.LIGHT}`}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
	args: {
		children: 'Text'
	}
}

export const Secondary: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR
	}
}

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	}
}

export const OutlineDark: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.LIGHT}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	}
}
