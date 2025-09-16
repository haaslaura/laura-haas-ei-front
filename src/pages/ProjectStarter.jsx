import Hero from '../components/Hero';
import OffersSection from '../components/OffersSection';
import CallToAction from '../components/CallToAction';
import Section from '../layouts/Section';
import Content from '../layouts/Content';
import TitleAndSubDisplay from '../components/TitleAndSubDisplay';
import PortfolioSection from '../components/PortfolioSection';
import portfolioCollection from '../data/portfolioCollection.json';

const projectStarterOffers = [
    {
        id: '3',
        title: 'Pack Lancement',
        subtitle: "L'essentiel pour une première présence en ligne professionnelle et rassurante.",
        price: 'à partir de 1200€',
        features: [
            'Site vitrine 1 à 3 pages',
            'Formulaire de contact',
            'Accompagnement contenu',
            'Adapté mobile & tablette',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
    {
        id: '4',
        title: 'Pack Essentiel',
        subtitle: 'Un site plus complet pour développer votre image de marque et partager votre actualité.',
        price: 'à partir de 1600€',
        features: [
            'Site 3 à 5 pages',
            'Charte graphique légère',
            'Section blog (optionnel)',
            'SEO de base',
            'Suivi post-livraison',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: true,
    },
    {
        id: '5',
        title: 'Pack Premium',
        subtitle: 'La solution tout-en-un pour un site à fort impact et une stratégie de contenu solide.',
        price: 'à partir de 2500€',
        features: [
            'Site 5+ pages',
            'Blog & animations visuelles',
            'Atelier définition de contenu',
            'Recommandations stratégiques',
            'Suivi prioritaire 1 mois',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
];

const ProjectStarter = () => {
    return (
        <>
            <Hero
                title="Vous lancez votre projet&nbsp;? Donnez-lui la meilleure vitrine."
                keyWord="meilleure"
                subtitle="Je vous accompagne pour créer un site web professionnel, clair et efficace, sans jargon technique et adapté à votre budget."
                buttonText="Discutons de votre projet, sans engagement"
                isLink={false}
                starsBg={false}
            />

            {/* ========= SECTION PACKS ========= */}
            <div id="packs"></div>
            <OffersSection
                title="Des offres conçues pour démarrer sur des bases solides"
                subtitle=""
                visibleNoteContent={true}
                noteStyle="advanced"
                noteContent={
                    <>
                        Modules en option pour tous les packs : CMS pour gérer votre contenu, SEO avancé, newsletters,
                        calendrier de réservation, etc.
                        <br />
                        <span className="italic block mt-2">
                            Pour faciliter votre investissement, le règlement en plusieurs fois est possible sur toutes
                            les offres.
                        </span>
                    </>
                }
                offers={projectStarterOffers}
            />

            {/* <!-- ========= SECTION AUTRES OFFRES ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <TitleAndSubDisplay
                        title="Besoin d'un coup de pouce ou d'un suivi ?"
                        subtitleVisible={false}
                    />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">
                        <div className="bg-light-bg p-8 rounded-lg max-w-xs">
                            <h3 className="font-title text-2xl font-bold text-accent">Offre “Cadrage & Conseil”</h3>
                            <p className="mt-2 text-xl font-bold text-dark-space">À partir de 250 €</p>
                            <p className="mt-4 text-[#687087]">
                                Idéal avant de se lancer ! Un entretien de 1h30 à 2h pour définir clairement vos
                                objectifs, votre cible, et les fonctionnalités clés de votre futur site. Repartez avec
                                une vision claire.
                            </p>
                            <p className="mt-4 text-sm text-[#687087]">
                                <strong className="text-slate">En option (sur devis) :</strong> création d'arborescence,
                                wireframes simples, rédaction de brief technique/créatif.
                            </p>
                            <a
                                href="#"
                                className="mt-6 inline-block font-bold text-accent hover:underline"
                            >
                                Me contacter pour un cadrage →
                            </a>
                        </div>
                        <div className="bg-light-bg p-8 rounded-lg max-w-xs">
                            <h3 className="font-title text-2xl font-bold text-accent">
                                Offre “Maintenance & Évolutions”
                            </h3>
                            <p className="mt-2 text-xl font-bold text-dark-space">Sur devis</p>
                            <p className="mt-4 text-[#687087]">
                                Un site web vit. Je vous accompagne pour le garder à jour, performant et sécurisé :
                                mises à jour techniques, corrections, ajout de contenus, audits performance, etc.
                            </p>
                            <p className="mt-4 text-sm text-[#687087]">
                                Accompagnement ponctuel ou régulier, selon les projets réalisés ensemble.
                            </p>
                            <a
                                href="#"
                                className="mt-6 inline-block font-bold text-accent hover:underline"
                            >
                                Discuter de la maintenance →
                            </a>
                        </div>
                    </div>
                </Content>
            </Section>

            {/* <!-- ========= MINI PORTFOLIO ========= --> */}
            <PortfolioSection
                portfolioData={portfolioCollection.filter(
                    (project) => project.category && project.category.includes('starter'),
                )}
            />

            {/* <!-- ========= SECTION RÉASSURANCE ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <div className="bg-dark-blue text-center text-white p-10 md:p-16 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold font-title">Vous gardez le contrôle</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-light-slate">
                            Mon but est de vous rendre autonome. Chaque site livré s'accompagne d'une{' '}
                            <strong className="text-accent">formation personnalisée</strong> pour que vous puissiez
                            gérer vos contenus simplement. Et je reste toujours disponible pour la suite.
                        </p>
                    </div>
                </Content>
            </Section>

            {/* <!-- ========= CALL TO ACTION ========= --> */}
            <CallToAction
                title="Lançons votre projet"
                displayTitle={true}
                subtitle="Prêt à passer à l'action ?"
                linkContent="Prenons contact"
                link="/contact"
                displayLinkLikeAButton={true}
                displaySeparation={false}
            />
        </>
    );
};

export default ProjectStarter;
