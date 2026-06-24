import "./Hero.css";

import Container from "../../components/common/Container/Container";

import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import HeroStats from "./components/HeroStats";
import ScrollIndicator from "./components/ScrollIndicator";

function Hero() {
    return (
        <section id="hero" className="hero">

            <Container>

                <div className="hero-content">

                    <HeroContent />

                    <HeroImage />

                </div>

                <HeroStats />

                <ScrollIndicator />

            </Container>

        </section>
    );
}

export default Hero;