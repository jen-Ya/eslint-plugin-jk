import globals from 'globals';
import tseslint from 'typescript-eslint';
import config from '../dist/configs/defaultTs.js';

export default tseslint.config(
	config,
	{
		rules: {
			'no-undef': 'off',
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			},
		},
	},
);
