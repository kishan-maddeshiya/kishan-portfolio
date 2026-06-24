import { motion } from "framer-motion";
function ExperienceCard({ item, index }) {
    return (
        <motion.div className="experience-card"
            initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 0.5
            }}
        >

            <div className="experience-company">

                <img
                    src={item.logo}
                    alt={item.company}
                    className="company-logo"
                />

                <div>

                    <h4>{item.company}</h4>

                    <span className="experience-duration">
                        {item.duration}
                    </span>

                </div>

            </div>

            <h3>{item.role}</h3>

            <div className="experience-tech">

                {item.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="tech-badge"
                    >
                        {tech}
                    </span>
                ))}

            </div>

            <ul>

                {item.responsibilities.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}

            </ul>

        </motion.div>
    );
}

export default ExperienceCard;