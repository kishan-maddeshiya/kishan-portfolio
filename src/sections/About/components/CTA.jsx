import Button from "../../../components/common/Button/Button";
import { scrollToSection } from "../../../utils/scrollToSection";
import resume from "../../../assets/resume/resume.pdf";

function CTA() {

    return (

        <div className="about-cta">

            <h2>
                Interested in Working Together?
            </h2>

            <p>

                I'm actively seeking opportunities as a Full Stack .NET Developer,
                React.js Developer, or Web Developer.
                I'm passionate about building modern, scalable,
                and user-friendly web applications and would love to contribute
                to meaningful projects and innovative teams.
            </p>

            <div className="cta-buttons">

                <Button
                    variant="secondary"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = resume;
                        link.download = "resume.pdf";
                        link.click();
                    }}
                >
                    Download Resume
                </Button>

                <Button variant="outline"
                    onClick={() => scrollToSection("contact")} >
                    Contact Me
                </Button>

            </div>

        </div>

    );
}

export default CTA;