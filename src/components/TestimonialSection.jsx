const TestimonialSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ils m'ont fait confiance</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <p className="font-subtitle text-lg text-gray-700">
                            "Le processus de co-construction était incroyable. J'ai enfin un site qui me ressemble et
                            qui est simple à gérer. Le résultat est au-delà de mes attentes !"
                        </p>
                        <p className="mt-4 font-bold text-right">- Céline D., Illustratrice</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <p className="font-subtitle text-lg text-gray-700">
                            "Très pro et à l'écoute. Le site a immédiatement amélioré notre image de marque et nous
                            recevons beaucoup plus de demandes de devis qualifiées."
                        </p>
                        <p className="mt-4 font-bold text-right">- Patrick V., Artisan couvreur</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
