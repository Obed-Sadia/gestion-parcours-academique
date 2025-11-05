# Gestionnaire de Parcours Académique (Node.js, Express, SQLite)

**Statut du projet :** Projet de cours

> [cite_start]Application web full-stack permettant aux étudiants de suivre leur progression académique, gérer leurs cours, notes et objectifs[cite: 3]. Le projet est composé d'une API RESTful (backend) et d'une interface dynamique en JavaScript (frontend).

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

**Le Problème :** Les étudiants peinent à avoir une vision claire de leur progression académique. [cite_start]Le suivi des cours, la simulation des notes et la planification des objectifs sont souvent éclatés entre des fichiers Excel et des portails universitaires peu flexibles[cite: 4].

**Ma Solution :** J'ai développé une application web full-stack complète. [cite_start]Le cœur du système est une **API RESTful sécurisée** construite avec **Node.js** et **Express**[cite: 24].
* [cite_start]**Backend :** L'API gère toutes les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les cours, les notes et les objectifs[cite: 27]. [cite_start]La persistance des données est assurée par une base de données **SQLite**[cite: 25].
* [cite_start]**Sécurité :** L'accès aux endpoints est protégé par une authentification basée sur **JSON Web Tokens (JWT)**[cite: 28].
* [cite_start]**Frontend :** L'interface est une application "single-page" dynamique construite en **JavaScript vanille**, HTML5 et Bootstrap[cite: 17, 18]. [cite_start]Elle utilise l'API `fetch()` pour communiquer avec le backend sans recharger la page et met à jour le DOM en temps réel[cite: 20, 21].

### ✨ Fonctionnalités Clés

* [cite_start]**Authentification Utilisateur :** Système complet d'inscription et de connexion avec JWT[cite: 6, 28].
* [cite_start]**Gestion CRUD :** Gestion complète des cours, des notes associées et des objectifs académiques[cite: 8, 10, 27].
* [cite_start]**Tableau de Bord Dynamique :** Visualisation des statistiques (moyenne, crédits) et suivi en pourcentage des objectifs[cite: 7, 12].
* [cite_start]**Interface Réactive :** Mises à jour du DOM en temps réel grâce au JavaScript vanille (pas de framework)[cite: 20].

### 🛠️ Stack Technique

| Domaine | Technologie |
| :--- | :--- |
| **Backend** | [cite_start]Node.js, Express [cite: 24] |
| **Frontend** | [cite_start]JavaScript (ES6+ Vanille), HTML5, CSS3, Bootstrap [cite: 17, 18] |
| **Base de Données** | [cite_start]SQLite [cite: 25] |
| **Authentification** | [cite_start]JWT (JSON Web Tokens) [cite: 28] |

### 🚀 Installation & Lancement


**Instructions pour le Backend :**

1.  Clonez ce dépôt :
    ```bash
    git clone [URL_DE_VOTRE_REPO]
    cd [NOM_DU_DOSSIER]
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


