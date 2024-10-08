import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({
	isDev = true,
}: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
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
	const cssLoader = {
		// Обработка для .module.scss файлов (CSS модули)
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
					},
				},
			},
			'sass-loader',
		],
	};
	const typescriptLoader = {
		test: /\.(ts|tsx)$/i,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		type: 'asset/resource',
	};

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
