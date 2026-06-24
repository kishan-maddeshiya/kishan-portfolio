import {
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";

function FooterSocial() {
    return (
        <div className="footer-social">

            <h4>Connect</h4>

            <div className="social-icons">

                <a
                    href="https://github.com/kishan-maddeshiya"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/kishan-maddeshiya-9816a7255/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiLinkedin />
                </a>

                <a
                    href="mailto:kishanmaddeshiya03@gmail.com"
                >
                    <FiMail />
                </a>

                <a
                    href="#"
                >
                    <SiLeetcode />
                </a>

            </div>

        </div>
    );
}

export default FooterSocial;