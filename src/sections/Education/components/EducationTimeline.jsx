import education from "../../../constants/education";
import EducationCard from "./EducationCard";

function EducationTimeline() {
    return (
        <div className="education-timeline">

            {education.map((item) => (
                <EducationCard
                    key={item.id}
                    item={item}
                />
            ))}

        </div>
    );
}

export default EducationTimeline;