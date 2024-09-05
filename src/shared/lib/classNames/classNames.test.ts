import { buildLoaders } from '../../../../config/build/buildLoaders';
import { buildResolvers } from '../../../../config/build/buildResolvers';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildPlugin } from '../../../../config/build/buildPlugins';
import { render } from '@testing-library/react';
import { Navbar } from '../../../widgets/Navbar/index';
import styles from '../../../widgets/Navbar/ui/Navbar.module.scss';
import webpack from 'webpack';
import '@testing-library/jest-dom';

test('Webpack должен корректно обрабатывать SCSS', () => {
	const loaders = buildLoaders({ isDev: true });
	const cssLoader = loaders.find(
		(loader) => loader.test instanceof RegExp && loader.test.test('.scss')
	);

	expect(cssLoader).toBeDefined();
	expect(cssLoader.use).toContain('style-loader');
	expect(cssLoader.use).toContainEqual({
		loader: 'css-loader',
		options: expect.objectContaining({
			modules: expect.any(Object),
		}),
	});
});

test('Webpack должен SCSS модули в продакшн режиме', () => {
	const loaders = buildLoaders({ isDev: false });
	const cssLoader = loaders.find(
		(loader) => loader.test instanceof RegExp && loader.test.test('.scss')
	);

	expect(cssLoader).toBeDefined();
	expect(cssLoader.use).toContain(MiniCssExtractPlugin.loader);
});
test('Webpack должен корректно разрешать файлы с расширением .scss', () => {
	const resolvers = buildResolvers({ paths: { src: 'src' }, isDev: true });

	expect(resolvers.extensions).toContain('.scss');
});
test('MiniCssExtractPlugin должен быть настроен в режиме продакшн', () => {
	const plugins = buildPlugin({ isDev: true });
	const miniCssPlugin = plugins.find(
		(plugin) => plugin instanceof MiniCssExtractPlugin
	);

	expect(miniCssPlugin).toBeDefined();
});

test('Navbar должен применить стили из SCSS модулей', () => {
	const { container } = render(typeof Navbar);
	const navbarDiv = container.firstChild;

	expect(navbarDiv).toHaveClass(styles.Navbar);
	expect(navbarDiv).toHaveClass('test-class');
});
test('DefinePlugin должен корректно задавать __IS_DEV__', () => {
	const plugins = buildPlugin({ isDev: true, paths: { html: 'index.html' } });
	const definePlugin = plugins.find(
		(plugin) => plugin instanceof webpack.DefinePlugin
	);

	expect(definePlugin).toBeDefined();
	expect(definePlugin.definitions.__IS_DEV__).toBe(JSON.stringify(true));
});
test('SCSS файлы должны разрешаться из правильного пути', () => {
	const resolvers = buildResolvers({ paths: { src: 'src' }, isDev: true });
	expect(resolvers.modules).toContain('src');
	expect(resolvers.modules).toContain('node_modules');
});
