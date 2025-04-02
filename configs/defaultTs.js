import recommendedTs from './recommendedTs.js';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	recommendedTs,
	{
		languageOptions: {
			parser: typescriptParser,
		},
	},
);