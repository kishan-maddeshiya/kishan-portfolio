import { useEffect, useRef, useState } from "react";

function EducationCard({ item }) {

    const [visible, setVisible] = useState(false);

    const cardRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setVisible(true);

                    observer.unobserve(entry.target);

                }

            },

            {
                threshold: 0.25,
            }

        );

        if (cardRef.current) {

            observer.observe(cardRef.current);

        }

        return () => observer.disconnect();

    }, []);

    return (

        <div
            ref={cardRef}
            className={`timeline-item ${visible ? "show" : ""}`}
            style={{
                transitionDelay: `${item.id * 0.15}s`
            }}
        >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

                <span className="timeline-duration">
                    {item.duration}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <p className="timeline-score">
                    {item.score}
                </p>

                <p>{item.description}</p>

            </div>

        </div>

    );

}

export default EducationCard;