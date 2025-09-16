import Section from '../../layouts/Section';
import Content from '../../layouts/Content';
import TitleAndSubDisplay from '../TitleAndSubDisplay';
import OfferCard from './OfferCard';
import { useContactModal } from '../../store/useContactModal';

const homePackOffers = [
    {
        id: '1',
        title: 'Pack Lancement',
        subtitle: 'Idéal pour démarrer',
        price: 'À partir de 1200€',
        features: [
            'Site vitrine 1 à 3 pages',
            'Formulaire de contact',
            'Accompagnement contenu',
            'Adapté mobile & tablette',
        ],
        displayButton: true,
        buttonText: 'Voir les packs',
        buttonLink: '/contact',
        activePopular: false,
    },
    {
        id: '2',
        title: 'Pack Sur-Mesure',
        subtitle: 'Pour un projet unique',
        price: 'Sur Devis',
        features: [
            'Nombre de pages illimité',
            'Intégration blog, portfolio...',
            'Fonctionnalités avancées',
            'Accompagnement à la prise en main',
            'Et bien plus encore...',
        ],
        displayButton: true,
        buttonText: 'Demander un devis',
        buttonLink: 'modal',
        activePopular: true,
    },
];

const styleNoteBlock = {
    simple: {
        marginTop: 'mt-8',
        textColor: 'text-gray-600',
        textWeight: 'font-normal',
        background: 'bg-transparent',
        padding: 'p-px',
        rounded: 'rounded-none',
        shadow: 'shadow-none',
    },
    advanced: {
        marginTop: 'mt-16',
        textColor: 'text-gray-900',
        textWeight: 'font-semibold',
        background: 'bg-white',
        padding: 'p-8',
        rounded: 'rounded-lg',
        shadow: 'shadow-sm',
    },
};

const OffersSection = ({
    title = 'Des offres claires et transparentes',
    subtitle = 'Pas de surprise, vous savez où vous allez.',
    visibleNoteContent = 'true',
    noteStyle = 'simple', // simple or advanced
    noteContent = '💡 Possibilité de payer en 2 ou 3 fois sans frais.',
    offers = homePackOffers, // valeur par défaut
}) => {
    const styles = styleNoteBlock[noteStyle] || styleNoteBlock.simple;

    return (
        <Section
            bgColor="grey"
            paddingY="py-20"
        >
            <Content maxW="max-w-5xl">
                <TitleAndSubDisplay
                    title={title}
                    subtitleVisible={true}
                    subtitleContent={subtitle}
                />

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mt-12">
                    {offers.map((offer, idx) => (
                        <OfferCard
                            key={idx}
                            {...offer}
                        />
                    ))}
                </div>

                {visibleNoteContent && noteContent && (
                    <div
                        className={`
                        mx-2 max-w-md
                        ${styles.marginTop}
                        ${styles.background}
                        ${styles.padding}
                        ${styles.rounded}
                        ${styles.shadow}
                    `}
                    >
                        <p
                            className={`
                            text-center
                            ${styles.textWeight}
                            ${styles.textColor}
                        `}
                        >
                            {noteContent}
                        </p>
                    </div>
                )}
            </Content>
        </Section>
    );
};

export default OffersSection;
