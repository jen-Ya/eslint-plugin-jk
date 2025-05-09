import recommended from './recommended.js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	recommended,
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
				...globals.es2025,
			},
		},
	},
);
