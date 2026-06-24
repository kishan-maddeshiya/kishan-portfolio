import "./Contact.css";

import Container from "../../components/common/Container/Container";

import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Button from "../../components/common/Button/Button";
import { scrollToSection } from "../../utils/scrollToSection";

function Contact() {
    return (
        <section
            id="contact"
            className="contact"
        >
            <Container>

                <div className="contact-header">

                    <span className="section-subtitle">
                        Get In Touch
                    </span>

                    <h2 className="section-title">
                        Contact Me
                    </h2>


                </div>

                <div className="contact-content">

                    <ContactInfo />

                    <ContactForm />

                </div>

            </Container>
        </section>
    );
}

export default Contact;