import SimpleCard from './SimpleCard';

import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import FaceRetouchingNaturalRoundedIcon from '@mui/icons-material/FaceRetouchingNaturalRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import Section from '../layouts/Section';

const contentCardSection = [
    {
        icon: TipsAndUpdatesRoundedIcon,
        title: 'Vous lancez votre activité\u00A0?',
        content:
            'Créons ensemble un site professionnel pour poser des fondations solides et trouver vos premiers clients.',
        link: '/tarifs',
        linkContent: 'Découvrir les packs de démarrage →',
    },
    {
        icon: FaceRetouchingNaturalRoundedIcon,
        title: 'Votre site ne vous ressemble plus\u00A0?',
        content:
            'Modernisons votre présence en ligne avec un design qui reflète votre talent et attire les bons clients.',
        link: '/contact',
        linkContent: 'Faire le point sur votre site →',
    },
    {
        icon: InsightsRoundedIcon,
        title: 'Votre entreprise locale mérite mieux\u00A0?',
        content: 'Gagnez en visibilité et simplifiez vos prises de contact avec un site qui inspire confiance.',
        link: '/contact',
        linkContent: 'Demander un audit gratuit →',
    },
];

const CardSection = () => {
    return (
        <Section bgColor='grey' paddingY='py-26'>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quel est votre projet ?</h2>

            <div className="grid md:grid-cols-3 justify-center gap-8">
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
        </Section>
    );
};

export default CardSection;
