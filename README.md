# prj-3528-task-mugm1ljm

Vue 3 + TypeScript + Vite — admin/routing skeleton with CI.

## Requirements

- Node.js >= 20.19 (see `.nvmrc`)
- pnpm >= 9 (or npm 10+)

## Commands

```bash
pnpm install
pnpm run dev          # vite dev server
pnpm run build        # type-check + vite build
pnpm run preview
pnpm run lint
pnpm run type-check
pnpm run test
pnpm run test:coverage
```

## Stack

| Layer    | Stack                                                  |
| -------- | ------------------------------------------------------ |
| Frontend | Vue 3.5, vue-router 4, Pinia 2                         |
| Build    | Vite 6, vue-tsc 2                                      |
| Quality  | ESLint 9 (flat), Prettier 3                            |
| Tests    | Vitest 2 + @vue/test-utils 2 (jsdom)                   |
| Hooks    | husky 9, lint-staged 15, commitlint 19                 |
| CI       | GitHub Actions (lint / type-check / unit / build)      |
