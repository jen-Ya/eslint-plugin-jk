import tseslint from 'typescript-eslint';
import config from './configs/defaultNode';
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
