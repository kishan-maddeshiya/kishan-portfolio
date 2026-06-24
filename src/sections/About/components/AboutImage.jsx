import profile from "../../../assets/images/profile.png";

function AboutImage() {
    return (
        <div className="about-left">

            <div className="about-image-wrapper">

                {/* Decorative Background */}
                <div className="about-bg-circle"></div>

                {/* Profile Card */}
                <div className="about-image-card">

                    <img
                        src={profile}
                        alt="Kishan Maddeshiya"
                    />

                </div>

                {/* Open To Work Badge */}

                <div className="work-status">

                    <span className="status-dot"></span>

                    Available for Work

                </div>

                {/* Experience Badge */}

                <div className="experience-badge">

                    <h3>1+</h3>

                    <p>Year Internship Experience</p>

                </div>

            </div>

        </div>
    );
}

export default AboutImage;