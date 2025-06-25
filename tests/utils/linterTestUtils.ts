import { ESLint } from 'eslint';

export const linterTestUtils = (linter: ESLint) => {
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

	/* eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars */
	const debug = (input: string, ...ignore: unknown[]) => async() => {
		const result = await linter.lintText(input);
		if(result[0].output) {
			console.info(result[0].output.replace(/\t/g, '─╼').replace(/ /g, '‧'));
		}
		console.error(JSON.stringify(result, null, 2));
	};

	return {
		fixes,
		nofixes,
		errors,
		noerrors,
		debug,
	};
};
