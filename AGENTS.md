# AGENTS.md

## Project

Next.js 15 (App Router) personal portfolio. Sanity CMS for content (certifications, projects). Deployed on Vercel.

## Commands

- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — ESLint (next/babel + next/core-web-vitals)

No typecheck, formatter, or test scripts exist. Lint is the only automated check.

## Structure

- `app/` — App Router pages and components. `app/page.tsx` is the homepage (hero + certifications from Sanity). `app/projects/page.tsx` is the other route.
- `app/lib/sanity.ts` — Sanity client used by server components (hardcoded projectId/dataset).
- `app/components/SkillsRadar.tsx` — SVG radar/spider chart for technical skills.
- `sanity/` — Sanity Studio config, schemas (`certification`, `project`), and its own `lib/client.ts`.
- `public/` — Static assets.

`my-nextjs-portfolio/` is a stale nested copy of an older sanity config — ignore it.

## Env vars

Required for Sanity CLI/studio (via `sanity/env.ts`):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Note: `app/lib/sanity.ts` and `sanity/lib/image.ts` hardcode Sanity credentials. If changing Sanity projects, update all three files.

## Gotchas

- Dark mode is `class`-based (via `next-themes`), not media-query. Toggle is in `app/components/Themebutton.tsx`.
- Remote images are allowlisted for `cdn.sanity.io` only (`next.config.js`).
- No `components/` at root — all components live in `app/components/`.
- Path alias `@/*` maps to project root.
- `tailwind.config.js` scans `pages/`, `components/`, and `app/` — the `pages/` dir doesn't exist but is harmless.
- Node.js 25+ breaks `next-themes` SSR (localStorage). Patched via `instrumentation.ts`.
