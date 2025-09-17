import { Link } from 'react-router-dom';

const LinkDisplayLikeAButton = ({ text, tabIndex = 0, link, blank = false }) => {
    const linkProps = blank ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link
            to={link}
            tabIndex={tabIndex}
            {...linkProps}
            className="bg-(--color-accent) text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all whitespace-nowrap duration-300 ease-out hover:-translate-y-1"
        >
            {text}
        </Link>
    );
};

export default LinkDisplayLikeAButton;
