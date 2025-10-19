<!--
Auto-generated guidance for AI coding agents. This file was created by analyzing the repository
state and should be edited by maintainers if the project structure changes.
-->

# Copilot instructions for this repository

Repository snapshot (discovered):
- No source files, build files, or README were found in the workspace root at the time
  this guidance was generated.

If you see this file but the repository contents change, update these notes and add
project-specific commands/examples below.

Essentials for an AI agent starting work here
- First-step detection (do this immediately):
  1. Run a file search for common manifests: `package.json`, `pyproject.toml`, `requirements.txt`,
     `Pipfile`, `setup.py`, `pom.xml`, `build.gradle`, `Cargo.toml`, `*.sln`, `go.mod`, and `README.md`.
  2. If none exist (as currently), ask the user what kind of project to create (web, library, portfolio site)
     and where they want source files placed (typical: `src/`, `app/`, `website/`).

- Language and framework inference:
  - Prefer to detect by file extensions and manifests. If none are present, prompt the user:
    "Which language/framework should this repository be initialized for?" Offer common choices: Node/React, Python, .NET, Go, Rust.

Project-specific conventions (current state)
- No discoverable conventions were found. Use these sensible defaults until the user specifies otherwise:
  - Source in `src/` for libraries, or `website/` / `public/` for static portfolio sites.
  - Tests live in `tests/` or `__tests__/` (JS/TS), and `tests/` for Python.
  - Use `main` branch for PRs unless the repo specifies otherwise.

Build, test and debugging workflow (how AI should behave)
- When manifests are present, prefer the project's own commands. If not:
  - To scaffold a Node project, create `package.json` and include `start`, `build`, and `test` scripts.
  - To scaffold a Python project, add `pyproject.toml` or `requirements.txt` and a simple `tox` or `pytest` invocation.
- Always present the user with the commands you intend to run before executing them.
  Examples for Windows PowerShell (copyable):
  - npm install: `npm install`
  - run tests (npm): `npm test`
  - run pytest: `python -m pytest -q`

Integration points & external dependencies
- No integrations were discovered. If you add CI, prefer GitHub Actions in `.github/workflows/`.
- If the project will deploy a site, ask which hosting provider (GitHub Pages, Vercel, Netlify, Azure) and add appropriate deployment workflow only after confirmation.

Code-style, commits and PRs
- If no linter config found, ask the user which style they prefer. Default suggestions:
  - JavaScript/TypeScript: ESLint + Prettier; config at project root.
  - Python: black + flake8.
- Commit message guidance: use concise imperative subject lines and reference the ticket/issue when available.

What an AI agent should avoid doing without confirmation
- Do not create large scaffolding or rewrite the repo without asking the user first.
- Do not add CI workflows that publish secrets or automatically deploy without explicit user approval.

Examples (what to do next when repo empty)
- Option A — Initialize a Node/React portfolio skeleton (ask first)
  - Create `package.json`, `src/`, `public/`, and a minimal `README.md` describing how to run locally.
- Option B — Initialize a static site with plain HTML/CSS/JS (ask first)
  - Create `website/index.html`, `website/styles.css`, and `README.md` with local preview instructions.

Where to look for project-specific rules (if they appear later)
- `.github/`, `docs/`, `README.md`, `CONTRIBUTING.md`, and any `*.config` files at repo root.

If this guidance is insufficient
- Please tell me the intended language/framework and the one or two most important tasks
  you want the agent to perform (for example: "Add blog page", "Convert to React", "Add contact form").

--
Generated: 2025-10-19
