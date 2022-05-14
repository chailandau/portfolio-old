import Intro from "../components/Intro";
import Work from "../components/Work/Work";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <section id="intro">
                <Intro />
            </section>
            <section id="work">
                <Work />
            </section>

            <section id="about">
                <About />
            </section>
        </>
    );
};

export default Home;
