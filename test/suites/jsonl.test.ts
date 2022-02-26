import * as fc from 'fast-check';
import deepEqual from 'fast-deep-equal';
import { jsonl } from '~/index.js';

test('jsonl.stringify(jsonl.parse(json)) is always equal to json', () => {
	fc.assert(
		fc.property(
			fc.json(),
			(json) => jsonl.stringify(jsonl.parse(json)) === json
		)
	);
});

test('jsonl.parse(jsonl.stringify(jsonValue)) is always equal to json', () => {
	fc.assert(
		fc.property(fc.jsonValue(), (jsonValue) => {
			deepEqual(jsonl.parse(jsonl.stringify(jsonValue)), [jsonValue]);
		})
	);
});
