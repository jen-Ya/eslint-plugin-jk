import { ESLint } from 'eslint';
import { linterTestUtils } from './utils/linterTestUtils';

const linter = new ESLint({
	overrideConfigFile: './configs/recommendedJsx.ts',
	fix: true,
});

const { fixes, nofixes, errors, noerrors } = linterTestUtils(linter);

describe('eslint-plugin-jk recommended', () => {
	it('should work', fixes(
		'let a = 1',
		'const a = 1;\n',
	));
	// jsx quotes (prefer single)
	it('should fix jsx quotes', fixes(
		'<div class="test" />;\n',
		'<div class=\'test\' />;\n',
	));
	// wrap multilines (off)
	it('should not wrap jsx multilines', nofixes('() => <>\n\t<div />\n</>;\n'));
	// indent props (tab)
	it('should indent jsx props with tabs', fixes(
		'<div\nclassName=\'test\'\nid=\'test\'\n/>;\n',
		'<div\n\tclassName=\'test\'\n\tid=\'test\'\n/>;\n',
	));
	it('should indent jsx props with tabs instead of spaces', fixes(
		'<div\n  className=\'test\'\n  id=\'test\'\n/>;\n',
		'<div\n\tclassName=\'test\'\n\tid=\'test\'\n/>;\n',
	));
	// curly spacing (always)
	it('should add spacing in jsx curly braces', fixes(
		'<div className={test} />;\n',
		'<div className={ test } />;\n',
	));
	// function call newline (off)
	it('should not enforce function call newlines in jsx', nofixes('foo(<div onClick={ test } />);\n'));
	// closing tag location (line-aligned)
	it('should align jsx tags on the same line', fixes(
		'<div>\n\t<button /></div>;\n',
		'<div>\n\t<button />\n</div>;\n',
	));
	// closing bracket location (line-aligned)
	// TODO: this is not how I actually want it to be, I would like the closing bracket and closing tag to be on the same line
	it('should align jsx closing brackets on the same line', fixes(
		'<div id={\nfoo() } />;\n',
		'<div id={\n\tfoo()\n}\n/>;\n',
	));
	// equals spacing (never)
	it('should not have spaces around equals in jsx', fixes(
		"<div className = 'test' />;\n",
		"<div className='test' />;\n",
	));
	// tag spacing
	it('should have spaces before self-closing tags in jsx', fixes(
		'<div/>;\n',
		'<div />;\n',
	));
	it('should have spaces in closing tags in jsx', fixes(
		'<div>1</ div>;\n',
		'<div>1</div>;\n',
	));
	it('should not have extra spaces before self-closing tags in jsx', fixes(
		'< div >1< / div >;\n',
		'<div>1</div>;\n',
	));
	// jsx indent (tab)
	it('should indent jsx with tabs', fixes(
		"<div\nfoo='bar'>\n  <div />\n</div>;\n",
		"<div\n\tfoo='bar'\n>\n\t<div />\n</div>;\n",
	));
	// jsx curly newline (consistent)
	it('should enforce newlines in jsx curly braces', fixes(
		'<div className={\nfoo() } />;\n',
		'<div className={\n\tfoo()\n}\n/>;\n',
	));
	// jsx max props per line (2 single, 1 multi)
	it('should limit jsx props per line', fixes(
		'<div\nclassName=\'test\'\nfoo={bar}\n/>;\n',
		'<div\n\tclassName=\'test\'\n\tfoo={ bar }\n/>;\n',
	));
	// jsx first prop new line (multiline-multiprop)
	it('should enforce first prop new line in jsx', fixes(
		'<div className=\'test\'\nfoo={bar} />;\n',
		'<div\n\tclassName=\'test\'\n\tfoo={ bar }\n/>;\n',
	));
	// jsx-uses-vars / jsx-uses-react: no-unused-vars does not count JSX
	// references on its own
	it('should not report components that are only used in jsx', noerrors(
		'import Foo from \'./foo.js\';\n\nexport const Bar = () => <Foo />;\n',
		'no-unused-vars',
	));
	it('should not report the React import with the classic runtime', noerrors(
		'import React from \'react\';\n\nexport const Bar = () => <div />;\n',
		'no-unused-vars',
	));
	it('should still report actually unused imports', errors(
		'import Foo from \'./foo.js\';\n\nexport const Bar = () => <div />;\n',
		'no-unused-vars',
	));
});
