import { ESLint } from 'eslint';

const example = `
let a = 1


let b = a == 2;
function (a,b,c){
  return a + b
}
if(true) console.log('test')
let c = "hello"
const test = [1,2,3];

const f = ()=>42;

const g = 1, h = 2;

const i = [1,
	2,3,
]

const j = [
	1,
	2
];

const k =  42;

const l = 42;    
const m = 42 ;
`;

const linter = new ESLint({
	overrideConfigFile: './configs/recommended.ts',
	fix: true,
});

const fixes = (input: string, output: string) => async() => {
	const result = await linter.lintText(input);
	expect(result[0].output).toBe(output);
};

const nofixes = (input: string) => async() => {
	const result = await linter.lintText(input);
	expect(result[0].fatalErrorCount).toBe(0);
	expect(result[0].output).toBeUndefined();
};

const errors = (input: string, ruleId: string) => async() => {
	const result = await linter.lintText(input);
	expect(result[0].messages.map((m) => m.ruleId)).toContain(ruleId);
};

const noerrors = (input: string, ruleId: string) => async() => {
	const result = await linter.lintText(input);
	expect(result[0].messages.map((m) => m.ruleId)).not.toContain(ruleId);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const debug = (input: string, ...ignore: unknown[]) => async() => {
	const result = await linter.lintText(input);
	console.error(JSON.stringify(result, null, 2));
};

describe('eslint-plugin-jk recommended', () => {
	it('should work', fixes(
		'let a = 1',
		'const a = 1;\n',
	));
	it('should lint and fix code with recommended config', async() => {
		const result = await linter.lintText(example);
		expect(result[0].output).toMatchSnapshot();
	});
	// OPINIONS
	// no multiple empty lines
	it('should fix multiple empty lines', fixes(
		'\na();\n\n\nb();\n\nc();\nd();\n\n',
		'a();\n\nb();\n\nc();\nd();\n',
	));
	// space before function paren
	it('should fix space before function paren', fixes(
		'function test () {}',
		'function test() {}\n',
	));
	// space before blocks
	it('should fix space before blocks', fixes(
		'if(true){\n\ta();\n}',
		'if(true) {\n\ta();\n}\n',
	));
	// it should error on not camelcase
	it('should error on not camelcase', errors(
		'const not_camel_case = 1;\n',
		'camelcase',
	));
	// always use semicolons
	it('should fix semicolons', fixes(
		'const a = 1\nconst b = 2',
		'const a = 1;\nconst b = 2;\n',
	));
	// eqeqeq
	it('should error on eqeqeq', errors(
		'if(a == 1) {}\n',
		'eqeqeq',
	));
	// curly
	it('should fix missing curly braces', fixes(
		'if(a) b();\n',
		'if(a) {\n\tb();\n}\n',
	));
	// quotes
	it('should fix quotes', fixes(
		'const a = "hello";\n',
		'const a = \'hello\';\n',
	));
	// quotes to avoid escape are allowed
	it('should allow quotes to avoid escape', noerrors(
		'const a = "hello\'s world";\n',
		'quotes',
	));
	// no unreachable
	it('should error on unreachable code', errors(
		'function test() { return; console.log("unreachable"); }\n',
		'no-unreachable',
	));
	// no unused vars
	it('should error on unused vars', errors(
		'const a = 1;\n',
		'no-unused-vars',
	));
	// array bracket spacing
	it('should fix array bracket spacing', fixes(
		'const a = [ 1, 2, 3 ];\n',
		'const a = [1, 2, 3];\n',
	));
	// comma spacing
	it('should fix comma spacing', fixes(
		'foo(1,2 ,3 , 4);\n',
		'foo(1, 2, 3, 4);\n',
	));
	// no console
	it('should error on console', errors(
		'console.log("test");\n',
		'no-console',
	));
	// allow console.info, warn, error
	it('should allow console.info, warn, error', noerrors(
		'console.info("test");\nconsole.warn("test");\nconsole.error("test");\n',
		'no-console',
	));
	// indent
	it('should fix indent', fixes(
		'if(a){\nb();\n}\n',
		'if(a) {\n\tb();\n}\n',
	));
	// indent for switch case
	it('should fix indent for switch case', fixes(
		'switch(a){\ncase 1:\nb();\n}\n',
		'switch(a) {\n\tcase 1:\n\t\tb();\n}\n',
	));
	// arrow spacing
	it('should fix arrow spacing', fixes(
		'const f = () =>42;\n',
		'const f = () => 42;\n',
	));
	// arrow parens
	it('should fix arrow parens', fixes(
		'const f = a => a + 1;\n',
		'const f = (a) => a + 1;\n',
	));
	// no trailing spaces
	it('should fix trailing spaces', fixes(
		'const a = 1; \n',
		'const a = 1;\n',
	));
	// object curly spacing
	it('should fix object curly spacing', fixes(
		'const a = {b: 1, c: 2};\n',
		'const a = { b: 1, c: 2 };\n',
	));
	// space infix ops
	it('should fix space infix ops', fixes(
		'1+2;\n',
		'1 + 2;\n',
	));
	// one var declaration per line
	// TODO: Actually we should not allow multiple vars in one statement at all
	it('should fix one var declaration per line', fixes(
		'const a = 1, b = 2;\n',
		'const a = 1,\n\tb = 2;\n',
	));
	// comma dangle
	it('should fix comma dangle single line', fixes(
		'a = [1, 2,];\n',
		'a = [1, 2];\n',
	));
	it('should fix comma dangle multiline', fixes(
		'a = [\n\t1,\n\t2];\n',
		'a = [\n\t1,\n\t2,\n];\n',
	));
	// TODO: indent binary ops?
	// operator linebreak
	it('should fix operator linebreak', fixes(
		'a = 1\n\t+ 2;\n',
		'a = 1 +\n\t2;\n',
	));
	// operator linebreak with ? and :
	it('should fix operator linebreak with ? and :', fixes(
		'a = b ?\n\tc :\n\td;\n',
		'a = b\n\t? c\n\t: d;\n',
	));
	// quote props
	it('should fix quote props', fixes(
		'a = { "b": 1 };\n',
		'a = { b: 1 };\n',
	));
	// quote props consistent as needed
	it('should fix quote props consistent as needed', fixes(
		'a = { b: 1, "c d": 2 };\n',
		'a = { \'b\': 1, \'c d\': 2 };\n',
	));
	// brace style
	it('should fix brace style', fixes(
		'if(a)\n{\n\tb();\n}\n',
		'if(a) {\n\tb();\n}\n',
	));
	// keyword spacing
	it('should fix keyword spacing: if', fixes(
		'if (1){}\n',
		'if(1) {}\n',
	));
	it('should fix keyword spacing: switch', fixes(
		'switch (1){}\n',
		'switch(1) {}\n',
	));
	it('should fix keyword spacing: while', fixes(
		'while (1){}\n',
		'while(1) {}\n',
	));
	it('should fix keyword spacing: for', fixes(
		'for (;;){}\n',
		'for(;;) {}\n',
	));
	// space in parens
	it('should fix space in parens', fixes(
		'f( 1 );\n',
		'f(1);\n',
	));
	// function paren newline
	it('should allow single line function params without line breaks', nofixes('function f(a, b) {}\n'));
	it('should fix multiline function params with line breaks', fixes(
		'function f(a,\n\tb\n) {\n}\n',
		'function f(\n\ta,\n\tb,\n) {\n}\n',
	));
	// no multi spaces
	it('should fix no multi spaces', fixes(
		'f(1,  2);\n',
		'f(1, 2);\n',
	));
	// semi spacing
	it('should fix semi spacing', fixes(
		'a = 1 ;\n',
		'a = 1;\n',
	));
	// block spacing
	it('should fix block spacing', fixes(
		'{foo();}\n',
		'{ foo(); }\n',
	));
	// always use tabs for indentation
	it('should use tabs for indentation', fixes(
		'if(a) {\n  b();\n}\n',
		'if(a) {\n\tb();\n}\n',
	));
	// padded blocks
	it('should fix padded blocks', fixes(
		'if(a) {\n\n\tb();\n\n}\n',
		'if(a) {\n\tb();\n}\n',
	));
	// array element newline
	it('should fix array element newline', fixes(
		'const a = [1, 2,\n3];\n',
		'const a = [\n\t1,\n\t2,\n\t3,\n];\n',
	));
	it('should allow consistent array element newline', nofixes('const a = [1, 2, 3];\n'));
	// array bracket newline
	it('should fix array bracket newline', fixes(
		'const a = [1,\n\t2,]\n',
		'const a = [\n\t1,\n\t2,\n];\n',
	));
	// max statements per line
	it('should fix max statements per line', errors(
		'const a = 1; const b = 2;\n',
		'@stylistic/max-statements-per-line',
	));
	// max lines
	it('should warn on max lines', errors(
		'1+1;\n'.repeat(600),
		'max-lines',
	));
	// no undef
	it('should error on no undef', errors(
		'f();\n',
		'no-undef',
	));
	// key spacing
	it('should fix key spacing', fixes(
		'const a = {b:1, c:2};\n',
		'const a = { b: 1, c: 2 };\n',
	));
	// padding line between statements
	it('should fix padding line between statements', fixes(
		'export const a = 1;\nconst b = 2;\nconst c = 3;\nclass C {}\n',
		'export const a = 1;\n\nconst b = 2;\nconst c = 3;\n\nclass C {}\n',
	));
	// object shorthand
	it('should fix object shorthand', fixes(
		'const b = 1;\nconst o = {b: b};\n',
		'const b = 1;\nconst o = { b };\n',
	));
	// no var
	it('should fix vars', fixes(
		'var a = 1;\nvar b = 2;\nb = 3;\n',
		'const a = 1;\nlet b = 2;\nb = 3;\n',
	));
	// prefer const
	it('should fix prefer const', fixes(
		'let a = 1;\nlet b = 2;\nb = 3;\n',
		'const a = 1;\nlet b = 2;\nb = 3;\n',
	));
	// template curly spacing
	it('should fix template curly spacing', fixes(
		'const a = `Hello ${name}`;\n',
		'const a = `Hello ${ name }`;\n',
	));
	// func style
	// allow function f () ...
	// disallow const f = function () ...
	// allow const f = () => ...
	it('should fix function style', errors(
		'const f = function() {};\n',
		'func-style',
	));
	it('should allow function declaration', nofixes('function f() {}\n'));
	it('should allow arrow function', nofixes('const f = () => {};\n'));
	// prefer arrow callback
	it('should fix prefer arrow callback', fixes(
		'const a = [1, 2, 3].map(function(x) {\n\treturn x * 2;\n});\n',
		'const a = [1, 2, 3].map((x) => {\n\treturn x * 2;\n});\n',
	));
	// no extra parens
	it('should fix no extra parens', fixes(
		'const a = ((b + c) * d)\n',
		'const a = (b + c) * d;\n',
	));
});
