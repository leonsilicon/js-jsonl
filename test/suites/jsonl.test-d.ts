import { expectType } from 'tsd'
import { test } from 'vitest'

import jsonl from '~/index.js'

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
	]

	expectType<unknown>(jsonl.parse(jsonl.stringify(obj)))
})
