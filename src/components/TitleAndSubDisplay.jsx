const TitleAndSubDisplay = ({ title, subtitleVisible = 'false', subtitleContent }) => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
            {subtitleVisible && subtitleContent && <p className="text-center text-gray-600 mb-12">{subtitleContent}</p>}
        </>
    );
};

export default TitleAndSubDisplay;
