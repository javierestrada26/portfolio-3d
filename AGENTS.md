# AGENTS.md

Personal portfolio built on Next.js 16 (App Router) + React 19 + TypeScript, with a 3D keyboard scene. Single package (pnpm, not a monorepo).

## Commands

- Package manager: pnpm 11.20.0 (`packageManager` field). Node >= 20.9.
- Install: `pnpm install`. Dev: `pnpm dev`. Build: `pnpm build`. Start: `pnpm start`.
- Checks, in this order: `pnpm lint` then `pnpm typecheck` (`tsc --noEmit --incremental false`). Both pass today; `lint` has 0 errors and about 46 warnings, which are existing baseline. Do not add new `react-hooks/*` warnings; hook-order violations are errors.
- `next build` does not run lint. Run `pnpm lint` yourself.
- There is no test script. `*.test.ts` files (in `src/components/game/` and `src/components/keyboard/`) use `node:test`, but plain `node --test <file>` fails with `ERR_MODULE_NOT_FOUND` because the imports omit file extensions, and `tsx` is not installed. Do not assume a working test command; if you need to run them, set up a runner first.
- Windows: PowerShell blocks `pnpm.ps1` under the default execution policy. Run pnpm through cmd, e.g. `cmd /c "pnpm typecheck"`.
- No CI workflows exist in `.github/` (only `FUNDING.yml`), so the checks above are the only gate.

## Structure

- `src/app/`: App Router. `page.tsx` is the single-page home (hero, skills, experience, projects, contact sections). Other routes: `blogs/`, `resume/`, `sitemap.ts`, `robots.ts`.
- `src/app/api/send/route.ts`: contact form via Resend.
- `src/app/api/collect/route.ts`: deploy-hostname beacon for analytics. Part of the author's setup; leave it in place.
- `src/components/`: UI. `keyboard/` holds the 3D keyboard (`@chibi3d/runtime` + Three.js). `realtime/`, `game/`, and `contexts/socketio.tsx` hold the optional multiplayer features.
- `src/components/ui/`: shadcn-style primitives. `components.json` is present.
- `src/data/config.ts`: personal info and site metadata. `src/data/constants.ts` holds `SKILLS` and experience. `src/data/projects.tsx` holds projects.
- `src/content/blogs/*.mdx`: blog posts. `src/lib/mdx.ts` validates frontmatter with zod. `title`, `publishedAt` (`YYYY-MM-DD`), and `summary` are required; `image`, `author`, and `tags` are optional. Invalid frontmatter throws.
- Path alias: `@/*` maps to `src/*`.

## Spec-driven workflow

- Project skills in `.agents/skills/`: `spec` and `spec-impl`. Both set `disable-model-invocation: true`, so only the user runs them (`/spec`, `/spec-impl`); don't invoke them yourself.
- `/spec <description>` designs a spec and saves it as `specs/NN-slug.md` in `Draft` state. All specs must be created in the project-root `specs/` folder, never in external plan directories. It writes no code. Structure: `.agents/skills/spec/template.md`.
- `/spec-impl NN-slug` implements only specs whose state means "Approved" (`Approved`, `Aprobado`, etc.) and stops on any other state. It creates and switches to branch `spec-NN-slug`, then implements one plan step at a time, pausing for review.
- Verification agent `.opencode/agents/spec-verify.md` (`spec-verify`, mode `all`, project-level): checks each acceptance criterion of a spec against the real code and the running app, then marks the checklist in `specs/NN-slug.md` with evidence. It uses Context7 to confirm the implementation follows current Next.js recommendations, Playwright at the exact viewport for visual criteria, and `pnpm lint`/`pnpm typecheck` (via cmd) for command criteria. Launch it as a subagent ("use spec-verify on spec 01") or select it as primary (TUI agent picker, or `opencode run --agent spec-verify`).
- `spec-verify` only edits files under `specs/**` — never app code — and never changes a spec's state, never commits. Criteria it cannot verify objectively are reported as unverified instead of guessed. When it reports all criteria passing, the user sets the spec's state to `Implemented`.
- Don't change a spec's state to `Approved` or `Implemented` yourself; the user does that.
- `specs/.spec-config.yml` controls git behavior: `AutoCreateBranch` (default `true`) and `AutoCommitSteps` (default `false`). If it exists, don't overwrite it.
- Commits: don't commit or push unless `AutoCommitSteps: true` or the user asks. Never use `git add -A` or `git add .`, and never `--no-verify`. Step commits are named `spec-NN-step-MM`.
- `specs/` exists on disk (spec 01) but is not committed to git yet; `specs/.spec-config.yml` does not exist, so the defaults apply.

## Config gotchas

- `next.config.mjs` sets `cacheComponents: true`. Caching uses `"use cache"` + `cacheLife` (see `src/lib/github-stars.ts`). Account for this before adding dynamic data reads in server components.
- `next.config.mjs` also sets security headers and a cache rule: `/assets/*` is cached for 1 hour (replace files at the same URL and they update after that). `/_next/static/*` uses Next's default caching; don't add a custom Cache-Control for it (it triggers a dev warning).
- Tailwind is v3 (`tailwindcss ^3.4.1`, `tailwind.config.ts`), not v4.
- `NEXT_PUBLIC_*` values are inlined at build time. Changing them requires a rebuild.

## Environment

- Copy `.env.example` to `.env.local` (gitignored). `RESEND_API_KEY` is needed for the contact form.
- `NEXT_PUBLIC_WS_URL` is optional. When unset, realtime UI is hidden (`header.tsx`, and `socketio.tsx` returns early). The realtime backend is private and not in this repo, so you cannot run it locally. Work on the static site unless the user says otherwise.
- Umami analytics only loads when `UMAMI_SITE_ID` is set. `UMAMI_DOMAIN` overrides the script host (for self-hosting). `UMAMI_DEPLOY_SITE_ID` is where `/api/collect` records deploy hostnames; unset, it only logs. `NEXT_PUBLIC_GA_ID` enables Google Analytics. `NEXT_PUBLIC_LEGACY_HOST` shows the "we moved" notice.
- `src/components/analytics.tsx` hardcodes its collect endpoint to `https://nareshkhatri.dev/api/collect`, so a fork that wants its own collect endpoint must edit that file too.
