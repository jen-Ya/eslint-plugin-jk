import { ESLint } from 'eslint';

const linter = new ESLint({
	overrideConfigFile: './configs/recommendedTs.ts',
	fix: true,
});

const memberDelimiterStyleExample = `
type A = {
	foo: string
	bar: number
}
type B = {foo: string, bar: number}
`;

describe('eslint-plugin-jk recommended', () => {
	it('should work', async() => {
		const result = await linter.lintText('let a = 1');
		expect(result[0].output).toMatch('const a = 1;\n');
	});
	it('should fix member delimiter style', async() => {
		const result = await linter.lintText(memberDelimiterStyleExample);
		expect(result[0].output).toMatchSnapshot();
	});
});
