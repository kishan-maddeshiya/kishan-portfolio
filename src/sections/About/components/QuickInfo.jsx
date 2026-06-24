import aboutInfo from "../../../constants/aboutInfo";

function QuickInfo() {
    return (
        <div className="quick-info">

            {aboutInfo.map((item) => (

                <div
                    className="info-card"
                    key={item.id}
                >

                    <div className="info-icon">
                        {item.icon}
                    </div>

                    <div>

                        <h4>{item.title}</h4>

                        <p>{item.value}</p>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default QuickInfo;