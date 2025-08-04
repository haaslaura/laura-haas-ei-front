import { useState } from 'react';
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

// const PortfolioCard = ({ title, text, picture, projectLink }) => {
//     const media = mediaPathResolver(picture);

//     return (
//         <div
//             className="group rounded-lg overflow-hidden shadow-xl bg-(--color-dark-blue) h-[24rem] max-w-[25rem] flex flex-col transition-transform duration-300">
//             {/* Partie image */}
//             <div className="relative h-1/2 overflow-hidden">
//                 <img
//                     src={media}
//                     alt=""
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Overlay noir transparent */}
//                 <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-4">
//                     <h3 className="text-white text-xl font-title text-center leading-snug drop-shadow-lg">{title}</h3>
//                 </div>
//             </div>

//             {/* Contenu texte */}
//             <div className="flex-1 p-6 flex flex-col items-start justify-center gap-6">
//                 <p className="text-(--color-slate) whitespace-pre-line">{text}</p>

//                 <div className="flex flex-row gap-6 items-center">
//                     <Button
//                         text="Voir le site"
//                         link={projectLink}
//                         blank={true}
//                     />
//                     <button
//                         className="text-(--color-accent) hover:underline focus-visible:outline focus-visible:outline-(--color-accent) rounded"
//                         aria-expanded="false"
//                         aria-controls={`project-details-${title.replace(/\s/g, '-').toLowerCase()}`}
//                     >
//                         En savoir plus
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

const PortfolioCard = ({ title, text, picture, projectLink }) => {
    const media = mediaPathResolver(picture);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(true);
    const handleUnflip = () => setIsFlipped(false);

    return (
        <div className="perspective-[1500px] max-w-[25rem] h-[24rem]">
            <div
                className={`
                    relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                    ${isFlipped ? 'rotate-y-180' : ''}
                `}
            >
                
                {/* Face avant */}
                <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-xl bg-[--color-dark-blue] flex flex-col">
                    <div className="relative h-1/2 overflow-hidden">
                        <img
                            src={media}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-4">
                            <h3 className="text-white text-xl font-title text-center leading-snug drop-shadow-lg">
                                {title}
                            </h3>
                        </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col items-start justify-center gap-6">
                        <p className="text-[--color-slate] whitespace-pre-line">{text}</p>

                        <div className="flex flex-row gap-6 items-center">
                            <Button
                                text="Voir le site"
                                link={projectLink}
                                blank={true}
                            />
                            <button
                                className="text-[--color-accent] hover:underline focus-visible:outline focus-visible:outline-[--color-accent] rounded"
                                onClick={handleFlip}
                                aria-expanded={isFlipped}
                            >
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                {/* Face arrière */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-xl bg-[--color-dark-blue] text-white flex flex-col justify-between p-6">
                    <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-title text-center mb-4">{title}</h3>
                        <p className="text-[--color-slate] text-center">
                            Contenu détaillé du projet, objectifs, technologies utilisées, et résultats obtenus.
                        </p>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={handleUnflip}
                            className="bg-[--color-accent] text-[--color-dark-blue] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
                            aria-label="Retour au recto de la carte"
                        >
                            Retour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
