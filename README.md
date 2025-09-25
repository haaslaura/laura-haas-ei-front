# Site Web - Développeuse Web Indépendante

Ce projet est le site vitrine de mon activité de création de sites web, développé avec **React** et **Vite**, en utilisant **React Router** pour la navigation.

## 📌 Objectif

Ce site a pour objectif de :

- Présenter mes offres de manière claire
- S’adresser à plusieurs profils clients via des pages dédiées
- Instaurer confiance et crédibilité

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
├── components/
│   ├── CardSection/
│   │   ├── index.jsx
│   │   ├── SimpleCard.jsx
│   ├── ContactModal/
│   │   ├── index.jsx
│   ├── OffersSection/
│   │   ├── index.jsx
│   │   ├── OfferCard.jsx
│   ├── PortfolioSection/
│   │   ├── index.jsx
│   │   ├── PortfolioCard.jsx
│   │   ├── CardFront.jsx
│   │   ├── CardBack.jsx
│   │   ├── CardContainer.jsx
│   ├── StageSection/
│   │   ├── index.jsx
│   │   ├── Stage.jsx
│   ├── TestimonialSection/
│   │   ├── index.jsx
│   │   ├── TestimonialCarousel.jsx
│   ├── UI/
│   │   ├── ButtonDisplay.jsx
│   │   ├── LinkDisplayLikeAButton.jsx
│   │   ├── TitleAndSubDisplay.jsx
│   │   ├── ToTopButton.jsx
├── data/
│   ├── customerTestimonials.json
│   ├── portfolioCollection.json
├── hook/
│   ├── useCardFlip.js
├── layouts/
│   ├── Content.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── PageLayout.jsx
│   ├── Section.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── ProjectStarter.jsx          # Landing page pour les porteurs de projet
│   ├── IndependentPro.jsx          # Landing page pour les indépendants
│   ├── SmallBusiness.jsx           # Landing page pour les entreprises locales
│   ├── NotFound.jsx
│   ├── LegalInfo.jsx
├── store/
│   ├── useContactModal.js
├── styles/
│   ├── index.css
├── utils/
│   ├── mediaPathResolver.js
│   ├── ScrollToTop.jsx
├── App.jsx                         # Routes
├── index.jsx
```
