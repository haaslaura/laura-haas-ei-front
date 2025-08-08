import TitleAndSubDisplay from '../TitleAndSubDisplay';
import Section from '../../layouts/Section';
import Content from '../../layouts/Content';
import PortfolioCard from './PortfolioCard';

/**
 * Affiche une section portfolio contenant une grille de projets.
 *
 * @param {Object} props
 * @param {Array} props.portfolioData - Tableau d'objets projet à afficher.
 *
 * @returns {JSX.Element} Section contenant les cartes de projets.
 */
const PortfolioSection = ({ portfolioData }) => {
    
    return (
        <Section
            bgColor="grey"
            paddingY="py-20"
        >
            <Content maxW="max-w-lg">
                <TitleAndSubDisplay
                    title="Ils se sont lancés avec succès"
                    subtitleVisible={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {portfolioData.map((project, i) => (
                        <PortfolioCard
                            key={project?.id}
                            title={project?.title}
                            picture={project?.cover}
                            frontText={project?.frontText}
                            projectLink={project?.link}
                            objective={project?.objective}
                            resultat={project?.resultat}
                            tech={project?.tech}
                        />
                    ))}
                </div>
            </Content>
        </Section>
    );
};

export default PortfolioSection;
