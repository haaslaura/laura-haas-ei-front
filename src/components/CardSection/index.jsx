// Icones
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import FaceRetouchingNaturalRoundedIcon from '@mui/icons-material/FaceRetouchingNaturalRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

// Import
import SimpleCard from './SimpleCard';
import Section from '../../layouts/Section';
import Content from '../../layouts/Content';
import TitleAndSubDisplay from '../TitleAndSubDisplay';

const contentCardSection = [
    {
        icon: TipsAndUpdatesRoundedIcon,
        title: 'Vous lancez votre activité\u00A0?',
        content:
            'Créons ensemble un site professionnel pour poser des fondations solides et trouver vos premiers clients.',
        link: '/projet-lancement',
        linkContent: 'Découvrir les packs de démarrage →',
    },
    {
        icon: FaceRetouchingNaturalRoundedIcon,
        title: 'Votre site ne vous ressemble plus\u00A0?',
        content:
            'Modernisons votre présence en ligne avec un design qui reflète votre talent et attire les bons clients.',
        link: '/professionnel-independant',
        linkContent: 'Faire le point sur votre site →',
    },
    {
        icon: InsightsRoundedIcon,
        title: 'Votre entreprise locale mérite mieux\u00A0?',
        content: 'Gagnez en visibilité et simplifiez vos prises de contact avec un site qui inspire confiance.',
        link: '/entreprise-locale',
        linkContent: 'Demander un audit gratuit →',
    },
];

const CardSection = () => {
    return (
        <Section
            bgColor="grey"
            paddingY="py-26"
        >
            <Content maxW="max-w-5xl">
                <TitleAndSubDisplay
                    title="Quel est votre projet ?"
                    subtitle=""
                />

                <div className="grid md:grid-cols-3 justify-center gap-8 mt-14">
                    {contentCardSection.map((card) => (
                        <SimpleCard
                            key={card.title}
                            icon={<card.icon fontSize="large" />}
                            title={card.title}
                            text={card.content}
                            link={card.link}
                            textLink={card.linkContent}
                        />
                    ))}
                </div>
            </Content>
        </Section>
    );
};

export default CardSection;
