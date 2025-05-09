/**
 * @type {Readonly<import('eslint').Linter.RulesRecord>}
 */
export default {
	'@stylistic/no-multiple-empty-lines': [
		'error', {
			max: 1,
			maxEOF: 0,
			maxBOF: 0,
		},
	],
	'strict': ['error', 'global'],
	'@stylistic/space-before-function-paren': ['error', 'never'],
	'@stylistic/space-before-blocks': 'error',
	'camelcase': 'error',
	'@stylistic/semi': ['error', 'always'],
	'eqeqeq': 'error',
	'curly': 'error',
	'@stylistic/quotes': ['error', 'single', 'avoid-escape'],
	'no-unreachable': 'error',
	'no-unused-vars': 'error',
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/comma-spacing': ['error', { before: false, after: true }],
	'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
	'@stylistic/indent': ['error', 'tab', { SwitchCase: 1 }],
	'@stylistic/arrow-spacing': 'error',
	'react/prop-types': 0,
	'@stylistic/no-trailing-spaces': 'error',
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/space-infix-ops': ['error'],
	'@stylistic/one-var-declaration-per-line': ['error'],
	'@stylistic/comma-dangle': ['error', 'always-multiline'],
	'@stylistic/keyword-spacing': [
		'error', {
			overrides: {
				if: { after: false },
				switch: { after: false },
				while: { after: false },
				for: { after: false },
			},
		},
	],
	'@stylistic/space-in-parens': ['error', 'never'],
	'@stylistic/function-paren-newline': ['error', 'multiline'],
	'@stylistic/no-multi-spaces': 'error',
	'@stylistic/semi-spacing': 'error',
	'@stylistic/block-spacing': 'error',
	'@stylistic/no-tabs': [
		'error', {
			allowIndentationTabs: true,
		},
	],
	'@stylistic/padded-blocks': [
		'error', {
			blocks: 'never',
		},
	],
	'@stylistic/array-element-newline': ['error', 'consistent'],
	'@stylistic/array-bracket-newline': [
		'error', {
			multiline: true,
		},
	],
	'@stylistic/max-statements-per-line': 'error',
	'max-lines': [
		'warn', {
			max: 500,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	'no-undef': 'error',
	'key-spacing': 'error',
	'@stylistic/padding-line-between-statements': [
		'error',
		{ blankLine: 'always', prev: '*', next: 'class' },
		{ blankLine: 'always', prev: 'class', next: '*' },
		{ blankLine: 'always', prev: 'export', next: '*' },
		{ blankLine: 'always', next: 'export', prev: '*' },
	],
	'object-shorthand': ['error', 'always'],
	'no-var': 'error',
	'prefer-const': 'error',
	'@stylistic/template-curly-spacing': ['error', 'always'],
	'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
	'prefer-arrow-callback': 'error',
	'@stylistic/no-extra-parens': [
		'error', 'all', {
			ternaryOperandBinaryExpressions: false,
		},
	],
};
