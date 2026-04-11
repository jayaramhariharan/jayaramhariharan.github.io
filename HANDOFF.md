# Handoff

Canonical project folder:

`C:\Users\jayar\portfolio_jay_apr`

Current status:

- This folder contains the working portfolio app state.
- It is the cleaned successor to `portfolio_v2`.
- Continue all future implementation here.
- The external case-study and content system now lives at `C:\Users\jayar\portfolio_content_system`.
- A junction is available inside this folder at `portfolio_content_system` so it stays visible from an APR-rooted IDE.
- GitHub repo target for this app: `https://github.com/jrambackup1-lgtm/portfolio_jay_apr`
- Keep the content system in its own repo: `https://github.com/jrambackup1-lgtm/portfolio_content_system`

GitHub status:

- App repo is live and synced.
- Content system is backed up separately and synced via its own repo.

Vercel status:

- Production project: `portfolio-jay-2026`
- Production URL: `https://portfolio-jay-2026.vercel.app`
- GitHub repo `jrambackup1-lgtm/portfolio_jay_apr` is connected to Vercel.
- Pushes to `master` now trigger production deployments.
- `vercel.json` is committed to keep Vite build settings explicit.
- Older Vercel projects were removed; this is the only remaining Vercel project in the account.

How to run:

- `npm install`
- `npm run dev -- --host 127.0.0.1 --port 40001`

Verification baseline:

- `npm run build` passes
- Home page and case-study routes resolve
- The app matches the previously confirmed working state

Recent UI/content state:

- The home page includes a refreshed interactive `Skills` section.
- Skills use a right-side list and left-side detail panel.
- CAD and prototyping now show real software/logo tags and tighter portfolio-style summaries.
- Hero headline currently reads:
  - `I'm Jay. I design products and`
  - `love to solve problems.`
- Footer CTA currently reads:
  - `Working on something new?`
  - `Let's talk`

Content-system note:

- Edit case studies and content-system files through `C:\Users\jayar\portfolio_jay_apr\portfolio_content_system` in the IDE, or directly at `C:\Users\jayar\portfolio_content_system`.
