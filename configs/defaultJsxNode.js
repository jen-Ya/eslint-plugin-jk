import recommendedJsxJk from './recommendedJsxJk.js';
import babelParser from '@babel/eslint-parser';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import jk from '../plugin/jk.js';
import globals from 'globals';

export default tseslint.config(
	recommendedJsxJk,
	{
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				ecmaVersion: 'latest',
				ecmaFeatures: {
					jsx: true,
					modules: true,
					es6: true,
					blockBindings: true,
					arrowFunctions: true,
					objectLiteralShorthandProperties: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2025,
			},
		},
		plugins: {
			react,
			jk,
		},
		settings: {
			react: {
				pragma: 'React',
				version: 'detect',
			},
		},
	},
);
