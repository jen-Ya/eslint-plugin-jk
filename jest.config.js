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
		'(.+)\\.js': '$1',
	},
	extensionsToTreatAsEsm: ['.ts'],
};
