const Content = ({ maxW = 'max-w-5xl', children }) => {
    return (
        <div
            className={`
            ${maxW}
            mx-2 py-4
            flex flex-col items-center
        `}
        >
            {children}
        </div>
    );
};

export default Content;
