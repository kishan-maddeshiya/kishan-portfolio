import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
function ProjectCard({ project }) {
    return (
        <div className="project-card">

            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />

            <div className="project-body">

                <h3>{project.title}</h3>

                <p>{project.description}</p>
                <div className="project-highlights">

                    {project.highlights?.map((item, index) => (

                        <div
                            key={index}
                            className="highlight-item"
                        >
                            ✓ {item}
                        </div>

                    ))}

                </div>

                <div className="project-tech">

                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="project-badge"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                <div className="project-actions">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                    >
                        <FaGithub />
                        Source Code
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                    >
                        <FiExternalLink />
                        Live Demo
                    </a>

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;