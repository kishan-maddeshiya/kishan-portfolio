import Button from "../../../components/common/Button/Button";
import resume from "../../../assets/resume/resume.pdf";

function ExperienceCTA() {
    return (
        <div className="experience-cta">

            <h3>
                Ready to Build Something Great Together?
            </h3>

            <p>
                I'm currently open to Full Stack .NET,
                React.js and Frontend Developer opportunities.
                Let's connect and create impactful products.
            </p>

            <div className="experience-cta-buttons">

                <Button
                    onClick={() =>
                        window.open(resume, "_blank")
                    }
                >
                    View Resume
                </Button>

                <Button variant="outline"
                    variant="outline"
                    onClick={() =>
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            })
                    }
                >
                    Contact Me
                </Button>

            </div>

        </div>
    );
}

export default ExperienceCTA;