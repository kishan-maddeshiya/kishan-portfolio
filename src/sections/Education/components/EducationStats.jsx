import educationStats from "../../../constants/educationStats";

function EducationStats() {
    return (

        <div className="education-stats">

            {educationStats.map((item) => (

                <div
                    className="education-stat-card"
                    key={item.id}
                >

                    <h3>{item.value}</h3>

                    <p>{item.title}</p>

                </div>

            ))}

        </div>

    );
}

export default EducationStats;