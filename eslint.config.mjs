import pluginJs from '@eslint/js'
import i18nextPlugin from 'eslint-plugin-i18next'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			i18next: i18nextPlugin
		}
	},
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-unused-vars': 'warn',
			'i18next/no-literal-string': ['error', { markupOnly: true }]
		}
	}
]
