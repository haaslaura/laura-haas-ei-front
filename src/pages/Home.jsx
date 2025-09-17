import Hero from '../components/Hero';
import CardSection from '../components/CardSection';
import StageSection from '../components/StageSection';
import OffersSection from '../components/OffersSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import { useContactModal } from '../store/useContactModal';

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
        buttonLink: '/projet-lancement',
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

const Home = () => {
    const { open } = useContactModal();

    return (
        <section className="home">
            <Hero
                title="Un site web sur-mesure qui travaille vraiment pour vous"
                keyWord="vraiment"
                isLink={false}
            />

            <CardSection />

            <StageSection />

            <OffersSection offers={homePackOffers} />

            <TestimonialSection />

            <CallToAction
                title={'Prêt à donner vie à votre projet\u00A0?'}
                displayTitle={true}
                subtitle={'Contactez-moi pour un échange sans engagement. Le café est pour moi (même en visio)\u00A0!'}
                displaySeparation={true}
                isButton={true}
                isLinkAppearance={false}
                linkText="Contactez-moi"
                buttonAction={open}
            />
            <CallToAction
                title={'Vous êtes une agence\u00A0?'}
                displayTitle={false}
                subtitle="Je collabore en marque blanche et propose des renforts fiables en développement front-end."
                displaySeparation={false}
                isButton={true}
                isLinkAppearance={true}
                linkText="Échangeons à ce sujet"
                buttonAction={open}
            />
        </section>
    );
};

export default Home;
