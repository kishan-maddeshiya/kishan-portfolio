import { motion } from "framer-motion";
import experienceMetrics from "../../../constants/experienceMetrics";

function ExperienceMetrics() {
    return (
        <div className="experience-metrics">

            {experienceMetrics.map((item, index) => (

                <motion.div
                    key={item.id}
                    className="metric-card"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1
                    }}
                >

                    <h3>{item.value}</h3>

                    <p>{item.label}</p>

                </motion.div>

            ))}

        </div>
    );
}

export default ExperienceMetrics;