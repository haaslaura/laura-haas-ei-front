import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { useCardFlip } from '../../hook/useCardFlip';

/**
 * Composant d'affichage d'une carte de projet dans le portfolio, avec effet de perspective 3D
 * La 1ère div donne l'effet de perspective.
 * Elle doit avoir une largeur/hauteur définie pour fonctionner (ici w-[25rem] h-[24rem])
 *
 * @param {Object} props
 * @param {string} props.title - Titre du projet.
 * @param {string} props.text - Description du projet.
 * @param {string} props.picture - Nom du fichier image à afficher (dans `assets/`).
 * @param {string} props.projectLink - Lien vers le projet (site ou démo).
 *
 * @returns {JSX.Element} Carte visuelle cliquable avec image et texte.
 */
const PortfolioCard = ({ title, text, picture, projectLink }) => {
    const { isFlipped, flipToBack, flipToFront, backBtnRef } = useCardFlip();

    return (
        <CardContainer isFlipped={isFlipped}>
            <CardFront
                title={title}
                text={text}
                picture={picture}
                projectLink={projectLink}
                flipToBack={flipToBack}
                isFlipped={isFlipped}
            />
            <CardBack
                title={title}
                flipToFront={flipToFront}
                isFlipped={isFlipped}
                backBtnRef={backBtnRef}
            />
        </CardContainer>
    );
};

export default PortfolioCard;
