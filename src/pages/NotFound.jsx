import { Link } from 'react-router-dom';
import TitleAndSubDisplay from '../components/UI/TitleAndSubDisplay';
import Content from '../layouts/Content';
import Section from '../layouts/Section';

const NotFound = () => {
    return (
        <Section
            bgColor="white"
            paddingY="py-20"
        >
            <Content maxW="max-w-3xl">
                <TitleAndSubDisplay
                    title="Erreur 404"
                    subtitleVisible={true}
                    subtitleContent="Oups... La page que vous cherchez n'existe pas."
                />
                <p className="text-center">
                    Il se peut que l'URL soit incorrecte ou que la page ait été déplacée ou supprimée.
                </p>
                <div className="flex flex-row items-center gap-2 mt-6">
                    👇
                    <p className="text-center">Mais voici un petit coup de pouce pour repartir du bon pied</p>
                    👇
                </div>
                <Link
                    to="/"
                    className="mt-4 inline-block font-bold text-(--color-dark-blue) p-4 hover:bg-(--color-accent) hover:rounded-lg "
                >
                    Revenir à l'accueil
                </Link>
            </Content>
        </Section>
    );
};

export default NotFound;
