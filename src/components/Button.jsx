import { Link } from 'react-router-dom';

const Button = ({ text, link, blank = false }) => {
    const linkProps = blank ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link
            to={link}
            {...linkProps}
            className="bg-(--color-accent) text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
        >
            {text}
        </Link>
    );
};

export default Button;
