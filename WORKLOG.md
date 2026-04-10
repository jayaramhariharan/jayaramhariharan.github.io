# Worklog

Date: 2026-04-11

- Created this folder as a clean extraction of the currently working portfolio app.
- Source folder was `C:\Users\jayar\portfolio_v2`.
- Excluded from migration:
  - `.git/`
  - `node_modules/`
  - `dist/`
  - nested `site/`
  - agent/temp files
  - bulk `case-studies/` content not needed at runtime
- Included:
  - root Vite runtime app
  - restored missing runtime files
  - two preference markdown files
- Verification passed:
  - `npm install`
  - `npm run build`
  - `http://127.0.0.1:40001/`
- Renamed the external case-study folder from `whattonamethis` to `C:\Users\jayar\portfolio_content_system`.
- Added a junction at `C:\Users\jayar\portfolio_jay_apr\portfolio_content_system` so the content system is reachable from the APR workspace without copying it into the app.
- Prepared the app and content system for separate GitHub repos and backup flows.
