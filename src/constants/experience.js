import aprisityLogo from "../assets/logos/aprisity.png";
import projectLogo from "../assets/logos/project.png";
import infosysLogo from "../assets/logos/infosys.png";
import deloitteLogo from "../assets/logos/deloitte.png";
const experience = [
    {
        id: 1,
        company: "Infosys Springboard",
        role: "Full Stack MERN Developer Intern",
        duration: "5 Feb 2026 – 5 April 2026",

        logo: infosysLogo,
        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
            "Git"
        ],

        responsibilities: [
            "Developed responsive React.js interfaces",
            "Implemented reusable UI components",
            "Improved website responsiveness",
            "Worked with Git and GitHub"
        ]
    },

    {
        id: 2,
        company: "Deloitte",
        role: "Data Transformation & Integration",
        duration: "Jul 2025 · 1 month",

        logo: deloitteLogo,
        techStack: [
            "python",
            "CSV / Excel Data Processing",
            "Data Cleaning",
            "Data Transformation"
        ],

        responsibilities: [
            "Transformed and integrated data from multiple sources",
            "Cleaned and validated datasets using Python and Pandas",
            "Ensured data accuracy, consistency, and quality",
            "Applied data transformation techniques to support business insights"
        ]
    },

    {
        id: 3,
        company: "Personal Projects",
        role: "Full Stack .NET Developer",
        duration: "2024 - Present",

        logo: projectLogo,

        techStack: [
            "React",
            "Tailwind CSS",
            "Next.js",
            ".NET",
            "SQL Server",
            "REST API"
        ],

        responsibilities: [
            "Daily Expenses Tracker Platform",
            "WasteZero – Smart Waste Pickup and Recycling Platform ",
            "Integrated REST APIs",
            "Worked with ASP.NET Core and SQL Server"
        ]
    }
];

export default experience;