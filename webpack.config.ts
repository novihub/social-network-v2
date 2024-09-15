import HTMLWebpackPlugin from 'html-webpack-plugin' // HTML plugin
import path from 'path' // Dynamic path unlike from different OS
import webpack from 'webpack' // To access build-in plugins

const config: webpack.Configuration = {
	mode: 'development', // mode 'production' or 'development'
	entry: path.resolve(__dirname, 'src', 'index.ts'), // Initial path to the Project
	output: {
		filename: '[name].[contenthash].js', // Default: 'main.CONTENT_HASH.js'
		path: path.resolve(__dirname, 'build'), // Dist: 'build'
		clean: true // Cleaning from previous files
	},
	plugins: [
		new webpack.ProgressPlugin(), // Visualize build progress
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}) // For building html file from public folder
	],
	module: {
		rules: [
			// Configuring loaders (png, jpeg, gif, scss, sass etc.)
			{
				test: /\.tsx?$/, // Processing .ts, .tsx files
				use: 'ts-loader',
				exclude: /node_modules/ // Excluding
			}
		]
	},
	resolve: {
		// Importing files without writing .tsx, .ts, .js
		extensions: ['.tsx', '.ts', '.js']
	}
}

export default config
