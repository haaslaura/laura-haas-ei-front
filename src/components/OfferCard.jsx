import { Link } from 'react-router-dom';

const styleOptions = {
    false: {
        border: 'border',
        borderColor: 'border-transparent',
        background: 'bg-white',
        textColor: 'text-gray-800',
        subtitleColor: 'text-gray-500',
        featureIconColor: 'text-green-500',
        buttonColor: 'bg-gray-200',
        buttonColorHover: 'hover:bg-gray-300',
    },
    true: {
        border: 'border-2',
        borderColor: 'border-(--color-accent)',
        background: 'bg-(--color-dark-blue)',
        textColor: 'text-white',
        subtitleColor: 'text-(--color-slate)',
        featureIconColor: 'text-(--color-accent)',
        buttonColor: 'bg-(--color-accent)',
        buttonColorHover: 'hover:opacity-90',
    },
};

const OfferCard = ({
    title = 'Pack Lancement',
    subtitle = 'Idéal pour démarrer',
    price = 'À partir de 1200€',
    features = [],
    buttonText = 'Voir les packs',
    buttonLink = '/contact',
    activePopular = false,
}) => {
    const styles = styleOptions[activePopular] || styleOptions.false;

    return (
        <div
            className={`
            ${styles.background}
            p-8 rounded-lg shadow-lg
            ${styles.border} ${styles.borderColor}
            w-full md:w-1/3 flex flex-col relative
        `}
        >
            {activePopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-dark-blue)] text-sm font-bold px-3 py-1 rounded-full">
                    LE PLUS POPULAIRE
                </span>
            )}

            <h3
                className={`
                ${styles.textColor}
                text-2xl font-bold mb-2
            `}
            >
                {title}
            </h3>

            <p
                className={`
                ${styles.subtitleColor}
                mb-6
            `}
            >
                {subtitle}
            </p>

            <p
                className={`
                ${styles.textColor}
                text-4xl font-bold mb-4
            `}
            >
                {price}
            </p>

            <ul className={`text-left space-y-2 mb-8 flex-grow ${styles.textColor}`}>
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-center"
                    >
                        <span className={`${styles.featureIconColor} mr-2`}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
            <Link
                to={buttonLink}
                className={`
                    w-full text-center
                    ${styles.buttonColor} text-gray-800
                    font-bold py-3 px-6 rounded-lg ${styles.buttonColorHover} transition-all
            `}
            >
                {buttonText}
            </Link>
        </div>
    );
};

export default OfferCard;
