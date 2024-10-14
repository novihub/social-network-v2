import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: Boolean) {
	return {
		test: /\.s[ac]ss$/i,
		oneOf: [
			// This will handle CSS Modules for files ending in .module.scss
			{
				test: /\.module\.s[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: (resPath: string) => resPath.includes('.module.'),
								localIdentName: isDev
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
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}
