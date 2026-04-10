# Snapshot

Folder: `C:\Users\jayar\portfolio_jay_apr`

Purpose:

- Clean runtime project extracted from `portfolio_v2`
- Canonical folder for ongoing work
- External content system kept separate at `C:\Users\jayar\portfolio_content_system`
- Junction inside APR: `C:\Users\jayar\portfolio_jay_apr\portfolio_content_system`
- Intended GitHub repo: `jrambackup1-lgtm/portfolio_jay_apr`

Validated runtime state:

- Build passes with `npm run build`
- Dev server responds on `http://127.0.0.1:40001/`

Included preference files:

- `case-studies/guide/content/user-preferences.md`
- `case-studies/portfolio_resources/guides-and-preferences/identity-and-profiles/homepage-copy-preferences.md`

External content-system access:

- Use the APR junction `portfolio_content_system` when working from an APR-rooted IDE.
- Content-system repo should stay separate: `jrambackup1-lgtm/portfolio_content_system`

Restored runtime files carried into this snapshot:

- `components/SmoothScroll.tsx`
- `pages/NotFound.tsx`
- `pages/ViperZCaseStudy.tsx`
- `pages/WolfCaseStudy.tsx`
