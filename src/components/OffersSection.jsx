import { Link } from 'react-router-dom';

const OffersSection = () => {
    return (
        <section
            id="tarifs"
            className="py-20"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Des offres claires et transparentes</h2>
                <p className="text-center text-gray-600 mb-12">Pas de surprise, vous savez où vous allez.</p>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent w-full md:w-1/3 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Pack Lancement</h3>
                        <p className="text-gray-500 mb-6">Idéal pour démarrer</p>
                        <p className="text-4xl font-bold mb-4">À partir de 1500€</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>Site vitrine 1 à 3 pages
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>Design personnalisé
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>Formulaire de contact
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>Adapté mobile &amp; tablette
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="w-full text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all"
                        >
                            Choisir ce pack
                        </a>
                    </div>

                    <div className="bg-[var(--color-dark-blue)] text-white p-8 rounded-lg shadow-lg border-2 border-[var(--color-accent)] w-full md:w-1/3 relative flex flex-col">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-dark-blue)] text-sm font-bold px-3 py-1 rounded-full">
                            LE PLUS POPULAIRE
                        </span>
                        <h3 className="text-2xl font-bold mb-2">Pack Sur-Mesure</h3>
                        <p className="text-[var(--color-slate)] mb-6">Pour un projet unique</p>
                        <p className="text-4xl font-bold mb-4">Sur Devis</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            <li className="flex items-center">
                                <span className="text-[var(--color-accent)] mr-2">✓</span>Tout du pack Lancement
                            </li>
                            <li className="flex items-center">
                                <span className="text-[var(--color-accent)] mr-2">✓</span>Nombre de pages illimité
                            </li>
                            <li className="flex items-center">
                                <span className="text-[var(--color-accent)] mr-2">✓</span>Intégration blog, portfolio...
                            </li>
                            <li className="flex items-center">
                                <span className="text-[var(--color-accent)] mr-2">✓</span>Fonctionnalités avancées
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="w-full text-center bg-[var(--color-accent)] text-[var(--color-dark-blue)] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all"
                        >
                            Demander un devis
                        </a>
                    </div>
                </div>
                <p className="text-center mt-8 text-gray-600">💡 Possibilité de payer en 2 ou 3 fois sans frais.</p>
            </div>
        </section>
    );
};

export default OffersSection;
