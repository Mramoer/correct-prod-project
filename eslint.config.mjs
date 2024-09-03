import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierReact from 'eslint-config-prettier';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: ['node_modules/**'],
		languageOptions: {
			parser: tsParser,
			globals: [globals.browser],
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tseslint,
			react: pluginReact,
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...pluginReact.configs.recommended.rules,
			...airbnb.rules,
			...prettierReact.rules,
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-undef': 'warn',
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
