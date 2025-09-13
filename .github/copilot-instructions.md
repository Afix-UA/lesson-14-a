# Copilot Instructions for AI Agents

## Overview
This project is a set of JavaScript/TypeScript learning tasks, each in its own HTML file under `task-*` directories. The main entry point is `index.html`, which links to each task. Styles are in `css/`. TypeScript source is in `src/`, compiled to `dist/` (see `tsconfig.json`).

## Architecture & Patterns
- Each `task-*/task.html` is a self-contained exercise, often with inline `<script>` blocks.
- Shared CSS: `css/reset.css` and `css/style.css` are used by all tasks for consistent styling.
- The main page (`index.html`) provides navigation to all tasks and describes their requirements.
- TypeScript code (currently only `src/index.ts`) is compiled to `dist/index.js` and can be included in tasks as needed.
- No frameworks or build tools beyond TypeScript and basic npm.

## Developer Workflows
- **Build TypeScript:**
  - Run `tsc` (TypeScript compiler) to build `src/` to `dist/`.
  - Or use the VS Code build task (runs `msbuild` for compatibility, but `tsc` is the main tool for TS).
- **Add a new task:**
  - Create a new folder `task-N/` and add `task.html`.
  - Link shared CSS as in other tasks.
  - Add inline JS or reference compiled JS from `dist/` if needed.
- **Run/Preview:**
  - Open any `task-*/task.html` or `index.html` in a browser.
- **No automated tests** are present; tasks are verified by manual browser interaction.

## Project-Specific Conventions
- All logic for each task is usually placed directly in the HTML file's `<script>` tag.
- Use `document.write` for output in tasks (as seen in examples).
- User interaction is via `prompt`, `alert`, and `confirm`.
- TypeScript is used for the main array exercise (`src/index.ts`), but most tasks are plain JS in HTML.
- No module imports/exports or advanced build steps.

## Integration & Dependencies
- No external JS dependencies; only CSS is shared.
- TypeScript config (`tsconfig.json`) outputs to `dist/`.
- `package.json` is present but only for metadata; no scripts except a placeholder `test`.

## Examples
- See `task-1/task.html` for a multi-step array processing example.
- See `task-2/task.html` and `task-4/task.html` for interactive games with randomization and user input.
- See `src/index.ts` for a simple TypeScript array definition.

## Key Files & Directories
- `index.html` — main navigation and summary
- `task-*/task.html` — individual exercises
- `css/` — shared styles
- `src/` — TypeScript source (compiled to `dist/`)
- `tsconfig.json` — TypeScript config

## Tips for AI Agents
- When adding new tasks, follow the folder and file naming pattern.
- Keep JS logic inside the HTML unless extending the TypeScript part.
- Use the same CSS includes for visual consistency.
- Manual browser testing is the standard for validation.
