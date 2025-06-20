import recommended from './recommended.js';
import tseslint from 'typescript-eslint';
import tsOpinions from '../opinions/ts.js';

export default tseslint.config(
	tseslint.configs.recommended,
	tseslint.configs.stylistic,
	recommended,
	{
		rules: tsOpinions,
	},
);
