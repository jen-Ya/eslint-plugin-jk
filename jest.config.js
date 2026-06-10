export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>'],
	// moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
	testMatch: ['**/*.test.ts'],
	transform: {
		'\\.[jt]sx?$': [
			'ts-jest', {
				useESM: true,
			},
		],
	},
	moduleNameMapper: {
		// only strip the .js extension from relative imports - unanchored
		// '(.+)\.js' also matched the '.js' inside paths like
		// 'eslint/package.json' and broke bare-module resolution
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	extensionsToTreatAsEsm: ['.ts'],
};
