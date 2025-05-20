---
title: Fichier Astro
sidebar_position: 1
tags:
  - astro
---

# Fichier de Configuration Astro (`astro.config.mjs`)

Le fichier `astro.config.mjs` est le fichier principal de configuration d’un projet Astro. Il détermine comment Astro doit se comporter pendant le développement et lors de la génération du site. Ce fichier est écrit en JavaScript avec l’extension `.mjs` (pour utiliser la syntaxe des modules ES).

## Exemple de Base

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

## Explication des Champs

### `defineConfig()`
Une fonction utilitaire fournie par Astro pour bénéficier de l’auto-complétion et d’une meilleure expérience avec les éditeurs de code.

### `integrations`
Une liste d’intégrations Astro (plugins). Ici, on active React pour pouvoir utiliser des composants React dans les fichiers `.astro`.

### `site`
L’URL canonique du site. Elle est utilisée pour générer correctement les liens dans les sitemaps, flux RSS, balises meta, etc.

### `outDir`
Le répertoire de sortie où sera généré le site après build (par défaut : `dist`).

### `base`
Le chemin de base du site. Utile si le site est hébergé dans un sous-dossier (ex : GitHub Pages).

### `build`
Permet de personnaliser le processus de build :
- `format: 'directory'` signifie que chaque page est générée dans un dossier avec un fichier `index.html` (ex : `/about/index.html`).

## Utilisation avec React

Même si vous construisez principalement une application React, Astro peut être utilisé pour :
- Générer statiquement certaines pages (SSG) tout en intégrant React.
- Faire une transition vers Astro ou depuis Astro.
- Combiner des pages orientées contenu (blog, documentation) avec une architecture SPA ou MPA.

## Champs Optionnels Fréquents

### `vite`
Permet de passer une configuration personnalisée à Vite (le bundler utilisé par Astro).

```js
vite: {
  server: {
    port: 3000,
  },
},
```

### `markdown`
Contrôle le rendu du Markdown.

```js
markdown: {
  syntaxHighlight: 'prism',
}
```

---

Si votre application est principalement un SPA React, la présence de `astro.config.mjs` indique probablement qu’Astro sert de méta-framework autour de votre code React, pour générer les pages statiquement ou combiner des parties dynamiques et statiques.

Documentation officielle : [Référence de configuration Astro (FR)](https://docs.astro.build/fr/reference/configuration/)
