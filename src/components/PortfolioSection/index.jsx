import TitleAndSubDisplay from '../TitleAndSubDisplay';
import Section from '../../layouts/Section';
import Content from '../../layouts/Content';
import PortfolioCard from './PortfolioCard';


const PortfolioSection = ({ portfolioData }) => {
    
    return (
        <Section
            bgColor="grey"
            paddingY="py-20"
        >
            <Content maxW="max-w-5xl">
                <TitleAndSubDisplay
                    title="Ils se sont lancés avec succès"
                    subtitleVisible={false}
                />
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.map((project, i) => (
                        <PortfolioCard
                            key={project.id}
                            title={project.title}
                            text={project.text}
                        />
                    ))}
                </div>
            </Content>
        </Section>
    );
};

export default PortfolioSection;
