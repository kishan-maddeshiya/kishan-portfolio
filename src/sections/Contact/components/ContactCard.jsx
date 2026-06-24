function ContactCard({ item }) {

    const Icon = item.icon;

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
        >
            <div className="contact-icon">
                <Icon />
            </div>

            <div className="contact-content-text">
                <h4>{item.title}</h4>
                <p>{item.value}</p>
            </div>
        </a>
    );
}

export default ContactCard;