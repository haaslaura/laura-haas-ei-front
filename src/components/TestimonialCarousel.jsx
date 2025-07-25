import { useEffect, useState } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [fadeKey, setFadeKey] = useState(0);

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
        };
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const maxIndex = testimonials.length;

    const handlePrev = () => {
        const newIndex = (index - 1 + maxIndex) % maxIndex;
        setIndex(newIndex);
        setFadeKey(Date.now());
    };

    const handleNext = () => {
        const newIndex = (index + 1) % maxIndex;
        setIndex(newIndex);
        setFadeKey(Date.now());
    };

    const visibleTestimonials = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
    }

    return (
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {/* Flèche de gauche */}
            <button
                onClick={handlePrev}
                className="
                    absolute left-0 top-1/2 -translate-y-1/2 
                    bg-gray-200 hover:bg-gray-300 
                    rounded-full p-2 z-10
                "
                aria-label="Témoignage précédent"
            >
                &#8592;
            </button>

            {/* Caroussel */}
            {/* <div
                key={fadeKey}
                className="
                    grid grid-cols-1 md:grid-cols-2 gap-8 
                    max-w-4xl w-full
                    justify-items-center 
                    opacity-0 animate-fadeIn
                "
            >
                {visibleTestimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 p-8 rounded-lg shadow transition-shadow"
                    >
                        <p className="font-subtitle text-lg text-gray-700">"{t.text}"</p>
                        <p className="mt-4 font-bold text-right">{t.author}</p>
                    </div>
                ))}
            </div> */}
            <div
                key={fadeKey}
                className="flex flex-row flex-nowrap justify-center gap-8 max-w-4xl w-full opacity-0 animate-fadeIn"
            >
                {visibleTestimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 p-8 rounded-lg shadow transition-shadow max-w-md"
                    >
                        <p className="font-subtitle text-lg text-gray-700">"{t.text}"</p>
                        <p className="mt-4 font-bold text-right">{t.author}</p>
                    </div>
                ))}
            </div>

            {/* Flèche de droite */}
            <button
                onClick={handleNext}
                className="
                    absolute right-0 top-1/2 -translate-y-1/2 
                    bg-gray-200 hover:bg-gray-300 
                    rounded-full p-2 z-10
                "
                aria-label="Témoignage suivant"
            >
                &#8594;
            </button>
        </div>
    );
};

export default TestimonialCarousel;
