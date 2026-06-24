import contactInfo from "../../../constants/contactInfo";
import ContactCard from "./ContactCard";

function ContactInfo() {
    return (
        <div className="contact-info">

            <h3>
                Let's Connect
            </h3>

            <p>
                I'm open to internships, entry-level opportunities,
                freelance work, and exciting development projects.
            </p>

            <div className="contact-cards">

                {contactInfo.map((item) => (
                    <ContactCard
                        key={item.id}
                        item={item}
                    />
                ))}

            </div>

        </div>
    );
}

export default ContactInfo;