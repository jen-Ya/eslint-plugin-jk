'use strict';

module.exports = {
	rules: {
		'jsx-closing-bracket-location': require('./jsx-closing-bracket-location'),
		'jsx-closing-tag-location': require('./jsx-closing-tag-location'),
	},
	configs: {
		recommended: {
			extends: ['eslint:recommended'],
			rules: {
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
			},
		},
		'recommended-jsx': {
			extends: [
				'plugin:jk/recommended',
				'plugin:react/recommended',
			],
			plugins: [
				'jk',
				'react',
			],
			rules: {
				'react/jsx-curly-spacing': [
					'error', {
						'when': 'always',
						'children': true,
					},
				],
				'react/jsx-equals-spacing': ['error', 'never'],
				'react/jsx-tag-spacing': [
					'error', {
						'closingSlash': 'never',
						'beforeSelfClosing': 'always',
						'afterOpening': 'never',
						'beforeClosing': 'never',
					},
				],
				'react/jsx-indent': ['error', 'tab'],
				'jsx-quotes': ['error', 'prefer-single'],
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
			},
		},
		'recommended-jsx-jk': {
			extends: ['plugin:jk/recommended-jsx'],
			plugins: [
				'jk',
				'react',
			],
			rules: {
				'jk/jsx-closing-bracket-location': 'error',
			},
		},
		'recommended-ts': {
			extends: [
				'plugin:jk/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
			],
			plugins: [
				'jk',
				'@typescript-eslint',
			],
		},
		'default-jsx-node': {
			'extends': ['plugin:jk/recommended-jsx-jk'],
			'parser': '@babel/eslint-parser',
			'plugins': [
				'jk',
				'react',
			],
			'settings': {
				'react': {
					'pragma': 'React',
					'version': 'detect',
				},
			},
			'parserOptions': {
				'ecmaVersion': 'latest',
				'ecmaFeatures': {
					'jsx': true,
					'modules': true,
					'es6': true,
					'blockBindings': true,
					'arrowFunctions': true,
					'objectLiteralShorthandProperties': true,
				},
			},
			'env': {
				'browser': true,
				'node': true,
				'es6': true,
			},
		},
		'default-node': {
			'extends': ['plugin:jk/recommended'],
			'plugins': ['jk'],
			'parserOptions': {
				'ecmaVersion': 'latest',
				'sourceType': 'module',
			},
			'env': {
				'node': true,
				'es6': true,
			},
		},
		'default-ts': {
			'extends': ['plugin:jk/recommended-ts'],
			'parser': '@typescript-eslint/parser',
		},
	},
};