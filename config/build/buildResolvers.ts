import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {
	return {
		// Importing files without writing .tsx, .ts, .js
		extensions: ['.tsx', '.ts', '.js']
	}
}
