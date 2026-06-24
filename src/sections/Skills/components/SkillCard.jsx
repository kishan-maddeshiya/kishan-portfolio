// import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SkillCard({ skill, index }) {

    const Icon = skill.icon;

    // const ref = useRef(null);

    // const [animate, setAnimate] = useState(false);

    // useEffect(() => {

    //     const observer = new IntersectionObserver(

    //         ([entry]) => {

    //             if (entry.isIntersecting) {

    //                 setAnimate(true);

    //             }

    //         },

    //         {
    //             threshold: 0.4
    //         }

    //     );

    //     if (ref.current) {

    //         observer.observe(ref.current);

    //     }

    //     return () => observer.disconnect();

    // }, []);

    return (

        <motion.div
            // ref={ref}
            className="skill-card"

            initial={{
                opacity: 0,
                scale: 0.9
            }}

            whileInView={{
                opacity: 1,
                scale: 1
            }}

            viewport={{
                once: true
            }}

            transition={{
                duration: 0.35,
                delay: index * 0.08
            }}

        >

            <Icon
                className="skill-icon"
                style={{ color: skill.color }}
            />

            <h4>{skill.name}</h4>

            <span className="skill-level">

                {skill.level}

            </span>

            <div className="progress">

                <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{
                        width: `${skill.percentage}%`
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1
                    }}
                />

            </div>

            <span className="progress-text">

                {skill.percentage}%

            </span>

        </motion.div>

    );
}

export default SkillCard;