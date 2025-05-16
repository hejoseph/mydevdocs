---
title: Garbage Collection
sidebar_position: 1
tags:
  - java
  - optimization
  - garbage collection
---


## Garbage Collection (GC) dans la JVM – Optimisation et Configuration

## Objectif

Réduire les pauses du GC (garbage collection) dans les applications Java en choisissant un collecteur adapté (G1, ZGC, Shenandoah), et en configurant la JVM pour maintenir un bon équilibre entre latence, débit et consommation mémoire.

---

## Qu'est-ce que le Garbage Collection ?

Le Garbage Collector est un mécanisme de la JVM qui :
- Identifie les objets inutilisés (non référencés)
- Libère la mémoire occupée
- Peut provoquer des pauses si mal configuré (impact direct sur la latence)

---

## Pourquoi c'est critique pour la performance ?

Dans les systèmes :
- temps réel (jeux, finances)
- haute charge (web, microservices)
- à faible latence (Kafka, base de données, batch)

Un GC mal configuré peut :
- Créer des pauses "stop-the-world" (jusqu’à plusieurs secondes)
- Provoquer des pics CPU
- Dégrader la réactivité utilisateur

---

## Types de Collecteurs de Garbage Collection

| Collecteur | Depuis | Avantages | Inconvénients | Quand l’utiliser |
|------------|--------|-----------|----------------|------------------|
| Serial GC | Java 1.2 | Simple | Pauses longues | Petites applications |
| Parallel GC | Java 1.4 | Bon débit | Pauses longues | Batch/serveurs |
| G1 GC | Java 9 (par défaut) | Pauses prévisibles, bon compromis | Pas idéal pour très faible latence | Applications web, APIs |
| ZGC | Java 11+ | Pauses < 10 ms, scalable | Moins de tuning disponible | Très faible latence |
| Shenandoah | Java 12+ (Red Hat) | Similaire à ZGC | Moins portable | Faible latence avec HotSpot |

---

## Comment choisir le bon GC

| Besoin | Collecteur recommandé |
|--------|------------------------|
| Stabilité et facilité de configuration | G1 GC |
| Ultra faible latence (`<10 ms`) | ZGC ou Shenandoah |
| Débit maximal (batch processing) | Parallel GC |

---

## Configuration JVM recommandée

### G1 GC (bon compromis entre latence et débit)

```bash
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200
-XX:InitiatingHeapOccupancyPercent=45
-XX:+ParallelRefProcEnabled
-Xms2g -Xmx4g
```

- MaxGCPauseMillis : cible de durée maximale de pause
- InitiatingHeapOccupancyPercent : seuil de déclenchement du GC

### ZGC (ultra faible latence)

```bash
-XX:+UseZGC
-Xmx4g -Xms4g
```

- Idéal pour les systèmes sensibles à la latence (finance, streaming)
- Requiert Java 11+

---

## Outils de monitoring recommandés

| Outil                      | Utilisation                                    |
| -------------------------- | ---------------------------------------------- |
| JVisualVM / JConsole       | Visualisation des pauses GC et des générations |
| Logs GC (`-Xlog:gc*`)      | Analyse détaillée des cycles de GC             |
| Java Flight Recorder (JFR) | Profilage détaillé de la JVM                   |
| Prometheus + Grafana       | Monitoring en temps réel des métriques JVM     |

---

## Mauvaises pratiques à éviter

| Mauvaise pratique                   | Conséquence                                          |
| ----------------------------------- | ---------------------------------------------------- |
| Ignorer les logs GC                 | Comportement du GC non observable                    |
| Utiliser un GC inadapté au contexte | Longues pauses, performances imprévisibles           |
| Mauvais dimensionnement du heap     | Trop petit → GC fréquent, trop grand → temps de scan |
| Trop d’allocations éphémères        | Surcharge des GC mineurs                             |
| Utilisation de `finalize()`         | Ralentit le GC, méthode obsolète                     |

---

## Exemple métier

### Cas : Application de génération de PDF en ligne
- Problème : Pic d’objets temporaires (~100 MB par génération)
- Effet : GC fréquent, pauses visibles côté utilisateur
- Solution :
	- Passage à G1 GC
	- -XX:MaxGCPauseMillis=150
	- Réduction des allocations temporaires (réutilisation de buffers)
	- Mise en place de Prometheus + Grafana pour suivi JVM

--- 

## Pour aller plus loin
- [JEP 333: ZGC](https://openjdk.org/jeps/333)
- [JEP 318: Epsilon GC (sans GC, pour tests)](https://openjdk.org/jeps/318)
- [JVM GC Tuning Guide - Oracle](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html)

---

## Résumé
- Le Garbage Collector est essentiel à la stabilité de la JVM
- Le choix du GC dépend de ton objectif (latence ou débit)
- G1 GC est un bon choix par défaut
- ZGC ou Shenandoah conviennent aux systèmes à latence très faible
- Toujours monitorer les cycles de GC en production