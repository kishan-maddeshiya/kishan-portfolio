import stats from "../../../constants/stats";

function HeroStats() {

    return (

        <div className="hero-stats">

            {stats.map((item) => (

                <div
                    className="stat-card"
                    key={item.id}
                >

                    <h3>{item.value}</h3>

                    <p>{item.label}</p>

                </div>

            ))}

        </div>

    );
}

export default HeroStats;