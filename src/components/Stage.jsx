const Stage = ({ number, title, content }) => {
    return (
        <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-dark-blue)] rounded-full text-3xl font-bold mb-4">{number}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 max-w-xs">{content}</p>
        </div>
    );
};

export default Stage;