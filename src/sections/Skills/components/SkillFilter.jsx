function SkillFilter({
    categories,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm
}) {
    return (
        <div className="skills-filter">

            <div className="filter-buttons">

                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            activeCategory === category
                                ? "filter-btn active"
                                : "filter-btn"
                        }
                        onClick={() =>
                            setActiveCategory(category)
                        }
                    >
                        {category}
                    </button>
                ))}

            </div>

            <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) =>
                    setSearchTerm(e.target.value)
                }
                className="skill-search"
            />

        </div>
    );
}

export default SkillFilter;