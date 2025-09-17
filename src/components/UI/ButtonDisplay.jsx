const ButtonDisplay = ({ text, buttonAction }) => {

    return (
        <button
            onClick={buttonAction}
            className="cursor-pointer bg-(--color-accent) text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
        >
            {text}
        </button>
    );
};

export default ButtonDisplay;