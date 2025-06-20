import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import jsOpinions from '../opinions/js.js';

export default tseslint.config(
	js.configs.recommended,
	stylistic.configs.recommended,
	{
		rules: jsOpinions,
		plugins: {
			'@stylistic': stylistic,
		},
	},
);
