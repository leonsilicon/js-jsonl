import { expectType } from 'tsd';
import type { JsonlStringified } from '~/index.js';
import { jsonl } from '~/index.js';

test('types are correct', () => {
	const obj = [
		{
			name: 'Gilbert',
			wins: [
				['straight', '7♣'],
				['one pair', '10♥'],
			],
		},
		{
			name: 'Alexa',
			wins: [
				['two pair', '4♠'],
				['two pair', '9♠'],
			],
		},
		{ name: 'May', wins: [] },
		{ name: 'Deloise', wins: [['three of a kind', '5♣']] },
	];

	expectType<JsonlStringified<typeof obj>>(jsonl.stringify(obj));
	expectType<typeof obj>(jsonl.parse(jsonl.stringify(obj)));

	const obj2 = [[]];
	expectType<JsonlStringified<typeof obj2>>(jsonl.stringify(obj2));
	expectType<typeof obj2>(jsonl.parse(jsonl.stringify(obj2)));
});
