import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfigutarion } from 'webpack-dev-server';
export function buildDevServer(options: BuildOptions): DevServerConfigutarion {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	};
}
