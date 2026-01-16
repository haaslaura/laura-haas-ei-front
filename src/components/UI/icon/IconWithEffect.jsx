const buildClasses = (animation, defaultColor) => {
    const baseIcon = 'block mx-auto transition-transform duration-200 ease-in-out';
    const baseLabel = 'text-sm mt-2 font-semibold';

    if (animation === 'zoom') {
        return {
            icon: `${baseIcon} ${defaultColor} group-hover:scale-115`,
            label: `${baseLabel}`,
        };
    }

    // animation === 'color' (par défaut)
    return {
        icon: `${baseIcon} text-slate group-hover:-translate-y-2 group-hover:text-(--color-accent)`,
        label: `${baseLabel} transition-colors duration-200 ease-in-out group-hover:text-(--color-dark-blue)`,
    };
};

/**
 * Affiche une icone avec effet :
 * - "color" :
 * -- par défaut, l'icône est grise (text-slate)
 * -- au survol l'icône monte légèrement et devient jaune (--color-accent)
 * -- au survol le texte devient bleu foncé (--color-dark-blue)
 * - "zoom" :
 * -- l'icone n'a pas de couleur par défaut, elle utilise la props defaultColor
 * -- au survol l'icône grossit un peu
 * 
 * @component IconWithHoverEffect
 * @param {string} iconClass - Classe de l'icône.
 * @param {string} label - Texte sous l'icône.
 * @param {string} [animation="color"] - Type d'animation au survol ("color" ou "zoom").
 * @param {string} [defaultColor="text-slate"] - Couleur par défaut de l'icône (utilisée pour l'animation "zoom").
 * @returns {JSX.Element}
 */
const IconWithEffect = ({ iconClass, label, animation = "color", defaultColor = "text-slate" }) => {
    const classes = buildClasses(animation, defaultColor);

    return (
        <div className="text-center group select-none">
            <i
                className={`
                    ${iconClass}
                    ${classes.icon}
                `}
                aria-hidden="true"
            ></i>
            <p className={classes.label}>
                {label}
            </p>
        </div>
    );
};

export default IconWithEffect;
