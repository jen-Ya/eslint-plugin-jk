import recommended from './recommended.js';
import tseslint from 'typescript-eslint';
import jsxOpinions from '../opinions/jsx.js';

export default tseslint.config(
	recommended,
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: jsxOpinions,
	},
);
