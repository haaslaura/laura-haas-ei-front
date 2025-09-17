import { Link } from 'react-router-dom';
import Section from '../layouts/Section';
import Content from '../layouts/Content';
import { useContactModal } from '../store/useContactModal';

const LegalInfo = () => {
    const { open } = useContactModal();

    return (
        <>
            <Section
                bgColor="white"
                paddingY="py-10"
            >
                <Content maxW="max-w-3xl">
                    <h1 className="uppercase text-3xl md:text-4xl font-bold text-center mb-6">Mentions légales</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Éditrice du site</h2>
                    <p className="text-center">
                        <span className="font-bold">Laura Haas</span>
                    </p>
                    <p className="text-center">Entrepreneure individuel - Développeuse front-end</p>
                    <p className="text-center">
                        <span className="font-bold">SIRET</span> : 945 125 029 00013
                    </p>
                    <p className="text-center">Code APE : 62.01Z - Programmation informatique</p>
                    <p className="text-center">Adresse : 2 rue Schulmeister, 67100 Strasbourg - France</p>
                    <p className="text-center">
                        <span className="font-bold">Contact</span> : 06.37.98.28.73 ou merci d'utiliser le formulaire de
                        contact
                    </p>
                </Content>
            </Section>

            <Section
                bgColor="grey"
                paddingY="py-10"
            >
                <Content>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Hébergement du site</h2>
                    <p>
                        <Link
                            className="cursor-pointer underline underline-offset-2 hover:text-(--color-dark-blue) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-dark-blue) focus-visible:ring-offset-2 focus-visible:rounded-sm focus-visible:no-underline"
                            to="https://www.infomaniak.com/fr"
                            target="_blank"
                        >
                            Infomaniak
                        </Link>{' '}
                        Network SA
                    </p>
                    <p>Les Acacias, Genève, Suisse</p>
                </Content>
            </Section>

            <Section
                bgColor="white"
                paddingY="py-10"
            >
                <Content maxW="max-w-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Propriété intellectuelle</h2>
                    <p className="text-center">
                        L'ensemble des éléments du site (textes, images, graphismes, logo, code, etc.) est la propriété
                        exclusive de Laura Haas, sauf mention contraire.
                    </p>
                    <p className="text-center">
                        Toute reproduction, représentation, modification, publication ou adaptation, totale ou
                        partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans
                        autorisation écrite préalable.
                    </p>
                </Content>
            </Section>

            <Section
                bgColor="grey"
                paddingY="py-10"
            >
                <Content>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Responsabilité</h2>
                    <p className="text-center">
                        L'éditrice du site met tout en œuvre pour assurer l'exactitude des informations diffusées.
                        Toutefois, elle ne peut être tenu responsable des erreurs ou omissions, ni d'un usage
                        inapproprié des informations contenues sur le site.
                    </p>
                    <p className="text-center">
                        Le site peut contenir des liens hypertextes vers d'autres sites. L'éditrice ne saurait être tenu
                        pour responsable du contenu de ces sites tiers.
                    </p>
                </Content>
            </Section>

            <Section
                bgColor="white"
                paddingY="py-10"
            >
                <Content>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                        Protection des données personnelles (RGPD)
                    </h2>
                    <p className="text-center">
                        Les données collectées via le formulaire de contact (nom, adresse e-mail, message) sont
                        utilisées uniquement pour répondre aux demandes et ne sont conservées que le temps nécessaire au
                        traitement.
                    </p>
                    <p className="text-center">
                        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                        et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos
                        données.
                    </p>
                    <p className="text-center">
                        Pour exercer ce droit, vous pouvez écrire via{' '}
                        <button
                            className="cursor-pointer underline underline-offset-2 hover:text-(--color-dark-blue) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-dark-blue) focus-visible:ring-offset-2 focus-visible:rounded-sm focus-visible:no-underline"
                            onClick={open}
                        >
                            le formulaire de contact.
                        </button>
                    </p>
                </Content>
            </Section>

            <Section
                bgColor="grey"
                paddingY="py-10"
            >
                <Content>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">TVA</h2>
                    <p>TVA non applicable - article 293 B du CGI.</p>
                </Content>
            </Section>
        </>
    );
};

export default LegalInfo;
