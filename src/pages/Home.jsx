import CallToAction from '../components/CallToAction';
import CardSection from '../components/CardSection';
import Hero from '../components/Hero';
import OffersSection from '../components/OffersSection';
import StageSection from '../components/StageSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <CardSection />
            <StageSection />
            <OffersSection />
            <TestimonialSection />
            <CallToAction
                title={"Prêt à donner vie à votre projet\u00A0?"}
                bigTitle={true}
                subtitle={"Contactez-moi pour un échange sans engagement. Le café est pour moi (même en visio)\u00A0!"}
                linkContent="Contactez-moi"
                link="/contact"
                linkAsButton={true}
                separation={true}
            />
            <CallToAction
                title={"Vous êtes une agence\u00A0?"}
                bigTitle={false}
                subtitle="Je collabore en marque blanche et propose des renforts fiables en développement front-end."
                linkContent="Contactez-moi"
                link="/contact"
                linkAsButton={false}
                separation={false}
            />
        </section>
    );
};

export default Home;
