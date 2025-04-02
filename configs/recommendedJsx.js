import recommended from './recommended.js';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import jsxOpinions from '../opinions/jsx.js';

export default tseslint.config(
	recommended,
	{
		plugins: {
			react,
		},
		rules: jsxOpinions,
	},
);