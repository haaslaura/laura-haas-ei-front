import Section from '../../layouts/Section';
import testimonials from '../../data/customerTestimonials.json';
import TestimonialCarousel from './TestimonialCarousel';
import Content from '../../layouts/Content';
import TitleAndSubDisplay from '../TitleAndSubDisplay';

const TestimonialSection = () => {
    return (
        <Section
            bgColor="white"
            paddingY="py-20"
        >
            <Content maxW="max-w-5xl">
                <TitleAndSubDisplay
                    title="Ils m'ont fait confiance"
                    subtitleVisible={false}
                    subtitle=""
                />

                <TestimonialCarousel testimonials={testimonials} />
            </Content>
        </Section>
    );
};

export default TestimonialSection;
