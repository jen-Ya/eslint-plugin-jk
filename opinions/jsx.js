/**
 * @type {Readonly<import('eslint').Linter.RulesRecord>}
 */
export default {
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
	'@stylistic/jsx-quotes': ['error', 'prefer-single'],
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
