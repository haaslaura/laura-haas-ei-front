# Site Web - Développeuse Web Indépendante

Ce projet est le site vitrine de mon activité de création de sites web, développé avec **React** et **Vite**, en utilisant **React Router** pour la navigation.

## 📌 Objectif

Ce site a pour objectif de :

- Présenter mes offres de manière claire
- S’adresser à plusieurs profils clients via des pages dédiées
- Instaurer confiance, pédagogie et crédibilité

## 🔧 Stack technique

React
Vite
Tailwind CSS
React Router

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## 📁 Arborescence du projet

```bash
src/
├── assets/                         # Images, SVGs, logos, icônes
├── components/                     # Composants réutilisables (ex: CardSection, Hero, Stage...)
├── layouts/
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── ProjectStarter.jsx            # Landing page "Vous lancez votre activité ?"
│ ├── IndependentPro.jsx            # Landing page "Votre site ne vous ressemble plus ?"
│ ├── SmallBusiness.jsx             # Landing page "Votre entreprise locale mérite mieux ?"
│ ├── NotFound.jsx
│ ├── LegalInfo.jsx
├── services/                       # Services (futurs appels API, formulaire, email, etc.)
├── utils/                          # Fonctions utilitaires (ex: formatDate, scrollToTop)
├── App.jsx                         # Configuration des routes
├── Index.jsx                       # Point d'entrée principal
├── styles/
│ ├── index.css                     # Tailwind
```