'use strict';

const { getIndent } = require('./utils');

const getFirstNodeInLine = (context, node) => {
	const sourceCode = context.getSourceCode();
	let token = node;
	let lines;
	do {
		token = sourceCode.getTokenBefore(token);
		lines = token.type === 'JSXText'
			? token.value.split('\n')
			: null;
	} while(
		token.type === 'JSXText'
		&& /^\s*$/.test(lines[lines.length - 1])
	);
	return token;
};

const isNodeFirstInLine = (context, node) => {
	const token = getFirstNodeInLine(context, node);
	const startLine = node.loc.start.line;
	const endLine = token ? token.loc.end.line : -1;
	return startLine !== endLine;
};

module.exports = {
	meta: {
		docs: {
			description: 'Validate closing tag location for multiline JSX',
			category: 'Stylistic Issues',
			recommended: true,
		},
		fixable: 'whitespace',
	},

	create(context) {
		const handleClosingElement = (node) => {
			const source = context.getSourceCode();
			if(!node.parent) {
				return;
			}

			const opening = node.parent.openingElement || node.parent.openingFragment;
			if(opening.loc.start.line === node.loc.start.line) {
				return;
			}

			const openingIndent = getIndent(source.lines[opening.loc.start.line - 1]);
			const closingIndent = getIndent(source.lines[node.loc.start.line - 1]);
			if(openingIndent === closingIndent) {
				return;
			}
			const nodeFirstInLine = isNodeFirstInLine(context, node);
			let message;
			if(!nodeFirstInLine) {
				message = 'Closing tag of a multiline JSX expression must be on its own line.';
			} else {
				message = 'Expected closing tag to match indentation of opening.';
			}

			context.report({
				node,
				loc: node.loc,
				message,
				fix(fixer) {
					const insert = (nodeFirstInLine ? '' : '\n') + openingIndent;
					return fixer.insertTextBefore(node, insert);
				},
			});
		};

		return {
			JSXClosingElement: handleClosingElement,
			JSXClosingFragment: handleClosingElement,
		};
	},
};