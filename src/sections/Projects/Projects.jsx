import "./Projects.css";

import Container from "../../components/common/Container/Container";

import ProjectGrid from "./components/ProjectGrid";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
    return (
        <section
            id="projects"
            className="projects"
        >
            <Container>

                <div className="projects-header">

                    <span className="section-subtitle">
                        My Work
                    </span>

                    <h2 className="section-title">
                        Projects
                    </h2>

                </div>

                <ProjectGrid />

            </Container>
        </section>
    );
}

export default Projects;