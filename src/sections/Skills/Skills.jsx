import "./Skills.css";
import Container from "../../components/common/Container/Container";

import SkillsHeader from "./components/SkillsHeader";
import SkillsGrid from "./components/SkillsGrid";
import { useState } from "react";
import SkillFilter from "./components/SkillFilter";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");


    const categories = [
        "All",
        "Frontend",
        "Backend",
        "Database",
        "Tools"
    ];

    return (
        <section id="skills" className="skills">

            <Container>

                <SkillsHeader />

                <SkillFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <SkillsGrid
                    activeCategory={activeCategory}
                    searchTerm={searchTerm} />

            </Container>

        </section>
    );
}

export default Skills;