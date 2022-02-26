import is from '@sindresorhus/is';
import type { JsonlStringified } from '~/types.js';

export const jsonl = {
	parse<T = unknown>(jsonl: string | JsonlStringified<T>) {
		return jsonl
			.split('\n')
			.filter((line) => is.nonEmptyStringAndNotWhitespace(line))
			.map((json) => JSON.parse(json) as T);
	},
	stringify<T = unknown>(obj: T): string & JsonlStringified<T> {
		const array: unknown[] = is.array(obj) ? obj : [obj];

		return array.map((val) => JSON.stringify(val)).join('\n') as string &
			JsonlStringified<T>;
	},
};
