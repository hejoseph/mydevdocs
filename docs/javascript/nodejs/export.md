# Difference Between `export default` and `module.exports = {}`

In JavaScript, especially in Node.js and front-end tooling (e.g., Webpack, Babel), you’ll encounter two main module systems:

1. **CommonJS (CJS)** – used primarily in Node.js.
2. **ES Modules (ESM)** – modern JavaScript module system, supported natively in modern browsers and in recent versions of Node.js.

## Syntax Comparison

### CommonJS
```js
// config.cjs
module.exports = {
  port: 3000,
  db: 'mongo'
};
```

### ES Modules
```js
// config.mjs or config.js (with "type": "module" in package.json)
export default {
  port: 3000,
  db: 'mongo'
};
```

## Key Differences

| Feature               | `module.exports` (CommonJS)           | `export default` (ESM)                  |
|-----------------------|----------------------------------------|------------------------------------------|
| Module System         | CommonJS                               | ES Modules                               |
| Execution Timing      | Synchronous                            | Asynchronous                             |
| File Extension        | `.cjs` or `.js` (default in Node)      | `.mjs` or `.js` (if `"type": "module"`) |
| `require()` Support   | Yes                                     | No (must use `import`)                  |
| `import` Support      | No (use `require()`)                   | Yes                                     |

## When to Use Each

### Use `module.exports` when:
- You're writing Node.js code targeting environments that default to CommonJS.
- You or your dependencies rely on `require()`.
- You're not using `"type": "module"` in your `package.json`.

### Use `export default` when:
- You are writing modern JavaScript meant to run in ESM-compatible environments (e.g., modern browsers, Deno, Node.js with ESM).
- You have `"type": "module"` in your `package.json`.
- You're using tools like Babel, Webpack, or TypeScript that support ESM.

## On Config Files

### Use `module.exports` in config files if:
- The tools reading them (e.g., Webpack, ESLint, Mocha) expect CommonJS format.
  ```js
  // webpack.config.js
  module.exports = {
    entry: './src/index.js'
  };
  ```

### Use `export default` in config files if:
- The tool explicitly supports or expects ESM.
- You're using `.mjs` files or have `"type": "module"` set.

  ```js
  // vite.config.js
  export default {
    root: './src'
  };
  ```

## When You Should Not Use One Over the Other

- **Don’t use `export default` in CommonJS-only environments** – it will throw a syntax error or import failure.
- **Don’t use `module.exports` in ESM projects with `import` statements** – it can cause interoperability issues or require extra effort (e.g., `createRequire()`).

## Summary

Choose based on:
- Target environment (Node.js vs Browser)
- Toolchain requirements
- Module system configuration

Mixing ESM and CommonJS can lead to subtle bugs and compatibility issues, so align your module style with your project's architecture and tooling.

