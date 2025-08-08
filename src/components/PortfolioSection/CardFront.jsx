import Button from '../Button';
import { mediaPathResolver } from '../../services/mediaPathResolver';

const CardFront = ({ title, frontText, picture, projectLink, flipToBack, isFlipped }) => {
    const media = mediaPathResolver(picture);

    return (
        <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl bg-(--color-dark-blue) flex flex-col"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
            aria-hidden={isFlipped}
        >
            {/* IMAGE + TITRE */}
            <div className="relative h-1/2 overflow-hidden">
                <img
                    src={media}
                    alt=""
                    className="group w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-4">
                    <h3 className="text-white text-xl font-title text-center leading-snug drop-shadow-lg">{title}</h3>
                </div>
            </div>

            {/* TEXTE + BOUTONS */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center gap-6">
                <p className="text-(--color-slate) whitespace-pre-line">{frontText}</p>
                <div className="flex flex-row gap-6 items-center">
                    <Button
                        text="Voir le site"
                        link={projectLink}
                        blank={true}
                        tabIndex={isFlipped ? -1 : 0}
                    />
                    <button
                        className="text-(--color-accent) hover:underline rounded focus:outline-2 focus:outline-offset-3 focus:outline-(--color-accent)"
                        onClick={flipToBack}
                        aria-expanded={isFlipped}
                        tabIndex={isFlipped ? -1 : 0}
                    >
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardFront;
