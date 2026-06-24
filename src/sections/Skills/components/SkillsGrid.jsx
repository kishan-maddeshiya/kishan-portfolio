import skills from "../../../constants/skills";
import SkillCategory from "./SkillCategory";


function SkillsGrid({ activeCategory, searchTerm }) {

    const filteredSkills = skills
        .filter((category) => {

            if (
                activeCategory === "All"
            )
                return true;

            return (
                category.title ===
                activeCategory
            );
        })
        .map((category) => ({
            ...category,

            items: category.items.filter(
                (skill) =>
                    skill.name
                        .toLowerCase()
                        .includes(
                            searchTerm.toLowerCase()
                        )
            )
        }))
        .filter(
            (category) =>
                category.items.length > 0
        );

    return (

        <div className="skills-grid">

            {filteredSkills.map((category, index) => (

                <SkillCategory
                    key={category.id}
                    category={category}
                    index={index}
                />

            ))}

        </div>
    );
}

export default SkillsGrid;