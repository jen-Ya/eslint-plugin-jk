'use strict';

const { getIndent } = require('./utils');

module.exports = {
	meta: {
		docs: {
			description: 'Validate closing tag location in JSX',
			category: 'Stylistic Issues',
			recommended: true,
		},
		fixable: 'whitespace',
	},

	create(context) {
		return {
			'JSXOpeningElement:exit'(node) {
				const source = context.getSourceCode();
				const opening = source.getFirstToken(node);
				const closing = source.getLastTokens(node, node.selfClosing ? 2 : 1)[0];
				const openLine = source.lines[opening.loc.start.line - 1];
				const closeLine = source.lines[closing.loc.start.line - 1];

				const openIndentation = getIndent(openLine);
				const closeIndentation = getIndent(closeLine);
				const hasCorrectLocation = openIndentation === closeIndentation;
				if(hasCorrectLocation) {
					return;
				}
				const MESSAGE = 'The closing bracket must be line-aligned';

				context.report({
					node,
					loc: closing.loc.start,
					message: MESSAGE,
					fix(fixer) {
						return fixer.insertTextBefore(closing, '\n' + openIndentation);
					},
				});
			},
		};
	},
};