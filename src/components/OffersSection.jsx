import { Link } from 'react-router-dom';
import contentPackOffers from '../data/contentPackOffers';
import OfferCard from './OfferCard';


const OffersSection = () => {
    return (
        <section id="tarifs" className="py-20">
            
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Des offres claires et transparentes</h2>
                <p className="text-center text-gray-600 mb-12">Pas de surprise, vous savez où vous allez.</p>
                
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    {/* Pack de lancement */}
                    <OfferCard
                        title={contentPackOffers[0].title}
                        subtitle={contentPackOffers[0].subtitle}
                        price={contentPackOffers[0].price}
                        features={contentPackOffers[0].features}
                        buttonText={contentPackOffers[0].buttonText}
                        buttonLink={contentPackOffers[0].buttonLink}
                    />
                    {/* Pack le plus populaire */}
                    <OfferCard
                        title={contentPackOffers[1].title}
                        subtitle={contentPackOffers[1].subtitle}
                        price={contentPackOffers[1].price}
                        features={contentPackOffers[1].features}
                        buttonText={contentPackOffers[1].buttonText}
                        buttonLink={contentPackOffers[1].buttonLink}
                        activePopular={true}
                    />
                </div>
                
                <p className="text-center mt-8 text-gray-600">💡 Possibilité de payer en 2 ou 3 fois sans frais.</p>
            </div>
        
        </section>
    );
};

export default OffersSection;
