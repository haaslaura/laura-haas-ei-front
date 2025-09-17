import { Link } from 'react-router-dom';
import LinkDisplayLikeAButton from './UI/LinkDisplayLikeAButton';
import ButtonDisplay from './UI/ButtonDisplay';

/**
 * Composant CallToAction (CTA).
 *
 * Displays a customisable call-to-action section with title and subtitle,
 * and a button or link depending on the configuration.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.title] - Main CTA title (default: catchphrase).
 * @param {boolean|string} [props.displayTitle=true] - Defines whether the title is displayed as <h2> (true) or <h3> (false).
 * @param {string} [props.subtitle] - Subtitle/description text.
 * @param {boolean|string} [props.displaySeparation=true] - Displays a separation (border) below the block if true.
 *
 * @param {boolean} [props.isButton=true] - Determines whether the main action is a button (`true`) or a link (`false`).
 * @param {boolean} [props.isLinkAppearance=false] - If `true`, displays the action as a simple link (underlined text).
 * @param {string} [props.linkText='Contactez-moi'] - Text for the button or link.
 *
 * @param {Function|null} [props.buttonAction=null] - Function triggered when a button is clicked.
 * @param {string} [props.url=''] - Target URL if a link is used.
 * @param {boolean} [props.blank=false] - Opens the link in a new tab if `true`.
 *
 * @returns {JSX.Element}
 */
const CallToAction = ({
    title = 'Prêt à donner vie à votre projet\u00A0?',
    displayTitle = 'true',
    subtitle = 'Contactez-moi pour un échange sans engagement',
    displaySeparation = 'true',

    isButton = true,
    isLinkAppearance = false,
    linkText = 'Contactez-moi',

    buttonAction = null,

    url = '',
    blank = false,
}) => {
    return (
        <section className="bg-[var(--color-dark-blue)] text-white flex flex-col items-center">
            <div
                className={
                    'cta-lh-container max-w-md mx-4 py-16 text-center ' +
                    (displaySeparation ? 'border-b border-gray-700' : '')
                }
            >
                {/* Display CtA title */}
                {displayTitle ? (
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                ) : (
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                )}

                <p className="text-[var(--color-slate)] mb-8">{subtitle}</p>

                {/* Display a button for an action */}
                {/* Or display a link for the navigation */}
                {isButton ? (
                    isLinkAppearance ? (
                        <button
                            onClick={buttonAction}
                            className="underline underline-offset-2 text-accent font-semibold"
                        >
                            {linkText}
                        </button>
                    ) : (
                        <ButtonDisplay
                            text={linkText}
                            buttonAction={buttonAction}
                        />
                    )
                ) : isLinkAppearance ? (
                    <Link
                        to={url}
                        blank={blank}
                    >
                        {linkText}
                    </Link>
                ) : (
                    <LinkDisplayLikeAButton
                        text={linkText}
                        link={url}
                        blank={blank}
                    />
                )}
            </div>
        </section>
    );
};

export default CallToAction;
