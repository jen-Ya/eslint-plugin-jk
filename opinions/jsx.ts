import { Linter } from 'eslint';
const jsxOpinions: Linter.RulesRecord = {
	'@stylistic/jsx-quotes': ['error', 'prefer-single'],
	'@stylistic/jsx-wrap-multilines': 'off',
	'@stylistic/jsx-indent-props': ['error', 'tab'],
	'@stylistic/jsx-curly-spacing': ['error', 'always'],
	'@stylistic/jsx-function-call-newline': 'off',
	'@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
	'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
	'react/jsx-curly-spacing': [
		'error', {
			when: 'always',
			children: true,
		},
	],
	'react/jsx-equals-spacing': ['error', 'never'],
	'react/jsx-tag-spacing': [
		'error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		},
	],
	'react/jsx-indent': ['error', 'tab'],
	'react/jsx-curly-newline': 'error',
	'react/jsx-max-props-per-line': [
		'error', {
			maximum: {
				single: 2,
				multi: 1,
			},
		},
	],
	'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
};

export default jsxOpinions;
