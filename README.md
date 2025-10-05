# Playwright Enterprise Test Framework (TypeScript)

This repository is a boilerplate Playwright framework designed for enterprise-grade UI, API, and optional DB validation testing.

Key features:
- Playwright Test runner with TypeScript
- Page Object Model (POM)
- Environment based configs via .env
- API tests using Playwright request context
- Optional DB validation (Postgres / MySQL)
- Allure reporting, screenshots, video, traces
- GitHub Actions and Docker support
- Test tagging, retries, parallelization, and notifications

Quick start
1. Copy .env.example to .env and edit values: `cp .env.example .env` (Windows: `copy .env.example .env`).
2. Install dependencies: `npm install`.
3. Run tests: `npm test` or run specific suites: `npm run test:ui` or `npm run test:api`.
4. Generate Allure report: `npm run allure:generate` then `npm run allure:open`.

Folder structure

- tests/           # Playwright tests (ui, api)
- src/
  - pages/         # Page objects
  - utils/         # Helpers (logger, data loader, db, notifier)
  - config/        # Environment and config loaders
- playwright.config.ts
- .github/workflows/ci.yml
- Dockerfile, docker-compose.yml

CI
- GitHub Actions workflow included to run tests on push/PR with matrix browsers.

Contributing
- Follow TypeScript and ESLint rules.
- Add tests under `tests/ui` or `tests/api`.

See other files for examples and usage notes.
