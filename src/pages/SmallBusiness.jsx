import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import OffersSection from "../components/OffersSection";
import PortfolioSection from "../components/PortfolioSection";
import TitleAndSubDisplay from "../components/UI/TitleAndSubDisplay";
import portfolioCollection from '../data/portfolioCollection.json';
import Content from "../layouts/Content";
import Section from "../layouts/Section";
import { useContactModal } from "../store/useContactModal";


const independentProOffers = [
    {
        id: '1',
        title: 'Site Vitrine "Clé en Main"',
        subtitle: "La solution complète pour présenter votre entreprise, vos services et vos réalisations de manière professionnelle.",
        price: 'à partir de 1500€',
        features: [
            'Présentation claire de vos services',
            'Galerie de photos de vos chantiers/réalisations',
            'Formulaire de contact et de demande de devis',
            'Optimisation pour la recherche locale',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
    {
        id: '2',
        title: 'Application Métier Sur-Mesure',
        subtitle: 'Optimisez votre gestion quotidienne avec un outil créé pour vous : suivi de chantiers, plannings, facturation, espace client...',
        price: 'Sur devis',
        features: [
            'Analyse de vos processus de travail',
            'Développement 100% personnalisé',
            'Interface simple pour vos équipes',
            'Accessible sur mobile et ordinateur',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: true,
    },
    {
        id: '3',
        title: 'Forfait "Tranquillité"',
        subtitle: 'Pour que votre site reste sécurisé, à jour et performant sans que vous ayez à vous en soucier. Je m\'occupe de la technique, vous vous occupez de votre entreprise.',
        price: 'Sur devis',
        features: [
            'Mises à jour techniques et de sécurité',
            'Sauvegardes régulières du site',
            'Assistance rapide en cas de problème',
            'Ajout de contenus ou de photos (optionnel)',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
];


const SmallBusiness = () => {

    const { open } = useContactModal();

    return (
        <>
            <Hero
                title="Entreprise locale&nbsp;? Offrez à votre savoir-faire un vrai coup de neuf en ligne."
                keyWord="coup de neuf"
                subtitle="Un site professionnel pour inspirer confiance, simplifier vos demandes de devis et attirer plus de clients dans votre secteur."
                buttonText="Demander un audit"
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
                        title="Un site qui travaille pour vous, pas l'inverse."
                        subtitleVisible={true}
                        subtitle="Pas de jargon compliqué, juste des résultats. Mon objectif est de vous livrer un outil simple et efficace qui valorise votre travail."
                    />

                    <div className="mt-16 flex flex-row flex-wrap justify-center items-center gap-14">
                        
                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">Inspirez Confiance</h3>
                            <p className="mt-4 text-[#687087]">
                                Montrez votre professionnalisme avec un site moderne et une présentation claire de vos réalisations. Rassurer vos futurs clients avant même le premier contact.
                            </p>
                        </div>

                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">Gagnez du Temps</h3>
                            <p className="mt-4 text-[#687087]">
                                Réduisez les appels pour des questions simples. Un formulaire de devis bien pensé et une foire aux questions vous libèrent du temps pour votre métier.
                            </p>
                        </div>

                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">Soyez Visible Localement</h3>
                            <p className="mt-4 text-[#687087]">
                                Assurez-vous que les clients de votre région vous trouvent facilement sur Google quand ils ont besoin de vos services. C'est essentiel.
                            </p>
                        </div>                       
                    </div>
                </Content>
            </Section>

            {/* ========= SECTION PACKS ========= */}
            <OffersSection
                title="Des solutions directes et adaptées aux artisans"
                subtitle=""
                visibleNoteContent={true}
                noteStyle="advanced"
                noteContent={
                    <>
                        <span className="italic block mt-2">
                            Comme toujours, le règlement en plusieurs fois est possible pour maîtriser votre budget.
                        </span>
                    </>
                }
                offers={independentProOffers}
            />

            {/* <!-- ========= MINI PORTFOLIO ========= --> */}
            <PortfolioSection
                portfolioData={portfolioCollection.filter(
                    (project) => project.category && project.category.includes('business'),
                )}
                portfolioTitle="Quelques références dans votre secteur"
            />

            {/* <!-- ========= SECTION RÉASSURANCE ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <div className="bg-dark-blue text-center text-white p-10 md:p-16 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold font-title">Prêt à donner un coup de boost à votre image&nbsp;?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-light-slate">
                            Au-delà de l'esthétique, votre site doit être un allié pour votre business. Mon objectif : vous livrer un outil{' '}
                            <strong className="text-accent">efficace, qui convertit vos visiteurs en clients</strong> et vous libère du temps pour vous concentrer sur votre cœur de métier.
                        </p>
                    </div>
                </Content>
            </Section>

            {/* <!-- ========= CALL TO ACTION ========= --> */}
            <CallToAction
                title={
                    <>Trouvons le meilleur moyen<br />
                    de vous faire connaître
                    </>
                }
                displayTitle={true}
                subtitle="Prêt à passer à l'action ?"
                displaySeparation={false}

                isButton={true}
                isLinkAppearance={false}
                linkText= 'Prenons contact'

                buttonAction={open}
            />
        </>
    );
};

export default SmallBusiness;
