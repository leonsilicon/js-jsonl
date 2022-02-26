# js-jsonl

## Installation

Install js-jsonl from your favourite package manager (I recommend [pnpm](https://pnpm.io)):

```shell
pnpm add js-jsonl
```

## Usage

```typescript
import { jsonl } from 'js-jsonl';

const jsonlString = `
  ["Name", "Session", "Score", "Completed"]
  ["Gilbert", "2013", 24, true]
  ["Alexa", "2013", 29, true]
  ["May", "2012B", 14, false]
  ["Deloise", "2012A", 19, true]
`;

const jsonlParsed = [
  ["Name", "Session", "Score", "Completed"],
  ["Gilbert", "2013", 24, true],
  ["Alexa", "2013", 29, true],
  ["May", "2012B", 14, false],
  ["Deloise", "2012A", 19, true]
];

expect(jsonl.parse(jsonlString)).toEqual(jsonlParsed);
expect(jsonl.stringify(jsonlParsed)).toEqual(jsonlString);

// Also works with TypeScript!

const fooBar = jsonl.parse<{ foo: 'bar' }>("{foo: 'bar'}");
const fooBarString = jsonl.stringify(fooBar)
const fooBarParsed: { foo: 'bar' } = jsonl.parse(fooBarString); // no type error!
```

You can also use the `JsonlInfer<T>` helper to extract the JSONL type:

```typescript
import type { JsonlInfer } from 'js-jsonl';

const fooBar = jsonl.parse<{ foo: 'bar' }>("{foo: 'bar'}");
type FooBarParsed = JsonlInfer<typeof fooBar> // { foo: 'bar' }
```


expect(parsed).toEqual([
  ["Name", "Session", "Score", "Completed"]
  ["Gilbert", "2013", 24, true]
  ["Alexa", "2013", 29, true]
  ["May", "2012B", 14, false]
  ["Deloise", "2012A", 19, true]
])
```
