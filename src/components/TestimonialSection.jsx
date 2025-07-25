import testimonials from '../data/customerTestimonials.json';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="flex flex-col items-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ils m'ont fait confiance</h2>

                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </section>
    );
};

export default TestimonialSection;
