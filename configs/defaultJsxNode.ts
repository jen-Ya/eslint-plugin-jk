import recommendedJsx from './recommendedJsx.js';
import babelParser from '@babel/eslint-parser';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	recommendedJsx,
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
		settings: {
			react: {
				pragma: 'React',
				version: 'detect',
			},
		},
	},
);
