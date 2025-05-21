# Différence entre `export default` et `module.exports = {}`

En JavaScript, notamment avec Node.js et les outils front-end (Webpack, Babel, etc.), on rencontre deux systèmes de modules principaux :

1. **CommonJS (CJS)** – utilisé principalement dans Node.js.
2. **ES Modules (ESM)** – le système de modules moderne, pris en charge nativement par les navigateurs récents et les versions modernes de Node.js.

## Comparaison de syntaxe

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
// config.mjs ou config.js (avec "type": "module" dans package.json)
export default {
  port: 3000,
  db: 'mongo'
};
```

## Principales différences

| Fonctionnalité         | `module.exports` (CommonJS)             | `export default` (ESM)                   |
|------------------------|------------------------------------------|------------------------------------------|
| Système de modules     | CommonJS                                 | ES Modules                               |
| Moment d’exécution     | Synchrone                                 | Asynchrone                               |
| Extension de fichier   | `.cjs` ou `.js` (par défaut dans Node)   | `.mjs` ou `.js` (si `"type": "module"`) |
| Support de `require()` | Oui                                       | Non                                     |
| Support de `import`    | Non                                       | Oui                                     |

## Quand utiliser chaque option

### Utilisez `module.exports` lorsque :
- Vous écrivez du code pour Node.js en environnement CommonJS.
- Vous ou vos dépendances utilisez `require()`.
- Vous ne définissez pas `"type": "module"` dans votre `package.json`.

### Utilisez `export default` lorsque :
- Vous écrivez du code moderne pour des environnements compatibles ESM (navigateurs, Deno, Node.js ESM).
- Vous avez `"type": "module"` dans votre `package.json`.
- Vous utilisez des outils comme Babel, Webpack ou TypeScript qui prennent en charge ESM.

## Pour les fichiers de configuration

### Utilisez `module.exports` si :
- L’outil utilisé (Webpack, ESLint, Mocha…) attend un format CommonJS.
  ```js
  // webpack.config.js
  module.exports = {
    entry: './src/index.js'
  };
  ```

### Utilisez `export default` si :
- L’outil supporte ou attend explicitement le format ESM.
- Vous utilisez des fichiers `.mjs` ou avez activé `"type": "module"`.

  ```js
  // vite.config.js
  export default {
    root: './src'
  };
  ```

## Quand **ne pas** utiliser l’un ou l’autre

- **N’utilisez pas `export default` dans un environnement uniquement CommonJS** – cela provoquera une erreur de syntaxe ou un échec à l’importation.
- **N’utilisez pas `module.exports` dans un projet ESM** – cela peut provoquer des problèmes de compatibilité ou nécessiter des contournements (`createRequire()` par exemple).

## Résumé

Faites votre choix en fonction de :
- L’environnement cible (Node.js vs Navigateur)
- Les exigences de vos outils
- La configuration du système de modules

Évitez de mélanger ESM et CommonJS autant que possible pour prévenir les bugs subtils et les problèmes de compatibilité.

