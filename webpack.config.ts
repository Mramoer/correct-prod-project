import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpack.congif';
import path from 'path';
import { BuildPaths, BuildEnv } from './config/build/types/config';
const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'public', 'index.html'),
};
const mode = 'development';
const idDev = mode === 'development';
const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev: true,
	port: 3000,
});
export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;
	const config: webpack.Configuration = buildWebpackConfig({
		mode: 'development',
		paths,
		isDev,
		port: PORT,
	});
	return config;
};
