import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierReact from 'eslint-config-prettier';
import pluginI18next from 'eslint-plugin-i18next';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: ['node_modules/**'],
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tseslint,
			react: pluginReact,
			i18next: pluginI18next,
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...pluginReact.configs.recommended.rules,
			...airbnb.rules,
			...prettierReact.rules,
			...pluginI18next.configs.recommended.rules,
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-undef': 'warn',
			'react/react-in-jsx-scope': 'off',
			'i18next/no-literal-string': ['error', { markupOnly: true }],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
