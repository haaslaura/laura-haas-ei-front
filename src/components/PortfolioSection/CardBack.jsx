const CardBack = ({ title, flipToFront, isFlipped, backBtnRef }) => {
    return (
        <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl bg-(--color-dark-blue) text-white flex flex-col items-center justify-center p-6"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                WebkitTransform: 'rotateY(180deg)',
            }}
            aria-hidden={!isFlipped}
            role="region"
            aria-live="polite"
        >
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-title text-center mb-4">{title}</h3>
                <p className="text-[--color-slate] text-center">
                    Contenu détaillé du projet, objectifs, technologies utilisées, et résultats obtenus.
                </p>
            </div>
            <div className="text-center mt-6">
                <button
                    ref={backBtnRef}
                    onClick={flipToFront}
                    className="text-(--color-accent) hover:underline rounded focus:outline-2 focus:outline-offset-3 focus:outline-(--color-accent)"
                    aria-label="Retour au recto de la carte"
                    aria-expanded={isFlipped}
                    tabIndex={!isFlipped ? -1 : 0}
                >
                    Retour
                </button>
            </div>
        </div>
    );
};

export default CardBack;
