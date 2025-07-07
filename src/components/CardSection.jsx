import SimpleCard from "./SimpleCard";

const contentCardSection = [
    {
        title: "Vous lancez votre activité ?",
        content: "Créons ensemble un site professionnel pour poser des fondations solides et trouver vos premiers clients.",
        link: "/tarifs",
        linkContent: "Découvrir les packs de démarrage →",
    },
    {
        title: "Votre site ne vous ressemble plus ?",
        content: "Modernisons votre présence en ligne avec un design qui reflète votre talent et attire les bons clients.",
        link: "/contact",
        linkContent: "Faire le point sur votre site →",
    },
    {
        title: "Votre entreprise locale mérite mieux ?",
        content: "Gagnez en visibilité et simplifiez vos prises de contact avec un site qui inspire confiance.",
        link: "/contact",
        linkContent: "Demander un audit gratuit →",
    }
]

const CardSection = () => {
    return (
        <section className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quel est votre projet ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {
                    contentCardSection.map(((card) => (
                        <SimpleCard
                            key={card.title}
                            title={card.title}
                            text={card.content}
                            link={card.link}
                            textLink={card.linkContent}
                        />
                    )))
                }
            </div>
        </section>
    );
};

export default CardSection;
