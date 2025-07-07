import { Link } from 'react-router-dom';
import StarsBackground from './StarsBackground';


const Hero = () => {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden bg-[var(--color-dark-blue)]">
            {/* FOND ÉTOILÉ */}
            <div className="absolute inset-0 z-0">
                <StarsBackground />
            </div>

            {/* CONTENU */}
            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
                <h1 className="text-white text-4xl md:text-6xl font-title leading-tight bg-white/15 rounded-xl px-6 py-8">
                    Un site web sur-mesure qui travaille <span className='text-[var(--color-accent)]'>vraiment</span> pour vous.
                </h1>

                <p className="mt-4 text-lg md:text-xl font-subtitle text-[var(--color-slate)]">
                    Partenaire des créateurs, indépendants et TPE pour une présence en ligne claire et efficace.
                </p>

                <Link
                    to="/contact"
                    className="bg-[var(--color-accent)] text-[var(--color-dark-blue)] mt-8
                    font-bold py-3 px-4 rounded-lg text-lg
                    hover:scale-105 transform transition-transform whitespace-nowrap cursor-pointer"
                >
                    Échangeons gratuitement sur votre projet
                </Link>
            </div>
        </section>
    );
};

export default Hero;