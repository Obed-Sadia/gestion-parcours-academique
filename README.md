# Gestionnaire de Parcours Académique (Node.js, Express, SQLite)

**Statut du projet :** Projet de cours

> Application web full-stack permettant aux étudiants de suivre leur progression académique, gérer leurs cours, notes et objectifs. Le projet est composé d'une API RESTful (backend) et d'une interface dynamique en JavaScript (frontend).

---

### 📺 Démonstration Visuelle

Ce projet n'étant pas déployé, voici une démonstration animée du parcours utilisateur principal

![Démonstration du Gestionnaire de Parcours](_docs/demo-parcours.gif)

---

### 📋 Table des Matières

1.  [Problématique & Solution](#problématique--solution)
2.  [Fonctionnalités Clés](#fonctionnalités-clés)
3.  [Stack Technique](#stack-technique)
4.  [Installation & Lancement](#installation--lancement)
5.  [Structure de l'API](#structure-de-lapi)

---

### 🎯 Problématique & Solution

**Le Problème :** Les étudiants peinent à avoir une vision claire de leur progression académique. Le suivi des cours, la simulation des notes et la planification des objectifs sont souvent éclatés entre des fichiers Excel et des portails universitaires peu flexibles.

**Ma Solution :** J'ai développé une application web full-stack complète. Le cœur du système est une API RESTful sécurisée construite avec Node.js et **Express.
* **Backend :** L'API gère toutes les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les cours, les notes et les objectifs. La persistance des données est assurée par une base de données SQLite.
* **Sécurité :** L'accès aux endpoints est protégé par une authentification basée sur JSON Web Tokens (JWT).
* **Frontend :** L'interface est une application "single-page" dynamique construite en JavaScript vanille, HTML5 et Bootstrap. Elle utilise l'API `fetch()` pour communiquer avec le backend sans recharger la page et met à jour le DOM en temps réel.

### ✨ Fonctionnalités Clés

* **Authentification Utilisateur :** Système complet d'inscription et de connexion avec JWT.
* **Gestion CRUD :** Gestion complète des cours, des notes associées et des objectifs académiques.
* **Tableau de Bord Dynamique :** Visualisation des statistiques (moyenne, crédits) et suivi en pourcentage des objectifs.
* **Interface Réactive :** Mises à jour du DOM en temps réel grâce au JavaScript vanille (pas de framework).

### 🛠️ Stack Technique

| Domaine | Technologie |
| :--- | :--- |
| **Backend** | Node.js, Express  |
| **Frontend** | JavaScript (ES6+ Vanille), HTML5, CSS3, Bootstrap  |
| **Base de Données** | SQLite  |
| **Authentification** | JWT (JSON Web Tokens) |

### 🚀 Installation & Lancement


**Instructions pour le Backend :**

1.  Clonez ce dépôt :
    ```bash
    git clone https://github.com/Obed-Sadia/gestion-parcours-academique.git
    cd gestion-parcours-academique
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Lancez le serveur :
    ```bash
    npm start
    ```
    Le serveur tourne sur `http://localhost:3000`.


