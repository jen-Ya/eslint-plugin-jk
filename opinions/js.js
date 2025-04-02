/**
 * @type {Readonly<import('eslint').Linter.RulesRecord>}
 */
export default {
	'no-multiple-empty-lines': [
		'error', {
			'max': 1,
			'maxEOF': 0,
			'maxBOF': 0,
		},
	],
	'strict': ['error', 'global'],
	'space-before-function-paren': ['error', 'never'],
	'space-before-blocks': 'error',
	'camelcase': 'error',
	'semi': 'error',
	'eqeqeq': 'error',
	'curly': 'error',
	'quotes': ['error', 'single', 'avoid-escape'],
	'no-unreachable': 'error',
	'no-unused-vars': 'error',
	'array-bracket-spacing': ['error', 'never'],
	'comma-spacing': ['error', { 'before': false, 'after': true }],
	'no-console': ['error', { 'allow': ['info', 'warn', 'error'] }],
	'indent': ['error', 'tab', { 'SwitchCase': 1 }],
	'arrow-spacing': 'error',
	'react/prop-types': 0,
	'no-trailing-spaces': 'error',
	'object-curly-spacing': ['error', 'always'],
	'space-infix-ops': ['error'],
	'one-var-declaration-per-line': ['error'],
	'comma-dangle': ['error', 'always-multiline'],
	'keyword-spacing': [
		'error', {
			'overrides': {
				'if': { 'after': false },
				'switch': { 'after': false },
				'while': { 'after': false },
				'for': { 'after': false },
			},
		},
	],
	'space-in-parens': ['error', 'never'],
	'function-paren-newline': ['error', 'multiline'],
	'no-multi-spaces': 'error',
	'semi-spacing': 'error',
	'block-spacing': 'error',
	'no-tabs': [
		'error', {
			'allowIndentationTabs': true,
		},
	],
	'padded-blocks': [
		'error', {
			'blocks': 'never',
		},
	],
	'array-element-newline': ['error', 'consistent'],
	'array-bracket-newline': [
		'error', {
			'multiline': true,
		},
	],
	'max-statements-per-line': 'error',
	'max-lines': [
		'warn', {
			'max': 500,
			'skipBlankLines': true,
			'skipComments': true,
		},
	],
	'no-undef': 'error',
	'key-spacing': 'error',
	'padding-line-between-statements': [
		'error',
		{ 'blankLine': 'always', 'prev': '*', next: 'class' },
		{ 'blankLine': 'always', 'prev': 'class', next: '*' },
		{ 'blankLine': 'always', 'prev': 'export', 'next': '*' },
		{ 'blankLine': 'always', 'next': 'export', 'prev': '*' },
	],
	'object-shorthand': ['error', 'always'],
	'no-var': 'error',
	'prefer-const': 'error',
	'template-curly-spacing': ['error', 'always'],
	'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
	'prefer-arrow-callback': 'error',
	'no-extra-parens': [
		'error', 'all', {
			'ternaryOperandBinaryExpressions': false,
		},
	],
}