import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/, // Processing .ts, .tsx files
		use: 'ts-loader',
		exclude: /node_modules/ // Excluding
	}

	return [
		// Configuring loaders (png, jpeg, gif, scss, sass etc.)
		typescriptLoader
	]
}
