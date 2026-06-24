import "./Footer.css";

import Container from "../../components/common/Container/Container";

import FooterLogo from "./components/FooterLogo";
import FooterLinks from "./components/FooterLinks";
import FooterSocial from "./components/FooterSocial";
import FooterBottom from "./components/FooterBottom";
import BackToTop from "./components/BackToTop";

function Footer() {
    return (
        <footer className="footer">

            <Container>

                <div className="footer-content">

                    <FooterLogo />

                    <FooterLinks />

                    <FooterSocial />

                </div>

                <FooterBottom />
                <BackToTop />

            </Container>

        </footer>
    );
}

export default Footer;