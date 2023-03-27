# js-jsonl

Pasre and stringify data using the [JSON Lines format](https://jsonlines.org/).

[![npm version](https://img.shields.io/npm/v/js-jsonl)](https://npmjs.com/package/js-jsonl)

## Installation

Install `js-jsonl` using your favorite package manager:

```shell
npm install js-jsonl
```

## Usage

```typescript
import jsonl from 'js-jsonl';

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
```

### Note about types

`jsonl.parse` returns the `unknown` type by default for maximum type-safety. Thus, using a type cast is recommended:

```typescript
const fooBar = jsonl.parse("{foo: 'bar'}") as { foo: bar };
const fooBarString = jsonl.stringify(fooBar) // `jsonl.stringify` always returns a string
```

If you prefer that `jsonl.parse` mirrors the behavior of `JSON.parse` and returns any instead, you can add the following import anywhere in your project to change this behavior globally:

```typescript
// `js-jsonl/parse-returns-any` is an empty module using TypeScript module augmentation to alter the return type of `jsonl.parse`
import type {} from 'js-jsonl/parse-returns-any'
```
