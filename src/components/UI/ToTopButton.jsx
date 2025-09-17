import { useEffect, useState } from 'react';

/**
 * Floating button to scroll to the top of the page.
 * Appears in the bottom right-hand corner after a certain amount of scrolling.
 */
const ToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Remonter en haut"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-(--color-accent) text-white shadow-lg hover:bg-(--color-dark-blue) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block align-middle"
            >
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    );
};

export default ToTopButton;
