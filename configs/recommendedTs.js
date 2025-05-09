import recommended from './recommended.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	tseslint.configs.recommended,
	tseslint.configs.stylistic,
	recommended,
);
