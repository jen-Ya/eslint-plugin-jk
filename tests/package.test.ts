import { execFileSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));

describe('package', () => {
	// The built entry must be importable as plain node esm. Jest's
	// moduleNameMapper resolves extensionless imports that node does not,
	// so this has to spawn a real node process (dist is built by pretest).
	it('can be imported as plain node esm', () => {
		execFileSync(
			'node',
			['--input-type=module', '-e', 'await import(\'eslint-plugin-jk\');'],
			{
				cwd: packageRoot,
				stdio: 'pipe',
			},
		);
	});
	it('exposes all configs from the built entry', () => {
		const output = execFileSync(
			'node',
			[
				'--input-type=module',
				'-e',
				'const { default: jk } = await import(\'eslint-plugin-jk\'); console.log(Object.keys(jk.configs).join(\',\'));',
			],
			{
				cwd: packageRoot,
				stdio: 'pipe',
			},
		).toString().trim().split(',');
		expect(output).toEqual(expect.arrayContaining([
			'recommended',
			'recommendedJsx',
			'recommendedTs',
			'defaultBrowser',
			'defaultNode',
			'defaultJsxNode',
			'defaultTs',
		]));
	});
	// Everything the configs import at runtime must be a real dependency -
	// consumers do not install devDependencies
	it('declares all runtime imports as dependencies', () => {
		const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
		const runtimeImports = [
			'@babel/eslint-parser',
			'@eslint/js',
			'@stylistic/eslint-plugin',
			'eslint-plugin-react',
			'globals',
			'typescript-eslint',
		];
		for(const name of runtimeImports) {
			expect(Object.keys(pkg.dependencies)).toContain(name);
		}
	});
});
