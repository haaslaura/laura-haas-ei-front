const styleOptions = {
    white: {
        background: 'bg-white',
    },
    grey: {
        background: 'bg-(--color-light-bg)',
    },
};

const Section = ({
    bgColor = 'grey',
    paddingY = 'py-20',
    children
}) => {

    const styles = styleOptions[bgColor] || styleOptions.grey;

    return (
        <section className={`${paddingY} ${styles.background}`}>
            {children}
        </section>
    );
}


export default Section;