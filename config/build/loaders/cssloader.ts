import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
	return [
		{
			// Обработка для .module.scss файлов (CSS модули)
			test: /\.module\.s[ac]ss$/i,
			use: [
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: isDev
								? '[path][name]__[local]'
								: '[hash:base64:5]',
						},
					},
				},
				'sass-loader',
			],
		},
		{
			// Обработка для обычных .scss файлов (глобальные стили)
			test: /\.s[ac]ss$/i,
			exclude: /\.module\.s[ac]ss$/i, // Исключаем модули, чтобы они не обрабатывались здесь
			use: [
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader', // Здесь без опции modules
				'sass-loader',
			],
		},
	];
};
