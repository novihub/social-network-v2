import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouterDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'widget/AppLink',
	component: AppLink,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		to: '/'
	},
	decorators: [Story => RouteDecorator(Story)]
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const PrimaryLight: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.LIGHT}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	}
}

export const SecondaryLight: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.LIGHT}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	}
}

export const RedLight: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.LIGHT}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED
	}
}

export const PrimaryDark: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.DARK}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	}
}

export const SecondaryDark: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.DARK}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	}
}

export const RedDark: Story = {
	decorators: [
		Story => (
			<div className={`app ${Theme.DARK}`}>
				<Story />
			</div>
		)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED
	}
}
