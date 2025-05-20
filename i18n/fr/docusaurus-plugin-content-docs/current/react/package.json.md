---
title: Package.json file
sidebar_position: 1
tags:
  - package.json
---

# Comprendre `package.json` dans les projets Node.js / JavaScript

Le fichier `package.json` est le fichier central d’un projet Node.js ou JavaScript. Il contient les **métadonnées** du projet, les **scripts**, les **dépendances** et d’autres **configurations** utilisées par des outils comme `npm` ou `yarn`.

---

## Objectif de `package.json`

- Décrit le projet (nom, version, description, etc.)
- Liste les bibliothèques nécessaires au fonctionnement du projet
- Définit des scripts pour automatiser les tâches (build, test, démarrage, etc.)
- Permet la reproduction et le partage du projet
- Fournit des configurations pour les outils de développement (linter, bundler, test)

---

## Structure de base

Voici un exemple classique de fichier `package.json` :

```json
{
  "name": "mon-projet",
  "version": "1.0.0",
  "description": "Un projet JavaScript exemple",
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
  "author": "Votre Nom",
  "license": "MIT"
}
```

---

## Explication des champs principaux

### `name`
- Le nom du projet ou du paquet.
- Doit être en minuscules et compatible avec les URLs si publié sur npm.

### `version`
- La version actuelle du projet.
- Suit le [versionnage sémantique](https://semver.org/lang/fr/): `MAJEUR.MINEUR.CORRECTIF`.

### `description`
- Une courte description du projet.

### `main`
- Le fichier d’entrée lorsque le projet est utilisé comme module.

### `scripts`
- Commandes personnalisées pouvant être exécutées avec `npm run` ou `yarn`.
- Exemple :
  - `npm run start` → exécute `node index.js`
  - `npm run build` → lance la compilation

### `dependencies`
- Bibliothèques nécessaires pour exécuter l’application.
- Installées automatiquement avec `npm install`.

### `devDependencies`
- Outils nécessaires uniquement pendant le développement (non requis en production).
- Exemples : outils de test, linters, bundlers.

### `keywords`
- Mots-clés utiles pour référencer le projet sur npm.

### `author`
- Nom de l’auteur du projet.

### `license`
- Type de licence open source (ex: `MIT`, `ISC`, etc.)

---

## Champs supplémentaires courants

### `type`
- Définit le type de module : `"module"` pour les modules ES ou `"commonjs"` pour les anciens modules Node.
  ```json
  "type": "module"
  ```

### `engines`
- Indique les versions de Node.js ou npm requises.
  ```json
  "engines": {
    "node": ">=16.0.0"
  }
  ```

### `peerDependencies`
- Dépendances attendues par le projet mais fournies par l’environnement hôte.

### `optionalDependencies`
- Dépendances optionnelles, non critiques.

### `private`
- Empêche la publication accidentelle sur le registre npm.
  ```json
  "private": true
  ```

---

## Erreurs courantes

- Oublier de mettre à jour la version.
- Ajouter des outils de développement dans `dependencies` au lieu de `devDependencies`.
- Erreurs de structure JSON (virgule manquante, accolade oubliée, etc.).
- Mauvaise gestion des scripts (noms peu clairs, commandes non fonctionnelles).
- Oublier de rendre le projet privé quand il ne doit pas être publié.

---

## Résumé des champs importants

| Champ               | Description                                       |
|---------------------|---------------------------------------------------|
| `name`              | Nom du projet ou du paquet                        |
| `version`           | Version du projet (suivant SemVer)               |
| `scripts`           | Commandes automatisées pour développement         |
| `dependencies`      | Bibliothèques nécessaires à l’exécution           |
| `devDependencies`   | Outils nécessaires uniquement au développement     |
| `main`              | Fichier d’entrée du module                        |
| `license`           | Licence open source du projet                     |

---

## Ressources utiles

- Documentation officielle npm : [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
- Semantic Versioning (SemVer) : [https://semver.org/lang/fr/](https://semver.org/lang/fr/)
