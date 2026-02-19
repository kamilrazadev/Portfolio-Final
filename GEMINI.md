# Project Overview

This is a modern web application built with **Next.js 16** and **React 19**, utilizing the **App Router** architecture. It is styled with **Tailwind CSS 4** and configured to use the **React Compiler** for optimized performance.

## Key Technologies

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **Fonts:** Geist Sans and Geist Mono (via `next/font`)
- **Language:** JavaScript (ES6+)

## Project Structure

- `src/app/`: Contains the application routes, layouts, and global styles.
  - `layout.js`: The root layout defining the HTML structure and global font variables.
  - `page.js`: The main entry point/home page.
  - `globals.css`: Global CSS and Tailwind directives.
- `public/`: Static assets like images and SVGs.
- `next.config.mjs`: Next.js configuration, including React Compiler activation.
- `jsconfig.json`: JavaScript configuration for path mapping (e.g., `@/*` -> `src/*`).

## Building and Running

The following commands are available via `npm`:

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Build:** `npm run build` - Creates an optimized production build in the `.next` directory.
- **Production Start:** `npm run start` - Starts the production server after a build.

## Development Conventions

- **Component Patterns:** Use functional components and React 19 hooks.
- **Styling:** Use Tailwind CSS 4 utility classes for all styling. Maintain the `antialiased` class on the body.
- **Tailwind 4 Theme:** The project uses the new `@theme` block in `globals.css` to map CSS variables to Tailwind utilities:
  - `--color-background`: Mapped to `bg-background` (using `--background`).
  - `--color-foreground`: Mapped to `text-foreground` (using `--foreground`).
  - `--font-sans`: Mapped to `font-sans` (using `--font-geist-sans`).
  - `--font-mono`: Mapped to `font-mono` (using `--font-geist-mono`).
- **Dark Mode:** Support for dark mode is implemented using the `prefers-color-scheme: dark` media query, which overrides the `--background` and `--foreground` CSS variables.
- **Path Aliases:** Use the `@/` prefix to import modules from the `src` directory (e.g., `import MyComponent from "@/components/MyComponent"`).
- **React Compiler:** The project has `reactCompiler: true` enabled in `next.config.mjs`. Avoid manual `useMemo` or `useCallback` unless necessary, as the compiler handles most optimizations.
- **Fonts:** Utilize the `--font-geist-sans` and `--font-geist-mono` CSS variables defined in the root layout for consistent typography.
