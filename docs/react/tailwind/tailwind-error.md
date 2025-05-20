---
title: Tailwind init error
sidebar_position: 3
tags:
  - tailwindcss
---

# Tailwind CSS `npx tailwindcss init` Error and Fix (Windows + npm)

When trying to initialize Tailwind CSS with the following command:

~~~bash
npx tailwindcss init
~~~

You might encounter this error:

~~~bash
npm error could not determine executable to run
npm error A complete log of this run can be found in: C:\Users\<username>\AppData\Local\npm-cache\_logs\...
~~~

---

### Root Cause

This error typically happens when using **Tailwind CSS v4 or later**, installed via:

~~~bash
npm install -D tailwindcss
~~~

In **Tailwind CSS v4+**, the package no longer includes the CLI binary (`tailwindcss`) inside `node_modules/.bin`. Instead, the official Tailwind team recommends using a **standalone binary**, which you manually download.

As a result:

- `npx tailwindcss init` fails, because `npx` cannot find an executable to run.
- Even running `.\\node_modules\\.bin\\tailwindcss` fails, because it doesn't exist in the local install.

---

### Solution: Use Tailwind CSS v3 (which includes the CLI)

To make `npx tailwindcss init` work like before, you can downgrade to Tailwind v3, which **does include** the CLI in the npm package.

---

### Step-by-Step Instructions

~~~bash
# Step 1: Clean your project
rd /s /q node_modules
del package-lock.json

# Step 2: Install Tailwind CSS v3 with CLI
npm install -D tailwindcss@3 postcss autoprefixer

# Step 3: Initialize Tailwind config (this will now work)
npx tailwindcss init
~~~

After this, you will have a working `tailwind.config.js` file in your project root, and the Tailwind CLI will be available under `node_modules/.bin`.

---

### Notes

- This is a good approach if you want to stick with npm-managed installs and avoid managing external CLI binaries.
- If you later decide to upgrade to Tailwind v4+, you will need to manually install the **[standalone CLI](https://tailwindcss.com/blog/standalone-cli)** or set up Tailwind via a build tool like Vite, PostCSS, or Webpack.

