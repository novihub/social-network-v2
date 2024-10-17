import type { Preview } from '@storybook/react'
import React from 'react'
import '../../src/app/styles/index.scss'

const preview: Preview = {
	decorators: [Story => <Story />],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
