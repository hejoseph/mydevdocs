---
title: Tailwind CSS
sidebar_position: 1
tags:
  - tailwindcss
---


# Intro Tailwind CSS

## Qu'est-ce que Tailwind CSS ?

[Tailwind CSS](https://tailwindcss.com) est un **framework CSS utilitaire** qui fournit des classes de bas niveau pour construire des interfaces personnalisées sans écrire de CSS personnalisé.

Au lieu d’écrire du CSS traditionnel comme ceci :

```css
.button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
```

On utilise des classes utilitaires directement dans le HTML/JSX :

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded">Click me</button>
```

Tailwind fournit des blocs de construction plutôt que des composants prédéfinis.

---

## Quand utiliser Tailwind CSS

- Pour des applications web modernes nécessitant un développement rapide de l'interface.
- Pour créer des **design systems** cohérents et maintenables.
- Dans des projets utilisant **React, Vue, Angular, Svelte, Astro**, ou du HTML pur.
- Lorsqu'on souhaite éviter les allers-retours entre CSS et JSX/HTML.
- Pour les développeurs qui privilégient une approche par composition.

---

## Pourquoi utiliser Tailwind CSS

### Développement plus rapide
Pas besoin d’écrire du CSS personnalisé ; les styles sont appliqués directement via des classes.

### Pas de conflit de noms
Inutile de nommer les classes (comme `.card-title` ou `.button-primary`).

### Cohérence
Tailwind impose une cohérence dans l'espacement, les couleurs, la typographie, etc., grâce à un thème configurable.

### Personnalisation facile
Le thème peut être modifié ou étendu dans `tailwind.config.js`.

### Responsive design simplifié
Des préfixes (`sm:`, `md:`, `lg:`) permettent d’adapter facilement le design à tous les écrans.

```html
<div class="text-center md:text-left">Texte responsive</div>
```

---

## Comment utiliser Tailwind CSS

### Installation dans un projet React (avec Vite)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configuration dans `tailwind.config.js`

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Ajouter les directives dans un fichier CSS

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Utilisation dans les composants

```jsx
<div className="bg-gray-100 text-lg font-semibold p-4 rounded shadow">
  Bonjour Tailwind
</div>
```

---

## Où utiliser Tailwind CSS

- Interfaces d’administration (dashboards)
- Blogs et sites marketing
- Interfaces e-commerce
- Librairies de composants UI
- Prototypes et MVP
- Partout où la rapidité, la cohérence et la personnalisation de l’interface sont essentielles

---

## Erreurs fréquentes à éviter

### Ne pas configurer le "purge" des classes inutilisées
Tailwind génère un gros fichier CSS par défaut. Il faut configurer correctement le champ `content` :

```js
content: ['./src/**/*.{js,jsx,ts,tsx,html}']
```

### Trop de classes utilitaires dans un seul élément
Si une balise contient trop de classes, pensez à créer un composant ou à utiliser `@apply` :

```css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

### Ignorer les bonnes pratiques de design
Tailwind ne garantit pas un bon design — vous devez connaître les bases de la mise en page, des couleurs, de l’accessibilité, etc.

### Mauvais chemin dans `content`
Si Tailwind ne fonctionne pas, vérifiez que les chemins dans le champ `content` correspondent bien à vos fichiers.

### Mélanger trop de CSS personnalisé avec Tailwind
Tailwind fonctionne mieux quand il est utilisé de façon cohérente, sans trop mélanger avec du CSS traditionnel.

---

## Résumé

| Élément            | Description                       |
|--------------------|-----------------------------------|
| Méthode de style   | Basée sur les utilitaires         |
| Performance        | Très rapide avec purge activée    |
| Personnalisation   | Facile à étendre                  |
| Cas d'usage        | UI, prototypes, design systems    |
| Courbe d'apprentissage | Un peu raide au début, mais efficace ensuite |

---

## Liens utiles

- Documentation officielle : [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Composants premium : [https://tailwindui.com](https://tailwindui.com)
- Icônes Tailwind : [https://heroicons.com](https://heroicons.com)
