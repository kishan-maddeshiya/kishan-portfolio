import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function SkillCategory({ category, index }) {

    return (

        <motion.div
            className="skill-category"

            initial={{
                opacity: 0,
                y: 60
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            viewport={{
                once: true,
                amount: 0.3
            }}

            transition={{
                duration: 0.6,
                delay: index * 0.2
            }}
        >

            <h3>{category.title}</h3>

            <div className="skill-list">

                {category.items.map((skill, index) => (

                    <SkillCard
                        key={skill.id}
                        skill={skill}
                        index={index}
                    />

                ))}

            </div>

        </motion.div>

    );
}

export default SkillCategory;