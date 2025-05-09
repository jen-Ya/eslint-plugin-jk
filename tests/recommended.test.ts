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

describe('eslint-plugin-jk recommended', () => {
	it('should work', async() => {
		const result = await linter.lintText('let a = 1');
		expect(result[0].output).toMatch('const a = 1;\n');
	});
	it('should lint and fix code with recommended config', async() => {
		const result = await linter.lintText(example);
		expect(result[0].output).toMatchSnapshot();
	});
});
