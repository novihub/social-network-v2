import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Order is important!
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates css into commonJS
			'css-loader',
			// Compile sass to css
			'sass-loader'
		]
	}

	// If you are not using typescript - babel-loader is required
	const typescriptLoader = {
		test: /\.tsx?$/, // Processing .ts, .tsx files
		use: 'ts-loader',
		exclude: /node_modules/ // Excluding
	}

	return [
		// Configuring loaders (png, jpeg, gif, scss, sass etc.)
		typescriptLoader,
		cssLoader
	]
}
