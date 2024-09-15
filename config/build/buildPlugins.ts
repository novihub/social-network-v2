import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // Visualize build progress
		new HtmlWebpackPlugin({
			template: paths.html
		}), // For building html file from public folder
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		})
	]
}
