import recommended from './recommended.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	recommended,
	tseslint.configs.recommended,
);