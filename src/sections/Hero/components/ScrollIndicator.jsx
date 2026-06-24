import { FiArrowDown } from "react-icons/fi";

function ScrollIndicator() {

    return (

        <div
            className="scroll-indicator"
            onClick={() =>
                document
                    .getElementById("about")
                    .scrollIntoView({
                        behavior: "smooth",
                    })
            }
        >

            <div className="mouse">

                <span className="wheel"></span>

            </div>

            <span className="scroll-text">

                Scroll Down

            </span>

            <FiArrowDown className="scroll-arrow" />

        </div>

    );
}

export default ScrollIndicator;