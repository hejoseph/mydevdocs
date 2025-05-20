---
title: Vite
sidebar_position: 1
tags:
  - vite
---

# Pourquoi Vite est utilisé lors de la construction d'une application React

[Vite](https://vitejs.dev/) est un **bundler de projet moderne** qui est souvent utilisé pour construire des applications React (et d'autres frameworks modernes comme Vue, Svelte, Astro, etc.). Il a été créé pour offrir une **expérience de développement rapide**, une **build ultra-rapide** et une **configuration simple**.

## Pourquoi utiliser Vite avec React ?

### 1. Démarrage du serveur de développement ultra-rapide
Vite utilise **ES Modules natifs** dans le navigateur pour éviter de pré-compiler tout le projet au lancement.

```js
// En comparaison, Webpack doit tout bundle avant de démarrer
```

### 2. Rechargement instantané (HMR - Hot Module Replacement)
Lors de la modification d'un fichier React, Vite ne recharge **que ce fichier** au lieu de rebundler toute l'application.

```js
// Les composants React sont mis à jour en temps réel sans recharger toute la page
```

### 3. Configuration simple
Avec `vite.config.js`, la configuration est minimale et intuitive :

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### 4. Support intégré de JSX, TypeScript, CSS Modules, etc.
Pas besoin d'installer et configurer manuellement Babel, TypeScript ou PostCSS — Vite s’en charge.

### 5. Build de production rapide
Vite utilise **Rollup** sous le capot pour la production, offrant une sortie optimisée et minifiée.

```bash
vite build
```

## Exemple d'utilisation avec React

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

Cela génère un projet React prêt à l’emploi avec :
- Vite comme bundler
- React + JSX
- HMR et dev server intégrés

## Conclusion

Vite est devenu un choix de plus en plus populaire pour les développeurs React, car il combine :
- Des **temps de démarrage et de mise à jour ultra-rapides**
- Une **configuration simplifiée**
- Une **intégration fluide avec React et TypeScript**

C’est pourquoi de nombreux frameworks (y compris Astro, Next.js en mode expérimental, SvelteKit, etc.) l’adoptent en interne.

Pour en savoir plus : [https://vitejs.dev/](https://vitejs.dev/)
