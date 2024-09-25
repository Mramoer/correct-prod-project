import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
		preferAbsolute: true,
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		mainFiles: ['index'],
		alias: {},
		roots: [__dirname, 'src'],
	};
}
