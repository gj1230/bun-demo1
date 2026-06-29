# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Minimal Bun + TypeScript starter, scaffolded with `bun init`. A single entry point
(`index.ts`) currently prints a greeting; no framework or app logic has been added yet.

- **Runtime / package manager:** Bun 1.2.x
- **Language:** TypeScript (ESM, `"type": "module"`)
- **Entry point:** `index.ts`
- **Remote:** https://github.com/gj1230/bun-demo1 (public, default branch `main`)

## Layout

```
demo1/
├── index.ts        # entry point
├── package.json    # scripts + deps (private, ESM)
├── tsconfig.json   # Bun-tuned TS config
├── .gitignore
└── README.md
```

## Commands

- `bun install` — install dependencies
- `bun start` — run `index.ts` once (alias for `bun run index.ts`)
- `bun dev` — run `index.ts` with `--watch` (reload on change)
- `bun run index.ts` — run the entry point directly
- `bun test` — run tests (no test files exist yet)
- `bun test <file>` — run a single test file

## Relationship to Parent Workspace

`../CLAUDE.md` (`/Users/jiangfeng/VibeCoding/claude/CLAUDE.md`) applies workspace-wide and
defines pre-approved permissions. This file is scoped to `demo1` and holds details specific
to this project.

## Note for Future Instances

Keep this file in sync with the real code. As the project grows (routes, modules, a test
suite, CI), document the actual architecture and verified commands here — do not leave
fabricated or guessed details.
