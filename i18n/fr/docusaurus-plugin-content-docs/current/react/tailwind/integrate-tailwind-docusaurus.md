---
title: Tailwind with docusaurus
sidebar_position: 2
tags:
  - tailwindcss
---
# Intégration de Tailwind CSS avec Docusaurus

## Étape 1 : Installation de Tailwind CSS et ses dépendances

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**Pourquoi c'est nécessaire :**
- `tailwindcss` : La librairie principale de Tailwind CSS qui génère les classes utilitaires
- `postcss` : Requis pour le traitement du CSS de Tailwind (Tailwind est un plugin PostCSS)
- `autoprefixer` : Ajoute les préfixes vendeurs aux règles CSS pour une meilleure compatibilité navigateur
- `npx tailwindcss init` : Crée un fichier de configuration par défaut (`tailwind.config.js`) pour personnaliser Tailwind

## Étape 2 : Configuration de Tailwind CSS

Le fichier `tailwind.config.js` indique à Tailwind où chercher les classes utilisées :

```javascript
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './docs/**/*.{md,mdx}',
  './blog/**/*.{md,mdx}',
  './static/**/*.html',
  './docusaurus.config.js',
]
```

**Pourquoi c'est important :**
- Tailwind scanne ces fichiers pour trouver les classes à générer
- Sans les bons chemins, vos classes utilitaires ne fonctionneront pas
- On inclut les fichiers JS/TS, MD/MDX et HTML pour couvrir tout le contenu Docusaurus

## Étape 3 : Création de la configuration PostCSS

`postcss.config.js` configure le pipeline de traitement CSS :

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Pourquoi c'est nécessaire :**
- PostCSS doit savoir quels plugins utiliser
- L'ordre compte : Tailwind s'exécute d'abord, puis autoprefixer
- Docusaurus utilise déjà PostCSS en interne, ceci l'étend simplement

## Étape 4 : Ajout des directives Tailwind

Dans votre fichier CSS principal (`src/css/custom.css`) :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Ce que cela fait :**
- `@tailwind base` : Ajoute les styles de base de Tailwind (normalize.css + styles basiques)
- `@tailwind components` : Ajoute les classes de composants (comme .btn, .card)
- `@tailwind utilities` : Génère toutes les classes utilitaires (la partie la plus importante)

## Étape 5 : Mise à jour de la configuration Docusaurus

Le plugin dans `docusaurus.config.js` :

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

**Pourquoi c'est critique :**
- Docusaurus a sa propre configuration PostCSS
- Ce plugin garantit que Tailwind est ajouté à ce pipeline
- Sans cela, Docusaurus ignorerait le traitement de Tailwind

## Étape 6 : Purge des styles inutilisés (Optionnel)

L'option `purge` dans Tailwind v2 (appelée `content` dans v3+) :

```javascript
purge: [
  './src/**/*.{js,jsx,ts,tsx}',
  // ... autres chemins
]
```

**Objectif :**
- En production, supprime les classes CSS inutilisées
- Réduit significativement la taille du fichier CSS final
- Ne scanne que les fichiers correspondant à ces motifs

## Étape 7 : Utilisation de Tailwind dans les composants

Exemple d'utilisation dans un composant :

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
```

**Points clés :**
- Utilisez `className` au lieu de `class` dans les composants React
- Les classes utilitaires fonctionnent comme en HTML
- Fonctionne dans les composants React et les fichiers MDX

## Notes importantes

1. **Processus de build** : Tailwind fonctionne pendant le build, pas au runtime
2. **Détection des classes** : Seules les classes trouvées dans vos fichiers de contenu seront générées
3. **Conflits CSS** : Les styles de base de Tailwind peuvent entrer en conflit avec Docusaurus - des ajustements peuvent être nécessaires
4. **Mode sombre** : Le mode sombre de Tailwind peut fonctionner avec le système de thème de Docusaurus
5. **Redémarrage nécessaire** : Après des changements de configuration, redémarrez votre serveur de développement
