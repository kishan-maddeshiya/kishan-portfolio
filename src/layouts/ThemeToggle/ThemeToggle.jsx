import "./ThemeToggle.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    return (

        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >

            {
                theme === "dark"
                    ? <FiSun />
                    : <FiMoon />
            }

        </button>

    );

}

export default ThemeToggle;