import * as fc from 'fast-check'
import deepEqual from 'fast-deep-equal'
import { expect, test } from 'vitest'

import jsonl from '~/index.js'

test('stringifies empty array as an empty string', () => {
	expect(jsonl.stringify([])).toEqual('')
})

test('parses empty string as an empty array', () => {
	expect(jsonl.parse('')).toEqual([])
	expect(jsonl.parse('\t')).toEqual([])
	expect(jsonl.parse('\n\t')).toEqual([])
})

test('jsonl.stringify(jsonl.parse(json)) is always equal to json', () => {
	fc.assert(
		fc.property(
			fc.json(),
			(json) => jsonl.stringify(jsonl.parse(json)) === json
		)
	)
})

test('jsonl.parse(jsonl.stringify(jsonValue)) is always equal to json', () => {
	fc.assert(
		fc.property(
			fc
				.jsonValue()
				.filter(
					(value) =>
						JSON.stringify(value) ===
						JSON.stringify(JSON.parse(JSON.stringify(value)))
				),
			(jsonValue) => {
				expect(jsonl.parse(jsonl.stringify(jsonValue))).toEqual(
					[jsonValue].flat()
				)
			}
		)
	)
})
