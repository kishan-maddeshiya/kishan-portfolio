import "./Education.css";

import Container from "../../components/common/Container/Container";
import EducationTimeline from "./components/EducationTimeline";
import EducationStats from "./components/EducationStats";
import Certificates from "./components/Certificates";

function Education() {
    return (
        <section
            id="education"
            className="education-section"
        >
            <Container>

                <div className="education-header">

                    <span className="section-subtitle">
                        My Academic Journey
                    </span>

                    <h2 className="section-title">
                        Education
                    </h2>

                </div>

                <div className="education-content">


                    <EducationTimeline />
                    <EducationStats />
                    <Certificates />
                </div>

            </Container>
        </section>
    );
}

export default Education;