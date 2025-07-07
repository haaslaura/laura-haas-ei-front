import Stage from "./Stage";

const contentStageSection = [
    {
        number: "1",
        title: "Cadrage",
        content: "On définit vos objectifs et les besoins de vos clients.",
    },
    {
        number: "2",
        title: "Design",
        content: "On crée une maquette sur-mesure, belle et facile à utiliser.",
    },
    {
        number: "3",
        title: "Developpement",
        content: "Je transforme le design en un site rapide, fiable et sécurisé.",
    },
    {
        number: "4",
        title: "Livraison & Suivi",
        content: "Vous êtes propriétaire du site, et je reste là pour vous aider.",
    }
]

const StageSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Votre projet, étape par étape</h2>
                <div className="relative flex flex-col md:flex-row justify-between items-center text-center">

                    {/* Ligne de progression (visible sur desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 translate-y-[-50%] z-0"></div>
                    
                    {
                        contentStageSection.map((stage) => (
                            <Stage
                                key={`stage-${stage.number}`}
                                number={stage.number}
                                title={stage.title}
                                content={stage.content}
                            />
                        ))
                    }
                </div>
            </div>
            
        </section>
    );
};

export default StageSection;
