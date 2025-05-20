---
title: Package.json file
sidebar_position: 1
tags:
  - package.json
---

# Understanding `package.json` in Node.js / JavaScript Projects

The `package.json` file is the core descriptor of a Node.js (or JavaScript-based) project. It contains metadata about the project, scripts, dependencies, and other configurations that tools like npm and yarn use to manage and run the application.

---

## Purpose of `package.json`

- Describes the project (name, version, description, etc.)
- Lists all packages the project depends on
- Specifies scripts to automate tasks (build, test, start, etc.)
- Enables reproducibility and sharing of the project
- Provides configuration for tools like linters, bundlers, and compilers

---

## Basic Structure

Here is a typical `package.json` file:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample JavaScript project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "vite",
    "build": "vite build",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "jest": "^29.0.0"
  },
  "keywords": ["javascript", "node", "react"],
  "author": "Your Name",
  "license": "MIT"
}
```

---

## Key Fields Explained

### `name`
- The name of your project or package.
- Must be lowercase and URL-safe if published to npm.

### `version`
- The current version of your project.
- Follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

### `description`
- A short summary of your project.

### `main`
- The entry point to your application when it is required as a module.

### `scripts`
- Defines command-line scripts that can be run with `npm run` or `yarn`.
- Example:
  - `npm run start` → runs `node index.js`
  - `npm run build` → runs the build process

### `dependencies`
- Lists packages required for the project to run.
- These packages will be installed when someone runs `npm install`.

### `devDependencies`
- Packages needed only during development (not in production).
- Examples: testing libraries, bundlers, linters.

### `keywords`
- An array of strings that help people find your package on npm.

### `author`
- Name of the author of the package.

### `license`
- Type of license (e.g., `MIT`, `ISC`, etc.)

---

## Other Common Fields

### `type`
- Defines module type: `"module"` for ES modules, or `"commonjs"` for CommonJS.
  ```json
  "type": "module"
  ```

### `engines`
- Specifies Node.js or npm version requirements.
  ```json
  "engines": {
    "node": ">=16.0.0"
  }
  ```

### `peerDependencies`
- Used when your package expects the host project to provide certain dependencies.

### `optionalDependencies`
- Dependencies that are not required but used if available.

### `private`
- Prevents the package from being accidentally published to npm.
  ```json
  "private": true
  ```

---

## Common Mistakes

- Forgetting to update the `version` field.
- Adding development tools under `dependencies` instead of `devDependencies`.
- Incorrectly structured JSON (missing commas or braces).
- Not keeping `scripts` consistent or meaningful.
- Publishing sensitive or private packages without setting `"private": true`.

---

## Summary

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| `name`            | Project/package name                            |
| `version`         | Project version using semantic versioning       |
| `scripts`         | Automation commands for development lifecycle   |
| `dependencies`    | Runtime libraries the app needs                 |
| `devDependencies` | Build/test tools needed only for development    |
| `main`            | Entry file of the app/module                    |
| `license`         | Open source license type                        |

---

## Resources

- Official npm Docs: [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
- Semantic Versioning: [https://semver.org](https://semver.org)
