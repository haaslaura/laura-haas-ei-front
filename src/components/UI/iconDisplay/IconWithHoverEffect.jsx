/**
 * Affiche une icone avec effet hover :
 * - Icône monte légèrement et devient jaune (--color-accent)
 * - Texte devient bleu foncé (--color-dark-blue)
 *
 * @component IconWithHoverEffect
 * @param {string} iconClass - Classe de l'icône.
 * @param {string} label - Texte sous l'icône.
 * @returns {JSX.Element}
 */
const IconWithHoverEffect = ({ iconClass, label }) => {
    return (
        <div className="text-center group select-none">
            <i
                className={`
                    ${iconClass}
                    block mx-auto duration-200 ease-in-out
                    group-hover:-translate-y-2 group-hover:text-(--color-accent)
                `}
                aria-hidden="true"
            ></i>
            <p
                className="
                    text-sm mt-2 font-semibold
                    transition-colors duration-200 ease-in-out
                    group-hover:text-(--color-dark-blue)
                "
            >
                {label}
            </p>
        </div>
    );
};

export default IconWithHoverEffect;
