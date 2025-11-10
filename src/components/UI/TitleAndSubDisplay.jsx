/**
 * Affiche un titre principal avec un sous-titre optionnel en dessous.
 *
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.title - Titre principal à afficher.
 * @param {boolean} [props.subtitleVisible=false] - Indique si le sous-titre doit être affiché.
 * @param {string} [props.subtitleContent] - Contenu du sous-titre à afficher si `subtitleVisible` est vrai.
 *
 * @returns {JSX.Element} Composant affichant le titre et le sous-titre.
 */
const TitleAndSubDisplay = ({ title, subtitleVisible = 'false', subtitleContent }) => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
            {subtitleVisible && subtitleContent && <p className="text-center text-gray-600 mb-12">{subtitleContent}</p>}
        </>
    );
};

export default TitleAndSubDisplay;
