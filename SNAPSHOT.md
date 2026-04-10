# Snapshot

Folder: `C:\Users\jayar\portfolio_jay_apr`

Purpose:

- Clean runtime project extracted from `portfolio_v2`
- Canonical folder for ongoing work
- External content system kept separate at `C:\Users\jayar\portfolio_content_system`
- Junction inside APR: `C:\Users\jayar\portfolio_jay_apr\portfolio_content_system`
- Intended GitHub repo: `jrambackup1-lgtm/portfolio_jay_apr`
- Live app repo: `https://github.com/jrambackup1-lgtm/portfolio_jay_apr`

Validated runtime state:

- Build passes with `npm run build`
- Dev server responds on `http://127.0.0.1:40001/`
- Production deploy responds at `https://portfolio-jay-2026.vercel.app`
- GitHub `master` pushes now auto-deploy to Vercel

Deployment state:

- Vercel project: `portfolio-jay-2026`
- Production URL: `https://portfolio-jay-2026.vercel.app`
- Repo-linked auto deploy: `jrambackup1-lgtm/portfolio_jay_apr` on `master`
- Older Vercel projects were removed during cleanup so this is the only remaining project in the account

Deployment config:

- `vercel.json` is tracked in the repo
- Build command: `npm run build`
- Output directory: `dist`

Included preference files:

- `case-studies/guide/content/user-preferences.md`
- `case-studies/portfolio_resources/guides-and-preferences/identity-and-profiles/homepage-copy-preferences.md`

External content-system access:

- Use the APR junction `portfolio_content_system` when working from an APR-rooted IDE.
- Content-system repo should stay separate: `jrambackup1-lgtm/portfolio_content_system`
- Live content repo: `https://github.com/jrambackup1-lgtm/portfolio_content_system`

Restored runtime files carried into this snapshot:

- `components/SmoothScroll.tsx`
- `pages/NotFound.tsx`
- `pages/ViperZCaseStudy.tsx`
- `pages/WolfCaseStudy.tsx`
