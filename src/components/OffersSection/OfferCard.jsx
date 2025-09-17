import { Link } from 'react-router-dom';
import { useContactModal } from '../../store/useContactModal';

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
    displayButton = true,
    buttonText = 'Voir les packs',
    buttonLink = '/contact',
    activePopular = false,
}) => {
    const styles = styleOptions[activePopular] || styleOptions.false;
    const { open } = useContactModal();

    return (
        <div
            className={`
            flex flex-col relative
            ${styles.background}
            ${styles.border} ${styles.borderColor}
            p-8 rounded-lg shadow-lg
            md:max-w-xs
        `}
        >
            {activePopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--color-accent) text-(--color-dark-blue) text-sm font-bold text-center uppercase px-3 py-1 rounded-full">
                    Le plus populaire
                </span>
            )}

            <h3 className={`${styles.textColor} text-2xl font-bold mb-2`}>{title}</h3>
            <p className={` ${styles.subtitleColor} mb-6`}>{subtitle}</p>
            <p className={`${styles.textColor} text-4xl font-bold mb-4`}>{price}</p>

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
            {displayButton &&
                (buttonLink === 'modal' ? (
                    <button
                        onClick={open}
                        className={`
                            w-full text-center
                            ${styles.buttonColor} text-gray-800
                            font-bold py-3 px-6 rounded-lg ${styles.buttonColorHover} transition-all cursor-pointer
                    `}
                    >
                        {buttonText}
                    </button>
                ) : (
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
                ))}
        </div>
    );
};

export default OfferCard;
