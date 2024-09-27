import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
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

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		oneOf: [
			// This will handle CSS Modules for files ending in .module.scss
			{
				test: /\.module\.s[ac]ss$/i,
				use: [
					options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: (resPath: string) => resPath.includes('.module.'),
								localIdentName: options.isDev
									? '[path][name]__[local]--[hash:base64:5]'
									: '[hash:base64:8]',
								namedExport: false
							}

							// modules: {
							// 	localIdentName: options.isDev
							// 		? '[path][name]__[local]'
							// 		: '[hash:base64]',
							// 	namedExport: false,
							// 	exportLocalsConvention: 'as-is'
							// }
						}
					},
					'sass-loader'
				]
			},
			// This will handle regular SCSS files
			{
				use: [
					options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}

	const typescriptLoader = {
		test: /\.tsx?$/, // Processing .ts, .tsx files
		use: 'ts-loader',
		exclude: /node_modules/ // Exclude node_modules
	}

	return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
