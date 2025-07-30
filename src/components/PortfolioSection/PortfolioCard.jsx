const PortfolioCard = ({ title, text }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-xl group flex flex-col h-[400px] bg-dark-blue">
            {/* <a
                href={projectContent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-1/2 overflow-hidden"
                tabIndex={0}
            >
                <img
                    src={`https://placehold.co/600x400/0A192F/E6EFFF?text=${encodeURIComponent(projectContent.title)}`}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </a> */}
            <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-title text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-slate">{text}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
