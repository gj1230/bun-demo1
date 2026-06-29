# demo1

[![CI](https://github.com/gj1230/bun-demo1/actions/workflows/ci.yml/badge.svg)](https://github.com/gj1230/bun-demo1/actions/workflows/ci.yml)

A minimal [Bun](https://bun.sh) + TypeScript project.

## Requirements

- [Bun](https://bun.sh) v1.2+

## Setup

```bash
bun install
```

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `bun start`         | Run the entry point (`index.ts`)         |
| `bun dev`           | Run with `--watch` (reload on change)    |
| `bun test`          | Run the test suite                       |
| `bun test <file>`   | Run a single test file                   |
| `bun run typecheck` | Type-check with `tsc --noEmit`           |

> The `test` and `typecheck` scripts are also runnable via npm
> (`npm test`, `npm run typecheck`) if you prefer.

## Project structure

```
demo1/
├── index.ts                          # entry point
├── greet.ts                          # greet() helper
├── greet.test.ts
├── src/
│   └── utils/
│       ├── date.ts                   # formatRelativeTime()
│       └── formatRelativeTime.test.ts
└── .github/workflows/ci.yml          # runs bun test on push / PR
```

## Usage

### `formatRelativeTime(date: Date): string`

Formats a past `Date` as a human-readable relative time in Chinese.

```ts
import { formatRelativeTime } from "./src/utils/date";

formatRelativeTime(new Date(Date.now() - 10_000));        // "刚刚"
formatRelativeTime(new Date(Date.now() - 3 * 60_000));    // "3 分钟前"
formatRelativeTime(new Date(Date.now() - 2 * 3_600_000)); // "2 小时前"
formatRelativeTime(new Date(Date.now() - 26 * 3_600_000));// "昨天"
formatRelativeTime(new Date(Date.now() - 3 * 86_400_000));// "3 天前"
formatRelativeTime(new Date("2020-01-15"));               // "2020-01-15"
```

| Time since `date` | Output       |
| ----------------- | ------------ |
| < 1 minute        | `刚刚`       |
| < 1 hour          | `N 分钟前`   |
| < 1 day           | `N 小时前`   |
| exactly 1 day     | `昨天`       |
| 2–7 days          | `N 天前`     |
| > 7 days          | `YYYY-MM-DD` |

## Testing

```bash
bun test                      # all tests
bun test formatRelativeTime   # just the date util tests
```

This project was created using `bun init` in bun v1.2.14.
