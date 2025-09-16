import { Link } from 'react-router-dom';
import Button from './Button';
import { useContactModal } from '../store/useContactModal';

const CallToAction = ({
    title = 'Prêt à donner vie à votre projet\u00A0?',
    displayTitle = 'true',
    subtitle = 'Contactez-moi pour un échange sans engagement',
    linkContent = 'Contactez-moi',
    isLink = false,
    buttonLink = '',
    displaySeparation = 'true',
}) => {

    const { open } = useContactModal();

    return (
        <section className="bg-[var(--color-dark-blue)] text-white flex flex-col items-center">
            <div
                className={
                    'cta-lh-container mx-4 py-16 text-center ' + (displaySeparation ? 'border-b border-gray-700' : '')
                }
            >
                {/* Display CtA title */}
                {displayTitle ? (
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                ) : (
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                )}

                <p className="text-[var(--color-slate)] mb-8">{subtitle}</p>

                {/* Display a link or a button */}
                {isLink ? (
                    <Button
                        text={linkContent}
                        link={buttonLink}
                    />
                ) : (
                    <button
                        onClick={open}
                        className="mt-3 inline-block font-bold text-[var(--color-accent)] hover:underline"
                    >
                        {linkContent}
                    </button>
                )}
            </div>
        </section>
    );
};

export default CallToAction;
