---
title: Tailwind with docusaurus
sidebar_position: 2
tags:
  - tailwindcss
---

# Integrating Tailwind CSS with Docusaurus

## Step 1: Install Tailwind CSS and its dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**Why this is needed:**
- `tailwindcss`: The core Tailwind CSS library that generates utility classes
- `postcss`: Required for processing Tailwind's CSS (Tailwind is a PostCSS plugin)
- `autoprefixer`: Adds vendor prefixes to CSS rules for better browser compatibility
- `npx tailwindcss init`: Creates a default configuration file (`tailwind.config.js`) to customize Tailwind

## Step 2: Configure Tailwind CSS

The `tailwind.config.js` file tells Tailwind where to look for class usage:

```javascript
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './docs/**/*.{md,mdx}',
  './blog/**/*.{md,mdx}',
  './static/**/*.html',
  './docusaurus.config.js',
]
```

**Why this matters:**
- Tailwind scans these files to find class names it needs to generate
- Without proper content paths, your utility classes won't work
- We include JS/TS files, MD/MDX docs, and HTML files to cover all Docusaurus content

## Step 3: Create PostCSS configuration

`postcss.config.js` sets up the CSS processing pipeline:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Why this is necessary:**
- PostCSS needs to know which plugins to use
- The order matters: Tailwind runs first, then autoprefixer
- Docusaurus already uses PostCSS internally, this just extends it

## Step 4: Add Tailwind directives

In your main CSS file (`src/css/custom.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**What these do:**
- `@tailwind base`: Adds Tailwind's base styles (normalize.css + basic element styles)
- `@tailwind components`: Adds component classes (like .btn, .card - less used in utility-first)
- `@tailwind utilities`: Generates all utility classes (most important part)

## Step 5: Update Docusaurus configuration

The plugin in `docusaurus.config.js`:

```javascript
async function myPlugin() {
  return {
    name: 'docusaurus-tailwindcss',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('tailwindcss'));
      postcssOptions.plugins.push(require('autoprefixer'));
      return postcssOptions;
    },
  };
}
```

**Why this is critical:**
- Docusaurus has its own PostCSS setup
- This plugin ensures Tailwind is added to that pipeline
- Without this, Docusaurus would ignore Tailwind's processing

## Step 6: Purge unused styles (Optional)

The `purge` option in Tailwind v2 (now called `content` in v3+):

```javascript
purge: [
  './src/**/*.{js,jsx,ts,tsx}',
  // ... other paths
]
```

**Purpose:**
- In production, removes unused CSS classes
- Significantly reduces final CSS file size
- Only scans files matching these patterns

## Step 7: Using Tailwind in components

Example component usage:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
```

**Key points:**
- Use `className` instead of `class` in React components
- Utility classes work the same as in HTML
- Works in both React components and MDX files

## Important Notes

1. **Build Process**: Tailwind works during build time, not runtime
2. **Class Detection**: Only classes found in your content files will be generated
3. **CSS Conflicts**: Tailwind's base styles might conflict with Docusaurus - you may need to adjust
4. **Dark Mode**: Tailwind's dark mode can work with Docusaurus' theme system
5. **Restart Needed**: After config changes, restart your dev server
