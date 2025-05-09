import { Linter } from 'eslint';
const tsOpinions:Linter.RulesRecord = {
	'@stylistic/member-delimiter-style': [
		'error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
		},
	],
}
export default tsOpinions;