import projects from "../../../constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
    return (
        <div className="projects-grid">

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}

        </div>
    );
}

export default ProjectGrid;