import { mediaPathResolver } from '../../services/mediaPathResolver';
import Button from '../Button';

/**
 * Composant d'affichage d'une carte de projet dans le portfolio.
 *
 * @param {Object} props
 * @param {string} props.title - Titre du projet.
 * @param {string} props.text - Description du projet.
 * @param {string} props.picture - Nom du fichier image à afficher (dans `assets/`).
 * @param {string} props.projectLink - Lien vers le projet (site ou démo).
 *
 * @returns {JSX.Element} Carte visuelle cliquable avec image et texte.
 */

const PortfolioCard = ({ title, text, picture, projectLink }) => {
    const media = mediaPathResolver(picture);

    return (
        <div
            className="group rounded-lg overflow-hidden shadow-xl bg-(--color-dark-blue) h-[380px] flex flex-col transition-transform duration-300">
            {/* Partie image */}
            <div className="relative h-1/2 overflow-hidden">
                <img
                    src={media}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay noir transparent */}
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-4">
                    <h3 className="text-white text-xl font-title text-center leading-snug drop-shadow-lg">{title}</h3>
                </div>
            </div>

            {/* Contenu texte */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center gap-6">
                <p className="text-(--color-slate)">{text}</p>

                <div className="flex flex-row gap-6 items-center">
                    <Button
                        text="Voir le site"
                        link={projectLink}
                        blank={true}
                    />
                    <button
                        className="text-(--color-accent) hover:underline focus-visible:outline focus-visible:outline-(--color-accent) rounded"
                        aria-expanded="false"
                        aria-controls={`project-details-${title.replace(/\s/g, '-').toLowerCase()}`}
                    >
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
