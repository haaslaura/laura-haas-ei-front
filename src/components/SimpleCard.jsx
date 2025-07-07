import { Link } from "react-router-dom";

const SimpleCard = ({ title, text, link, textLink }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{text}</p>
            <Link to={link} className="font-bold text-[var(--color-dark-blue)] hover:text-[var(--color-accent)]">{textLink}</Link>
        </div>
    );
};

export default SimpleCard;