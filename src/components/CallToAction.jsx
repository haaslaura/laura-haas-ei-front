import { Link } from 'react-router-dom';
import Button from './Button';

const CallToAction = ({
    title = 'Prêt à donner vie à votre projet\u00A0?',
    displayTitle = 'true',
    subtitle = 'Contactez-moi pour un échange sans engagement',
    linkContent = 'Contactez-moi',
    link = '/contact',
    displayLinkLikeAButton = 'true',
    displaySeparation = 'true',
}) => {
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

                {/* Display CtA button like a simple link or a button */}
                {displayLinkLikeAButton ? (
                    <Button
                        text={linkContent}
                        link={link}
                    />
                ) : (
                    <Link
                        to={link}
                        className="mt-3 inline-block font-bold text-[var(--color-accent)] hover:underline"
                    >
                        {linkContent}
                    </Link>
                )}
            </div>
        </section>
    );
};

export default CallToAction;
