---
title: Astro file
sidebar_position: 1
tags:
  - astro
---

# Astro Configuration File (`astro.config.mjs`)

The `astro.config.mjs` file is the main configuration file for an Astro project. It defines how Astro should behave during development and build processes. It’s written in JavaScript (with the `.mjs` extension to enable ES module syntax).

## Basic Example

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://example.com',
  outDir: './dist',
  base: '/',
  build: {
    format: 'directory',
  },
});
```

## Breakdown of Fields

### `defineConfig()`
A helper function from Astro that provides type-safety and editor IntelliSense.

### `integrations`
An array of Astro integrations (plugins). In this example, React is enabled so that you can use React components inside `.astro` files.

### `site`
Specifies the canonical URL of your site. Useful for generating correct URLs for things like sitemaps, RSS feeds, and meta tags.

### `outDir`
The output directory for the built site. Default is `dist`.

### `base`
The base path for the site. This is useful if you are deploying to a subdirectory (e.g., GitHub Pages).

### `build`
Allows further customization of the build process:
- `format: 'directory'` means each route becomes its own directory with an `index.html` file inside (e.g., `/about/index.html`).

## When Used with React

Even if you're building primarily a React app, you might be:
- Using Astro for static site generation (SSG) with React components.
- Migrating from or to Astro.
- Combining content-focused pages (e.g., blog, docs) with an SPA or MPA structure.

## Optional Fields You Might See

### `vite`
Allows passing custom Vite configuration.

```js
vite: {
  server: {
    port: 3000,
  },
},
```

### `markdown`
Control how Markdown is rendered.

```js
markdown: {
  syntaxHighlight: 'prism',
}
```

---

If your app is primarily a React SPA, the presence of `astro.config.mjs` likely means Astro is serving as the meta-framework around your React code—rendering pages at build time or combining static and dynamic parts.

You can find full docs here: [Astro Configuration Reference](https://docs.astro.build/en/reference/configuration/)
