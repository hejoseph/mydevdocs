---
title: Vite
sidebar_position: 1
tags:
  - vite
---

# Why Vite Is Used When Building a React App

[Vite](https://vitejs.dev/) is a **modern build tool** that is increasingly used to build React applications (as well as Vue, Svelte, Astro, etc.). It was designed to offer a **faster development experience**, **ultra-fast builds**, and **simple configuration**.

## Why Use Vite with React?

### 1. Instant Dev Server Startup
Vite uses **native ES Modules (ESM)** in the browser, so it doesn't need to bundle the entire app before starting.

```js
// Unlike Webpack, which bundles everything up front
```

### 2. Fast Hot Module Replacement (HMR)
When you change a React file, Vite updates **only that file**, not the whole app.

```js
// React components update in real-time without a full page reload
```

### 3. Simple Configuration
Using `vite.config.js`, you can configure your app with minimal effort:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### 4. Built-in Support for JSX, TypeScript, CSS Modules, etc.
Vite works out of the box with modern frontend features—no need to manually configure Babel, TypeScript, or PostCSS.

### 5. Fast Production Build
Vite uses **Rollup** under the hood for production builds, delivering optimized, minified output.

```bash
vite build
```

## Example: Creating a React App with Vite

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

This scaffolds a React project with:
- Vite as the bundler
- React + JSX
- Integrated dev server and HMR

## Conclusion

Vite is quickly becoming the default tool for React developers because it offers:
- **Blazing fast startup and updates**
- **Minimal, intuitive config**
- **Smooth integration with React and TypeScript**

That's why many frameworks (including Astro, experimental versions of Next.js, SvelteKit, etc.) are adopting it internally.

Learn more at: [https://vitejs.dev/](https://vitejs.dev/)