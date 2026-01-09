import Content from '../layouts/Content';
import Section from '../layouts/Section';

import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import OffersSection from '../components/OffersSection';
import PortfolioSection from '../components/PortfolioSection';
import IconWithEffect from '../components/UI/icon/IconWithEffect';
import TooltipBubble from '../components/UI/TooltipBubble';
import TitleAndSubDisplay from '../components/UI/TitleAndSubDisplay';
import CustomizedStamp from '../components/UI/stamp/CustomizedStamp';

import { useContactModal } from '../features/ContactModal/store/useContactModal';
import portfolioCollection from '../data/portfolioCollection.json';


/**
 * TODO :
 * - Portfolio spécial Agence
 * - Corriger la section Services
 * - Intégrer les langages de programmation / CMS / techno
 * - Regarder les pages partenaires des agences
 */


const agenciesOffers = [
    {
        id: '1',
        title: 'Intégration Front-End',
        subtitle:
            'Intégration HTML/CSS/JS (Tailwind, etc.) à partir de vos maquettes Figma. Responsive, pixel-perfect et optimisé.',
        // price: 'à partir de 1500€',
        features: [
            'Maquettes Figma, XD, Sketch',
            'Respect de vos conventions de code',
            'Tests de responsive sur appareils réels',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
    {
        id: '2',
        title: 'Développement WordPress',
        subtitle:
            'Intégration de thèmes sur-mesure (ACF, CPT) ou adaptation de fonctionnalités spécifiques sur des sites existants.',
        // price: 'Sur devis',
        features: [
            'Création de thèmes "blocs" (FSE)',
            'Développement de plugins sur-mesure',
            'Optimisation de performance',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: true,
    },
    {
        id: '3',
        title: 'Renfort Ponctuel (Régie)',
        subtitle:
            "Besoin d'un coup de feu ? Je m'intègre à votre équipe pour une mission de courte durée (TJM ou forfait) pour vous aider à boucler un projet.",
        // price: 'À partir de 100€/mois',
        features: [
            'Intégration rapide à l\'équipe',
            'Disponible en télétravail',
            'Tarif journalier clair',
        ],
        displayButton: false,
        buttonText: '',
        buttonLink: '',
        activePopular: false,
    },
];

const WebAgency = () => {
    const { open } = useContactModal();

    return (
        <div className='relative'>
            <CustomizedStamp
                size={140}
                text={`Basée
                    en Alsace
                    •
                    J'interviens
                    partout`}
                ariaLabel="Je suis basée en Alsace mais j'interviens partout en France"
                topPosition="3rem"
                leftPosition="3rem"
            />

            <Hero
                title="Partenaire Front-end pour Agences Web"
                keyWord="Front-end"
                subtitle="Besoin d'un renfort en marque blanche ? Je livre du code propre, commenté et optimisé pour vos projets clients. Flexibilité, rigueur et 10 ans d'expérience en stratégie marketing."
                buttonText="Planifier un échange"
                isLink={false}
                starsBg={true}
            />

            {/* <!-- ========= LANGAGES ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <TitleAndSubDisplay
                        title="Ma Stack Technique"
                        subtitleVisible={true}
                        subtitleContent="Des technologies modernes pour des projets performants et une maintenabilité garantie."
                    />
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate text-4xl md:text-5xl">
                        <IconWithEffect iconClass="fab fa-brands fa-github" label="Github" />
                        <IconWithEffect iconClass="fab fa-figma" label="Figma" />
                        <IconWithEffect iconClass="fab fa-trello" label="Trello" />
                        <IconWithEffect iconClass="fab fa-slack" label="Slack" />
                        <IconWithEffect iconClass="fab fa-notion" label="Notion" />
                        <IconWithEffect iconClass="fab fa-wordpress" label="WordPress" />
                        <TooltipBubble text="Soyons fous !">
                            <IconWithEffect iconClass="fab fa-discord" label="Discord" />
                        </TooltipBubble>
                    </div>
                </Content>
            </Section>

            {/* <!-- ========= OUTILS ET INTÉGRATIONS ========= --> */}
            <Section
                bgColor="grey"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <TitleAndSubDisplay
                        title="Une intégration fluide à votre workflow"
                        subtitleVisible={true}
                        subtitleContent="Je m'adapte à vos outils et à vos méthodes de travail pour une collaboration sans friction."
                    />
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate text-4xl md:text-5xl">
                        <IconWithEffect iconClass="fab fa-brands fa-github" label="Github" />
                        <IconWithEffect iconClass="fab fa-figma" label="Figma" />
                        <IconWithEffect iconClass="fab fa-trello" label="Trello" />
                        <IconWithEffect iconClass="fab fa-slack" label="Slack" />
                        <IconWithEffect iconClass="fab fa-notion" label="Notion" />
                        <IconWithEffect iconClass="fab fa-wordpress" label="WordPress" />
                        <TooltipBubble text="Soyons fous !">
                            <IconWithEffect iconClass="fab fa-discord" label="Discord" />
                        </TooltipBubble>
                    </div>
                </Content>
            </Section>

            {/* <!-- ========= GARANTIES ========= --> */}
            <Section
                bgColor="white"
                paddingY="py-20"
            >
                <Content maxW="max-w-6xl">
                    <TitleAndSubDisplay
                        title="Plus qu'une simple ligne de code."
                        subtitleVisible={true}
                        subtitle="Je m'engage sur la qualité du livrable, la pertinence stratégique et le respect des délais."
                    />
                    <div className="mt-16 flex flex-row flex-wrap justify-center items-stretch gap-14">
                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">
                                Un code Durable & Documenté
                            </h3>
                            <p className="mt-4 text-[#687087]">
                                Je fournis un code sémantique, accessible (WCAG) et commenté, que vos équipes internes pourront facilement maintenir et faire évoluer.
                            </p>
                        </div>
                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">Vision Stratégique</h3>
                            <p className="mt-4 text-[#687087]">
                                Grâce à 10 ans en marketing, je comprends les enjeux business de vos clients. Je suis pro-active pour suggérer des améliorations ergonomiques, pas seulement exécuter. Nous regardons dans la même direction.
                            </p>
                        </div>
                        <div className="bg-light-bg p-8 rounded-lg max-w-2xs">
                            <h3 className="font-title text-xl font-bold text-(--color-dark-blue)">
                                Fiabilité & Délais
                            </h3>
                            <p className="mt-4 text-[#687087]">
                                Une communication claire et des livraisons dans les temps. Je m'engage sur un calendrier et je le tiens. C'est la base d'un partenariat sain.
                            </p>
                        </div>
                    </div>
                </Content>
            </Section>

            {/* ========= OFFRES ========= */}
            <OffersSection
                title="Ce que je peux faire pour vous"
                subtitle="Mes Services en Marque Blanche"
                offers={agenciesOffers}
                visibleNoteContent={false}
            />

            {/* <!-- ========= PORTFOLIO ========= --> */}
            <PortfolioSection
                portfolioData={portfolioCollection.filter(
                    (project) => project.category && project.category.includes('business'),
                )}
                portfolioTitle="Exemples de projets"
            />

            {/* <!-- ========= CALL TO ACTION ========= --> */}
            <CallToAction
                title="Prêt·e à renforcer votre équipe ?"
                subtitle="Que ce soit pour un projet ponctuel ou une collaboration récurrente, je suis prête à m'adapter à vos besoins. Discutons de vos projets."
                displaySeparation={false}

                isButton={true}
                linkText={`Plannifier un échange`.toUpperCase()}
                buttonAction={(e) => {
                    try {
                        const detail = e?.currentTarget ?? null;
                        window.dispatchEvent(new CustomEvent('contactOpener', { detail }));
                    } catch {}
                    open({ defaultView: 'schedule' });
                }}

                isSecondLink={true}
            />
        </div>
    );
};

export default WebAgency;
