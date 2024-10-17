import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|jsx|tsx)?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{ locales: ['ru_RU', 'en_US'], keyAsDefaultValue: true }
					]
				]
			}
		}
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const cssLoader = buildCssLoader(options.isDev)

	const typescriptLoader = {
		test: /\.tsx?$/, // Processing .ts, .tsx files
		use: 'ts-loader',
		exclude: /node_modules/ // Exclude node_modules
	}

	return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
