import '~/any.js'

import { expectType } from 'tsd'

import jsonl from '~/index.js'

expectType<any>(jsonl.parse(jsonl.stringify({})))
