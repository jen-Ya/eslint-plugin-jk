import tseslint from 'typescript-eslint';
import config from './configs/defaultTs';
import globals from 'globals';

export default tseslint.config(
	config,
	{
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
	},
);
