import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierReact from 'eslint-config-prettier';
import pluginI18next from 'eslint-plugin-i18next';
import pluginJest from 'eslint-plugin-jest';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: ['node_modules/**'],
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tseslint,
			react: pluginReact,
			i18next: pluginI18next,
			jest: pluginJest,
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
			'no-undef': 'off',
			'react/react-in-jsx-scope': 'off',
			'i18next/no-literal-string': ['warn', { markupOnly: true }],
			'max-len': ['warn', { ignoreComments: true, code: 100 }],
			'react/prop-types': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
