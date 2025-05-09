import recommendedJsx from './recommendedJsx.js';
import jsxClosingBracketLocation from '../rules/jsx-closing-bracket-location.js';
import tseslint from 'typescript-eslint';
import jk from '../plugin/jk.js';

export default tseslint.config(
	recommendedJsx,
	{
		plugins: {
			jk,
		},
		rules: {
			'jk/jsx-closing-bracket-location': 'error',
		},
	},
);
