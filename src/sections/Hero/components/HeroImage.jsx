import profile from "../../../assets/images/profile.png";

function HeroImage() {

    return (

        <div className="hero-right">

            <div className="profile-wrapper">

                <div className="blob"></div>

                <img
                    src={profile}
                    alt="Kishan Maddeshiya"
                    className="profile-image"
                />

                <span className="tech react">
                    ⚛ React
                </span>

                <span className="tech dotnet">
                    💜 .NET
                </span>

                <span className="tech js">
                    🟨 JavaScript
                </span>

                <span className="tech sql">
                    🗄 SQL
                </span>

            </div>

        </div>

    );
}

export default HeroImage;