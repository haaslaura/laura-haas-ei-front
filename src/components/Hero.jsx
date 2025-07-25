import { Link } from 'react-router-dom';
import StarsBackground from './StarsBackground';

const Hero = ({
    title = 'Un site web sur-mesure qui travaille vraiment pour vous.',
    keyWord = 'vraiment',
    subtitle = 'Partenaire des créateurs, indépendants et TPE pour une présence en ligne claire et efficace.',
    buttonText = 'Échangeons gratuitement sur votre projet',
    buttonLink = '/contact',
    starsBg = true,
}) => {

    // Fonction pour mettre en évidence un mot spécifique dans le titre
    const highlightWord = (text, word) => {
        const parts = text.split(word);
        return (
            <>
                {parts[0]}
                <span className="text-(--color-accent)">{word}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center bg-(--color-dark-blue) text-white">
            {/* FOND ÉTOILÉ */}
            {starsBg && (
                <div className="absolute z-0">
                    <StarsBackground />
                </div>
            )}

            {/* CONTENU */}
            <div className="relative z-10 container max-w-lg mx-auto px-6 md:py-32 flex flex-col items-center text-center">
                <h1 className="text-white text-4xl md:text-6xl font-title leading-tight bg-(--color-dark-blue) rounded-xl px-6 py-8">
                    {highlightWord(title, keyWord)}
                </h1>

                <p className="mt-4 text-lg md:text-xl font-subtitle text-(--color-slate) bg-(--color-dark-blue)">
                    {subtitle}
                </p>

                <Link
                    to={buttonLink}
                    className="bg-(--color-accent) text-(--color-dark-blue) mt-8
                    font-bold py-3 px-4 rounded-lg text-lg
                    hover:scale-105 transform transition-transform whitespace-nowrap cursor-pointer"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
};

export default Hero;
