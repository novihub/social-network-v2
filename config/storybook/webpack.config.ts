import path from 'path'
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	// eslint-disable-next-line no-param-reassign
	config.module = config.module || { rules: [] }
	config.module.rules = (config.module.rules || []).map((rule: any) => {
		if (/svg/.test(rule.test as string)) {
			return {
				...rule,
				exclude: /\.svg$/
			}
		}
		return rule
	})

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	})

	const cssLoader = buildCssLoader(true)
	if (cssLoader) {
		// Ensure config.module.rules is defined before pushing the new loader
		if (Array.isArray(config.module?.rules)) {
			config.module.rules.push(cssLoader)
		} else {
			config.module = config.module || { rules: [] }
			config.module.rules = [cssLoader] // Initialize rules if undefined
		}
	}

	return config
}
