import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import navigation from "../../constants/navigation";
import Button from "../../components/common/Button/Button";
import Container from "../../components/common/Container/Container";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import resume from "../../assets/resume/resume.pdf";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
        // console.log("Sections Found:", sections);
    }, []);

    // console.log("Active Section:", activeSection);

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <Container>
                <nav className="navbar-content">
                    {/* Logo */}

                    <div className="logo">
                        <span>KM</span>
                    </div>

                    {/* Desktop Menu */}

                    <ul className="nav-links">
                        {navigation.map((item) => (
                            <li
                                key={item.id}
                                className={activeSection === item.link ? "active" : ""}
                            >
                                <Link
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    to={item.link}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}

                    <div className="navbar-right">
                        <ThemeToggle />
                        <Button
                            variant="secondary"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = resume;
                                link.download = "resume.pdf";
                                link.click();
                            }}
                        >Download Resume</Button>
                    </div>

                    {/* Mobile Button */}

                    <button className="menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </nav>



                {/* Mobile Menu */}

                <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
                    {navigation.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}

                    <div className="mobile-actions">
                        <ThemeToggle />
                        <Button>Download Resume</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Navbar;