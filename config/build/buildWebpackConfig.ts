import { Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options

	return {
		mode: mode, // mode 'production' or 'development'
		entry: paths.entry, // Initial path to the Project
		output: {
			filename: '[name].[contenthash].js', // Default: 'main.CONTENT_HASH.js'
			path: paths.build, // Dist: 'build'
			clean: true // Cleaning from previous files
		},
		plugins: buildPlugins(options),
		module: {
			// Loaders
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}
