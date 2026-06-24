import "./Experience.css";
import Container from "../../components/common/Container/Container";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ExperienceMetrics from "./components/ExperienceMetrics";
import ExperienceCTA from "./components/ExperienceCTA";

function Experience() {
    return (
        <section
            id="experience"
            className="experience"
        >
            <Container>

                <div className="experience-header">

                    <span className="section-subtitle">
                        My Journey
                    </span>

                    <h2 className="section-title">
                        Experience
                    </h2>

                </div>

                <ExperienceMetrics />

                <ExperienceTimeline />
                <ExperienceCTA />   

            </Container>
        </section>
    );
}

export default Experience;