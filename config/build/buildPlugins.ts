import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

export function buildPlugins({
	paths,
	isDev
}: BuildOptions): WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // Visualize build progress
		new HtmlWebpackPlugin({
			template: paths.html
		}), // For building html file from public folder
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
