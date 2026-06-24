import techStack from "../../../constants/techStack";

function TechStack() {
    return (
        <div className="tech-stack">

            <h3 className="tech-title">
                Technologies I Work With
            </h3>

            <div className="tech-grid">

                {techStack.map((tech) => {

                    const Icon = tech.icon;

                    return (
                        <div
                            className="tech-card"
                            key={tech.id}
                        >
                            <Icon className="tech-icon" />

                            <span className="tech-name">
                                {tech.name}
                            </span>
                        </div>
                    );

                })}

            </div>

        </div>
    );
}

export default TechStack;