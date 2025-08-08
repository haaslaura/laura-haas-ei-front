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
 * @param {string} props.frontText - Description du projet.
 * @param {string} props.picture - Nom du fichier image à afficher (dans `assets/`).
 * @param {string} props.projectLink - Lien vers le projet (site ou démo).
 *
 * @returns {JSX.Element} Carte visuelle cliquable avec image et texte.
 */
const PortfolioCard = ({ title, frontText, picture, projectLink, objective, resultat, tech }) => {
    const { isFlipped, flipToBack, flipToFront, backBtnRef } = useCardFlip();

    return (
        <CardContainer isFlipped={isFlipped}>
            <CardFront
                title={title}
                frontText={frontText}
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
                objective={objective}
                resultat={resultat}
                tech={tech}
            />
        </CardContainer>
    );
};

export default PortfolioCard;
