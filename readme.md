# js-jsonl

## Installation

Install js-jsonl from your favourite package manager (I recommended [pnpm](https://pnpm.io)):

```shell
pnpm add jsonl
```

## Usage

```typescript
import { jsonl } from 'js-jsonl';

const parsed = jsonl.parse(`
  ["Name", "Session", "Score", "Completed"]
  ["Gilbert", "2013", 24, true]
  ["Alexa", "2013", 29, true]
  ["May", "2012B", 14, false]
  ["Deloise", "2012A", 19, true]
`);

expect(parsed).toEqual([
  ["Name", "Session", "Score", "Completed"]
  ["Gilbert", "2013", 24, true]
  ["Alexa", "2013", 29, true]
  ["May", "2012B", 14, false]
  ["Deloise", "2012A", 19, true]
])
```
