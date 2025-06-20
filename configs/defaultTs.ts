import recommendedTs from './recommendedTs.js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	recommendedTs,
	{
		languageOptions: {
			parser: tseslint.parser,
			globals: {
				...globals.node,
				...globals.es2025,
			},
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
	},
);
