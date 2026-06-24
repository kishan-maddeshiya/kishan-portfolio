import { FiCheckCircle } from "react-icons/fi";
import strengths from "../../../constants/strengths";

function Strengths() {
    return (

        <div className="strengths">

            <h3 className="strength-title">
                What I Bring to the Table
            </h3>

            <div className="strength-grid">

                {strengths.map((item) => (

                    <div
                        key={item.id}
                        className="strength-item"
                    >

                        <FiCheckCircle />

                        <span>{item.title}</span>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Strengths;