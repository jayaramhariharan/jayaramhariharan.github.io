# Project Handoff: Portfolio Deployment & Content Updates

## Current Status
The portfolio website has been **successfully deployed and is live** at the following URL:
👉 **[https://jayaramhariharan.github.io](https://jayaramhariharan.github.io)**

## What Was Accomplished in the Last Session
1. **GitHub Migration**: The local codebase was migrated from the old `jrambackup1-lgtm` account to a clean, professional GitHub account (`jayaramhariharan`).
2. **Repository Architecture**: The GitHub repository is intentionally named `jayaramhariharan.github.io` to utilize GitHub's "User Site" feature, ensuring the URL acts as a clean root domain without any trailing folder paths.
3. **Automated CI/CD Pipeline**: 
   - Created `.github/workflows/deploy.yml`.
   - GitHub Actions is now configured as the deployment source. 
   - Every time code is pushed to the `master` branch, the "robot" automatically runs `npm run build` and serves the newly generated `dist` folder to the live URL.
4. **Vite Configuration**: Updated `vite.config.ts` to ensure the base path is correct for root domain hosting.
5. **Credential Management**: Cleared out old, conflicting Windows Git credentials to ensure seamless pushes to the new professional account.
6. **Content Update (Resume Links)**: Updated hardcoded Dropbox resume links across the entire project (`constants.ts`, `ViperZCaseStudy.tsx`, `HydrofoilBoatCaseStudy.tsx`, and `WolfCaseStudy.tsx`) to ensure the newest resume PDF is served universally.

## Information for the Next AI Agent
- **Infrastructure is Done**: You do not need to worry about Vercel, Netlify, custom DNS records (`DNS_PROBE_POSSIBLE`), or GitHub Pages configurations. The deployment pipeline is fully automated and stable.
- **Workflow**: 
  - For local development, simply run `npm run dev` (Vite's HMR handles live refreshing).
  - To push updates to the live site, run `git add .`, `git commit -m "..."`, and `git push`. The live site will automatically update ~60 seconds later.
- **Focus Area**: The next session should focus entirely on frontend development: editing React components, refining the content, adding case studies, and perfecting the UI/UX design.

## Next Steps for the User
You are fully unblocked to start editing your website content! Any changes you make locally can be pushed to GitHub to instantly reflect on your live Apple portfolio.
