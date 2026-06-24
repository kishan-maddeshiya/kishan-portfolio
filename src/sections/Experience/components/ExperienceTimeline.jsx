import experience from "../../../constants/experience";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

function ExperienceTimeline() {
    return (
        <div className="experience-timeline">

            {experience.map((item, index) => (
                <div
                    key={item.id}
                    className="experience-item"
                >
                    <motion.div
                        className="experience-dot"
                        initial={{
                            scale: 0
                        }}
                        whileInView={{
                            scale: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.4
                        }}
                    />

                    <ExperienceCard item={item} index={index} />
                </div>
            ))}

        </div>
    );
}

export default ExperienceTimeline;