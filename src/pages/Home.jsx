import CardSection from '../components/CardSection';
import Hero from '../components/Hero';
import StageSection from '../components/StageSection';

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <CardSection />
            <StageSection />
        </section>
    );
};

export default Home;