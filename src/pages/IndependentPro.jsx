import Hero from "../components/Hero"
import OffersSection from "../components/OffersSection";
import PortfolioSection from "../components/PortfolioSection";
import TitleAndSubDisplay from "../components/TitleAndSubDisplay";
import portfolioCollection from '../data/portfolioCollection.json';
import Content from "../layouts/Content";
import Section from "../layouts/Section";


const independentProOffers = [
    {
        id: '1',
        title: 'Refonte Visuelle & Stratégique',
        subtitle: "Moderniser votre image, améliorer l'expérience utilisateur et aligner votre site sur vos nouvelles ambitions pour mieux convertir.",
        price: 'à partir de 1800€',
        features: [
            'Analyse de l\'existant (audit)',
            'Nouvelle charte graphique & design sur-mesure',
            'Optimisation du parcours client',
            'Intégration sur votre CMS ou une solution adaptée',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: true,
    },
    {
        id: '2',
        title: 'Site & Outils Sur-Mesure',
        subtitle: 'Aller plus loin avec des fonctionnalités qui vous font gagner du temps et développent votre business : e-commerce, espace client, automatisations...',
        price: 'Sur devis',
        features: [
            'Définition des besoins spécifiques',
            'Vente de produits/services en ligne',
            'Connexion à vos outils (calendrier, CRM...)',
            'Création d\'un véritable outil de travail',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
];


const IndependentPro = () => {
    return (
        <>
            <Hero
                title="Votre site ne vous ressemble plus&nbsp;? Révélez votre véritable identité."
                keyWord="véritable"
                subtitle="Ensemble, créons un site qui reflète votre talent, attire vos clients idéaux et travaille pour vous."
                buttonText="Réserver un créneau pour faire le point"
                isLink={false}
                starsBg={false}
            />

            {/* <!-- ========= FONCTIONNEMENT ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <TitleAndSubDisplay
                        title="Vous êtes au cœur du projet, pas simple spectateur."
                        subtitleVisible={true}
                        subtitle="Mon approche est basée sur la **co-construction**. Nous travaillons main dans la main à chaque étape pour que votre site soit le juste prolongement de votre vision. Votre expertise métier et ma compétence technique sont les clés d'un projet réussi."
                    />

                    <div className="mt-16 flex flex-row flex-wrap justify-center items-center gap-14">
                        
                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">1. Écoute & Stratégie</h3>
                            <p className="mt-4 text-[#687087]">
                                J'analyse votre site actuel, vos objectifs et vos clients pour définir une feuille de route claire.
                            </p>
                        </div>

                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">2. Design Collaboratif</h3>
                            <p className="mt-4 text-[#687087]">
                                Je vous propose des maquettes que nous affinons ensemble jusqu'à obtenir un design qui vous inspire.
                            </p>
                        </div>

                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">3. Développement Transparent</h3>
                            <p className="mt-4 text-[#687087]">
                                Vous suivez l'avancement en temps réel et la mise en place des fonctionnalités au fur et à mesure.
                            </p>
                        </div>                       
                    </div>
                </Content>
            </Section>

            {/* ========= SECTION PACKS ========= */}
            <OffersSection
                title="Des solutions pour faire évoluer votre activité"
                subtitle=""
                visibleNoteContent={true}
                noteStyle="advanced"
                noteContent={
                    <>
                        Besoin de suivi ? Un forfait de maintenance et d'évolutions est proposé pour garder votre site performant et à jour.
                        <br />
                        <span className="italic block mt-2">
                            Le règlement en plusieurs fois est bien sûr possible.
                        </span>
                    </>
                }
                offers={independentProOffers}
            />

            {/* <!-- ========= MINI PORTFOLIO ========= --> */}
            <PortfolioSection
                portfolioData={portfolioCollection.filter(
                    (project) => project.category && project.category.includes('independent'),
                )}
                portfolioTitle="Quelques exemples de collaborations"
            />

            {/* <!-- ========= SECTION RÉASSURANCE ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <div className="bg-dark-blue text-center text-white p-10 md:p-16 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold font-title">Un site, oui, mais pour quoi faire ?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-light-slate">
                            Au-delà de l'esthétique, votre site doit être un allié pour votre business. Mon objectif : vous livrer un outil{' '}
                            <strong className="text-accent">efficace, qui convertit vos visiteurs en clients</strong> et vous libère du temps pour vous concentrer sur votre cœur de métier.
                        </p>
                    </div>
                </Content>
            </Section>
        </>
    );
};

export default IndependentPro;
