# Portfolio v2

This folder contains the standalone React portfolio built with Vite and Tailwind CSS v4.

## Development

From this folder, install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.
Run `npm run lint` to check the source.

## Styling

Tailwind CSS is integrated through `@tailwindcss/vite` in `vite.config.js` and
loaded from `src/index.css` with `@import 'tailwindcss';`. Use Tailwind utility
classes in the React components; keep only global document styles in `src/index.css`.
Portfolio content and navigation data live in `src/data/portfolio.js`.
