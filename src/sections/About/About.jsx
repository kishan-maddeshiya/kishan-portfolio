import "./About.css";
import Container from "../../components/common/Container/Container";

import AboutContent from "./components/AboutContent";
import AboutImage from "./components/AboutImage";
import TechStack from "./components/TechStack";
import Strengths from "./components/Strengths";
import CTA from "./components/CTA";

function About() {
    return (
        <section id="about" className="about">

            <Container>

                <div className="about-header">

                    <span className="section-subtitle">
                        Get To Know Me
                    </span>

                    <h2 className="section-title">
                        About Me
                    </h2>

                </div>

                <div className="about-content">

                    <AboutImage />

                    <AboutContent />

                </div>
                <TechStack />
                <Strengths />
                <CTA />

            </Container>

        </section>
    );
}

export default About;