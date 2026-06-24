const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact"
];

function FooterLinks() {
    return (
        <div className="footer-links">

            <h4>Quick Links</h4>

            <ul>

                {links.map((link) => (

                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}>
                            {link}
                        </a>
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default FooterLinks;