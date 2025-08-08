// Structure + effet flip 3D

const CardContainer = ({ isFlipped, children }) => {
    return (
        <div
            className="w-[25rem] h-[26rem] group"
            style={{ perspective: '1500px' }}
        >
            <div
                className="relative w-full h-full"
                style={{
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    transition: 'transform 0.7s ease',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default CardContainer;
