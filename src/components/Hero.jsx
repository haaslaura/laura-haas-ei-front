import { Link } from 'react-router-dom';
import StarsBackground from './StarsBackground';
import { useContactModal } from '../store/useContactModal';

/**
 * Section Hero principale affichée en haut de la page.
 *
 * Affiche un titre avec mise en évidence d'un mot, un sous-titre,
 * un fond étoilé optionnel, et un bouton d'action qui peut être soit
 * un lien de navigation (`<Link>`), soit un bouton qui ouvre le modal de contact.
 *
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {string} [props.title] - Titre principal (par défaut : phrase marketing).
 * @param {string} [props.keyWord] - Mot à mettre en évidence dans le titre.
 * @param {string} [props.subtitle] - Sous-titre ou accroche secondaire.
 * @param {string} [props.buttonText] - Texte affiché sur le bouton d'action.
 * @param {boolean} [props.isLink=false] - Détermine si le bouton est un lien (`true`) ou un bouton ouvrant le modal (`false`).
 * @param {string} [props.buttonLink] - Lien de redirection si `isLinkButton` est `true`.
 * @param {boolean} [props.starsBg=true] - Active ou désactive le fond étoilé animé.
 *
 * @returns {JSX.Element} La section Hero avec contenu et action principale.
 */

const Hero = ({
    title = 'Un site web sur-mesure qui travaille vraiment pour vous.',
    keyWord = 'vraiment',
    subtitle = 'Partenaire des créateurs, indépendants et TPE pour une présence en ligne claire et efficace.',
    buttonText = 'Échangeons gratuitement sur votre projet',
    isLink = false,
    buttonLink = '',
    starsBg = true,
}) => {
    const { open } = useContactModal();

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
            <div
                className="
                relative z-10
                max-w-5xl
                md:py-24 mx-4
                flex flex-col items-center text-center
            "
            >
                <h1 className="text-white text-4xl md:text-6xl font-title leading-tight bg-(--color-dark-blue) rounded-xl px-6 py-8">
                    {highlightWord(title, keyWord)}
                </h1>

                <p className="max-w-2xl mt-4 text-lg md:text-xl font-subtitle text-(--color-slate) bg-(--color-dark-blue)">
                    {subtitle}
                </p>

                {/* BOUTON */}
                {isLink ? (
                    <Link
                        to={buttonLink}
                        className="bg-(--color-accent) text-(--color-dark-blue) mt-8
                        font-bold py-3 px-4 rounded-lg text-lg
                        hover:scale-105 transform transition-transform whitespace-nowrap cursor-pointer"
                    >
                        {buttonText}
                    </Link>
                ) : (
                    <button
                        onClick={open}
                        className="bg-(--color-accent) text-(--color-dark-blue) mt-8
                        font-bold py-3 px-4 rounded-lg text-lg
                        hover:scale-105 transform transition-transform whitespace-nowrap cursor-pointer"
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Hero;
