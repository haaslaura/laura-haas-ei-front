import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
    return (
        <Link
            to={link}
            className="bg-[var(--color-accent)] text-[var(--color-dark-blue)] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
        >
            {text}
        </Link>
    );
};

export default Button;
