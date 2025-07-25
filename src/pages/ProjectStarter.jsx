import Hero from '../components/Hero';
import OfferCard from '../components/OfferCard';

const ProjectStarter = () => {
    return (
        <>
            <Hero
                title="Vous lancez votre projet ? Donnez-lui la meilleure vitrine."
                keyWord='meilleure'
                subtitle="Je vous accompagne pour créer un site web professionnel, clair et efficace, sans jargon technique et adapté à votre budget."
                buttonText="Discutons de votre projet, sans engagement"
                starsBg={false}
            />

            {/* ========= SECTION PACKS ========= */}
            <section class="py-20 md:py-28 bg-light-bg">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl md:text-4xl font-bold font-title text-center text-dark-space">
                        Des offres conçues pour démarrer sur des bases solides
                    </h2>

                    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {/* <!-- Pack Lancement --> */}

                        <OfferCard
                            title= 'Pack Lancement'
                            subtitle='Idéal pour démarrer'
                            price='À partir de 1200€'
                            features=""
                            buttonText='Voir les packs'
                            buttonLink='/contact'
                            activePopular={false}
                        />

                        <div class="bg-white rounded-lg shadow-md p-8 flex flex-col text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <h3 class="font-title text-2xl font-bold text-dark-space">Pack Lancement</h3>
                            <p class="text-slate mt-2">
                                à partir de{' '}
                                <strong class="text-3xl font-title font-bold text-dark-space">1 200 €</strong>
                            </p>
                            <p class="text-slate mt-4 flex-grow">
                                L'essentiel pour une première présence en ligne professionnelle et rassurante.
                            </p>
                            <ul class="text-left space-y-3 mt-8">
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Site vitrine 1 à 3 pages
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Design responsive (adapté mobile)
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Formulaire de contact
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Optimisation SEO de base
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Accompagnement contenu
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Pack Essentiel (Mis en avant) --> */}
                        <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col text-center border-2 border-accent relative transform scale-105">
                            <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-dark-space text-sm font-bold px-4 py-1 rounded-full">
                                Le plus choisi
                            </span>
                            <h3 class="font-title text-2xl font-bold text-dark-space">Pack Essentiel</h3>
                            <p class="text-slate mt-2">
                                à partir de{' '}
                                <strong class="text-3xl font-title font-bold text-dark-space">1 600 €</strong>
                            </p>
                            <p class="text-slate mt-4 flex-grow">
                                Un site plus complet pour développer votre image de marque et partager votre actualité.
                            </p>
                            <ul class="text-left space-y-3 mt-8">
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Site 3 à 5 pages
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Charte graphique légère
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Section blog (optionnel)
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>SEO de base
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Suivi post-livraison
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Pack Premium --> */}
                        <div class="bg-white rounded-lg shadow-md p-8 flex flex-col text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <h3 class="font-title text-2xl font-bold text-dark-space">Pack Premium</h3>
                            <p class="text-slate mt-2">
                                à partir de{' '}
                                <strong class="text-3xl font-title font-bold text-dark-space">2 500 €</strong>
                            </p>
                            <p class="text-slate mt-4 flex-grow">
                                La solution tout-en-un pour un site à fort impact et une stratégie de contenu solide.
                            </p>
                            <ul class="text-left space-y-3 mt-8">
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Site 5+ pages
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Blog & Animations
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Atelier définition de contenu
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Recommandations stratégiques
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-3">✓</span>Suivi prioritaire 1 mois
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
                        <p class="font-bold text-dark-space">
                            Modules en option pour tous les packs : CMS pour gérer votre contenu, SEO avancé,
                            newsletters, calendrier de réservation, etc.
                        </p>
                        <p class="mt-4 font-semibold italic text-dark-space">
                            Pour faciliter votre investissement, le règlement en plusieurs fois est possible sur toutes
                            les offres.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- ========= SECTION AUTRES OFFRES ========= --> */}
            <section class="py-20 md:py-28">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl md:text-4xl font-bold font-title text-center text-dark-space">
                        Besoin d'un coup de pouce ou d'un suivi ?
                    </h2>
                    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-light-bg p-8 rounded-lg">
                            <h3 class="font-title text-2xl font-bold text-accent">Offre “Cadrage & Conseil”</h3>
                            <p class="mt-2 text-xl font-bold text-dark-space">À partir de 250 €</p>
                            <p class="mt-4 text-slate">
                                Idéal avant de se lancer ! Un entretien de 1h30 à 2h pour définir clairement vos
                                objectifs, votre cible, et les fonctionnalités clés de votre futur site. Repartez avec
                                une vision claire.
                            </p>
                            <p class="mt-4 text-sm text-slate">
                                <strong class="text-slate">En option (sur devis) :</strong> création d'arborescence,
                                wireframes simples, rédaction de brief technique/créatif.
                            </p>
                            <a
                                href="#"
                                class="mt-6 inline-block font-bold text-accent hover:underline"
                            >
                                Me contacter pour un cadrage →
                            </a>
                        </div>
                        <div class="bg-light-bg p-8 rounded-lg">
                            <h3 class="font-title text-2xl font-bold text-accent">Offre “Maintenance & Évolutions”</h3>
                            <p class="mt-2 text-xl font-bold text-dark-space">Sur devis</p>
                            <p class="mt-4 text-slate">
                                Un site web vit. Je vous accompagne pour le garder à jour, performant et sécurisé :
                                mises à jour techniques, corrections, ajout de contenus, audits performance, etc.
                            </p>
                            <p class="mt-4 text-sm text-slate">
                                Accompagnement ponctuel ou régulier, selon les projets réalisés ensemble.
                            </p>
                            <a
                                href="#"
                                class="mt-6 inline-block font-bold text-accent hover:underline"
                            >
                                Discuter de la maintenance →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ========= MINI PORTFOLIO ========= --> */}
            <section class="py-20 md:py-28 bg-light-bg">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl md:text-4xl font-bold font-title text-center text-dark-space">
                        Ils ont lancé leur projet avec succès
                    </h2>
                    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="rounded-lg overflow-hidden shadow-xl group">
                            {/* <img src="https://placehold.co/600x400/0A192F/E6EFFF?text=Projet+Artisan" alt="Image du projet pour un artisan" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"> */}
                            <div class="p-6 bg-dark-space">
                                <h3 class="font-title text-xl font-bold text-white">Site Vitrine pour Artisan</h3>
                                <p class="mt-2 text-slate">
                                    Un site simple et élégant pour présenter son savoir-faire et faciliter les demandes
                                    de devis.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg overflow-hidden shadow-xl group">
                            {/* <img src="https://placehold.co/600x400/0A192F/E6EFFF?text=Projet+Coach" alt="Image du projet pour un coach" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"> */}
                            <div class="p-6 bg-dark-space">
                                <h3 class="font-title text-xl font-bold text-white">Site pour Coach Indépendant</h3>
                                <p class="mt-2 text-slate">
                                    Mise en avant de la personnalité, des offres de coaching et intégration d'un
                                    calendrier de réservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ========= SECTION RÉASSURANCE ========= --> */}
            <section class="py-20">
                <div class="container mx-auto px-6">
                    <div class="bg-dark-space text-center text-white p-10 md:p-16 rounded-lg">
                        <h2 class="text-3xl md:text-4xl font-bold font-title">Vous gardez le contrôle</h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-light-slate">
                            Mon but est de vous rendre autonome. Chaque site livré s'accompagne d'une{' '}
                            <strong class="text-accent">formation personnalisée</strong> pour que vous puissiez gérer
                            vos contenus simplement. Et je reste toujours disponible pour la suite.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectStarter;
