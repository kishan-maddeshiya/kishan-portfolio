import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {

                setShowButton(true);

            } else {

                setShowButton(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <button
            className={`back-to-top ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Back To Top"
        >

            <FiArrowUp />

        </button>

    );

}

export default BackToTop;