import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsOpinions from '../opinions/js.js';

export default tseslint.config(
	js.configs.recommended,
	{
		rules: jsOpinions,
	},
);