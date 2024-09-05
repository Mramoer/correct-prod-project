import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: true,
				},
			},
			'postcss-loader',
			'sass-loader',
		],
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		type: 'asset/resource',
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const postcssLoader = {
		test: /\.css$/,
		use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader'],
	};

	const babelLoader = {
		test: /\.m?(js|tsx|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-react',
					'@babel/preset-typescript',
				],
				plugins: [
					[
						'i18next-extract',
						{ locales: ['ru', 'en'], keyAsDefaultValue: true },
					],
				],
			},
		},
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
		postcssLoader,
	];
}
