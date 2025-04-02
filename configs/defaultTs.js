import recommendedTs from './recommendedTs.js';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	recommendedTs,
	{
		languageOptions: {
			parser: typescriptParser,
			globals: {
				...globals.node,
				...globals.es2025,
			}
		},
	},
);