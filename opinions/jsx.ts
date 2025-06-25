import { Linter } from 'eslint';
const jsxOpinions: Linter.RulesRecord = {
	'@stylistic/jsx-quotes': ['error', 'prefer-single'],
	'@stylistic/jsx-wrap-multilines': 'off',
	'@stylistic/jsx-indent-props': 'off',
	'@stylistic/jsx-curly-spacing': [
		'error', {
			when: 'always',
			children: true,
		},
	],
	'@stylistic/jsx-function-call-newline': 'off',
	// TODO: this is not how I actually want it to be, I would like the closing bracket and closing tag to be on the same line
	'@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
	'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
	'@stylistic/jsx-equals-spacing': ['error', 'never'],
	'@stylistic/jsx-tag-spacing': [
		'error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		},
	],
	'@stylistic/jsx-indent': ['error', 'tab'],
	'@stylistic/jsx-curly-newline': 'error',
	'@stylistic/jsx-max-props-per-line': [
		'error', {
			maximum: {
				single: 2,
				multi: 1,
			},
		},
	],
	'@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
	'@stylistic/jsx-one-expression-per-line': [
		'error', {
			allow: 'single-line',
		},
	],
};

export default jsxOpinions;
