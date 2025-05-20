---
title: Intro Tailwind CSS
sidebar_position: 1
tags:
  - tailwindcss
---


# Intro Tailwind CSS

## What is Tailwind CSS?

[Tailwind CSS](https://tailwindcss.com) is a **utility-first CSS framework** that provides low-level classes to build fully custom user interfaces without writing custom CSS.

Instead of writing traditional CSS like this:

```css
.button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
```

You use utility classes in your HTML/JSX like this:

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded">Click me</button>
```

Tailwind gives you building blocks rather than predefined components.

---

## When to Use Tailwind CSS

- **Modern web applications** that require rapid UI development.
- **Design systems** where consistency and scalability matter.
- Projects using **React, Vue, Angular, Svelte, Astro**, or plain HTML.
- When you want to avoid context switching between CSS and HTML/JSX.
- For developers who prefer a design-by-composition approach.

---

## Why Use Tailwind CSS?

### 1. **Speed of Development**
You don’t need to write custom CSS. You apply styles directly as class names.

### 2. **No Naming Hassles**
No need to worry about naming classes like `.card-title` or `.button-primary`.

### 3. **Consistency**
Tailwind enforces consistent spacing, typography, colors, etc., using a predefined theme.

### 4. **Customization**
Easily extend or override the default theme in `tailwind.config.js`.

### 5. **Responsive Design Made Simple**
Use responsive prefixes (`sm:`, `md:`, `lg:`, etc.) to adapt layouts.

```html
<div class="text-center md:text-left">Responsive text</div>
```

---

## How to Use Tailwind CSS

### 1. **Install Tailwind**
For a React project using Vite:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. **Configure `tailwind.config.js`**

```js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. **Add Tailwind Directives to your CSS**

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. **Use Classes in JSX/HTML**

```jsx
<div className="bg-gray-100 text-lg font-semibold p-4 rounded shadow">
  Hello Tailwind
</div>
```

---

## Where Tailwind CSS Should Be Used

- **SaaS dashboards**
- **Blogs and marketing sites**
- **E-commerce UIs**
- **Component libraries**
- **Prototyping and MVPs**
- **Anywhere speed, design consistency, and developer ergonomics are important**

---

## Common Mistakes to Avoid

### 1. **Using Tailwind without Purging Unused Styles**
Tailwind generates a huge CSS file by default. Always use the `content` array in `tailwind.config.js` to purge unused classes:

```js
content: ['./src/**/*.{js,jsx,ts,tsx,html}']
```

### 2. **Overusing Utility Classes**
Don’t cram dozens of classes into one element. Break into components or use the `@apply` directive in CSS.

```css
/* Reusable utility composition */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

### 3. **Ignoring Design Principles**
Tailwind doesn’t enforce good design. You still need to understand layout, spacing, and accessibility.

### 4. **Wrong `content` Path**
If Tailwind isn’t working, check the `content` paths. If Tailwind doesn’t know where your files are, it won’t generate styles.

### 5. **Mixing Tailwind and Traditional CSS Indiscriminately**
Try not to mix too much custom CSS unless necessary. Tailwind works best when used consistently.

---

## Summary

| Feature        | Tailwind CSS                   |
|----------------|--------------------------------|
| Style Method   | Utility-first                  |
| Performance    | Fast with proper purging       |
| Customization  | Easily extendable              |
| Best Use Cases | UIs, prototypes, design systems|
| Learning Curve | Steep at first, fast afterward |

---

## Useful Links

- Tailwind CSS Docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Tailwind UI (paid components): [https://tailwindui.com](https://tailwindui.com)
- Heroicons (icons by Tailwind team): [https://heroicons.com](https://heroicons.com)

