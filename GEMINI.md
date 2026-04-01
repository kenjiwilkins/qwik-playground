# GEMINI.md - Qwik Playground

## Project Overview
This project is a **Qwik City** application, a framework built on top of **Qwik** to provide directory-based routing, layouts, and other essential tools for building full-featured web applications. It uses **Vite** as its build tool and development server, and is written in **TypeScript**.

### Key Technologies
- **Qwik**: A resumable, fine-grained lazy-loading framework.
- **Qwik City**: Routing, layouts, and middleware for Qwik.
- **Vite**: Modern frontend tooling for development and bundling.
- **TypeScript**: Static typing for enhanced developer experience.
- **ESLint & Prettier**: For code quality and consistent formatting.

### Architecture
- **Routing**: Directory-based routing is located in `src/routes/`.
- **Components**: Reusable UI components are stored in `src/components/`.
- **Layouts**: Shared layouts are defined using `layout.tsx` files within the `src/routes/` hierarchy.
- **Static Assets**: Located in the `public/` directory.

## Building and Running
The following commands are available via `npm` or `pnpm`:

- **Development Mode**:
  ```bash
  npm start
  ```
  Starts the Vite development server with SSR enabled.

- **Production Build**:
  ```bash
  npm run build
  ```
  Generates client and server modules, including TypeScript type checking.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  Creates a production build and runs a local server for previewing.

- **Linting**:
  ```bash
  npm run lint
  ```
  Runs ESLint on all `.ts` and `.tsx` files in the `src/` directory.

- **Formatting**:
  ```bash
  npm run fmt
  ```
  Applies Prettier formatting to the entire project.

- **Type Checking**:
  ```bash
  npm run build.types
  ```
  Runs `tsc` to verify types without emitting files.

## Development Conventions
- **Component Declaration**: Use the `component$()` function from `@builder.io/qwik` for all Qwik components.
- **Routing**: Each directory in `src/routes/` corresponds to a URL path. An `index.tsx` file defines the page content, and `layout.tsx` defines the layout for that path and its sub-paths.
- **Styling**:
  - Global styles are in `src/global.css`.
  - Component-specific styles should use **CSS Modules** (`*.module.css`).
  - Inline styles can be loaded using the `?inline` query param (e.g., `import styles from "./styles.css?inline"`).
- **Hooks & State**: Use Qwik-specific hooks like `useSignal`, `useStore`, and `useTask$`.
- **Pencil Editor**: This workspace supports the **Pencil MCP** tool for working with `.pen` design files. Use the `pencil` tools for design-to-code workflows and visual validation.

## Important Files
- `package.json`: Project metadata, dependencies, and scripts.
- `vite.config.ts`: Vite and Qwik plugin configuration.
- `src/root.tsx`: The main entry point of the application.
- `src/entry.ssr.tsx`: Server-side rendering entry point.
- `src/routes/layout.tsx`: Root layout for all pages.
- `tsconfig.json`: TypeScript configuration.
