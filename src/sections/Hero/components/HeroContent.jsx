import Button from "../../../components/common/Button/Button";
import { TypeAnimation } from "react-type-animation";
import HeroSocial from "./HeroSocial";
import resume from "../../../assets/resume/resume.pdf";
import { scrollToSection } from "../../../utils/scrollToSection";
function HeroContent() {
    return (
        <div className="hero-left">

            <span className="hero-greeting">
                Hello, I'm
            </span>

            <h1 className="hero-name">
                Kishan Maddeshiya
            </h1>

            <div className="hero-role">

                <TypeAnimation
                    sequence={[
                        "Full Stack .NET Developer",
                        2000,
                        "React.js Developer",
                        2000,
                        "ASP.NET Core Developer",
                        2000,
                        "Frontend Enthusiast",
                        2000,
                        "Backend Developer",
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />

            </div>

            <p className="hero-description">
                I build modern, scalable and user-friendly web applications using
                React, ASP.NET Core, SQL Server and REST APIs.
                Passionate about writing clean code and creating responsive user experiences.
            </p>

            <div className="hero-buttons">

                <Button
                    onClick={() => scrollToSection("contact")}
                >
                    Hire Me
                </Button>

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

            </div>

            <HeroSocial />

        </div>
    );
}

export default HeroContent;