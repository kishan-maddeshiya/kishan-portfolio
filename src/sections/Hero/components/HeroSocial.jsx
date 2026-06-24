import {
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";

function HeroSocial() {
    return (

        <div className="hero-social">

            <a
                href="https://github.com/kishan-maddeshiya?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/kishan-maddeshiya-9816a7255/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiLinkedin />
            </a>

            <a href="kishanmaddeshiya03@gmail.com">
                <FiMail />
            </a>

            {/* <a
                href="https://leetcode.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiLeetcode />
            </a> */}

        </div>

    );
}

export default HeroSocial;