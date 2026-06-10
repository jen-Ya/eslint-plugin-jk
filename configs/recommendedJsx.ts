import recommended from './recommended.js';
import tseslint from 'typescript-eslint';
import jsxOpinions from '../opinions/jsx.js';
import { createRequire } from 'module';

// eslint-plugin-react is cjs; loading it via require avoids the diverging
// esm default-export interop between node and jest's esm runtime
const require = createRequire(import.meta.url);
const react = require('eslint-plugin-react') as typeof import('eslint-plugin-react');

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
		plugins: {
			react,
		},
		rules: {
			// no-unused-vars does not count JSX references on its own: without
			// these, components only used in JSX and the React import (classic
			// runtime) are reported as unused
			'react/jsx-uses-vars': 'error',
			'react/jsx-uses-react': 'error',
			...jsxOpinions,
		},
	},
);
