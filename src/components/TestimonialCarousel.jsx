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
        <div className="flex flex-row gap-2 items-center min-h-[400px] md:min-h-[500px]">
            {/* Flèche de gauche */}
            <button
                onClick={handlePrev}
                className="
                    bg-gray-200 hover:bg-gray-300 
                    rounded-full p-2 z-10
                "
                aria-label="Témoignage précédent"
            >
                &#8592;
            </button>

            {/* Caroussel */}
            <div
                key={fadeKey}
                className="
                flex flex-row gap-8 justify-center items-center
                max-w-4xl opacity-0 animate-fadeIn
            "
            >
                {visibleTestimonials.map((t, i) => (
                    <div
                        key={i}
                        className="
                            bg-gray-50 p-8 flex-1
                            rounded-lg shadow transition-shadow
                            max-w-md
                        "
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
