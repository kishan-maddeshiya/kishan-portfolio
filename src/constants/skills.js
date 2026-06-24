import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaDatabase,
    FaMicrosoft,
    FaNodeJs,

} from "react-icons/fa";

import {
    SiDotnet,
    SiMysql,
    SiPostman,
    SiTailwindcss,
    // SiVisualstudio,
    // SiVisualstudiocode,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const skills = [
    {
        id: 1,
        title: "Frontend",
        items: [

            {
                id: 1,
                name: "HTML5",
                icon: FaHtml5,
                level: "Intermediate",
                color: "#E34F26",
                percentage: 85
            },
            {
                id: 2,
                name: "CSS3",
                icon: FaCss3Alt,
                level: "Intermediate",
                color: "#1572B6",
                percentage: 80
            },
            {
                id: 3,
                name: "JavaScript",
                icon: FaJsSquare,
                level: "Intermediate",
                color: "#F7DF1E",
                percentage: 80
            },
            {
                id: 4,
                name: "React.js",
                icon: FaReact,
                level: "Intermediate",
                color: "#61DAFB",
                percentage: 80
            },
            {
                id: 5,
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                level: "Intermediate",
                color: "#06B6D4",
                percentage: 80
            },
        ]
    },

    {
        id: 2,
        title: "Backend",
        items: [
            {
                id: 1,
                name: ".NET Core",
                icon: SiDotnet,
                level: "Intermediate",
                color: "#512BD4",
                percentage: 70
            },
            {
                id: 2,
                name: "C#",
                icon: FaCode,
                level: "Intermediate",
                color: "#68217A",
                percentage: 80
            },
            {
                id: 3,
                name: "Node.js",
                icon: FaNodeJs,
                level: "Intermediate",
                color: "#339933",
                percentage: 80
            }
        ]
    },

    {
        id: 3,
        title: "Database",
        items: [
            {
                id: 1,
                name: "MongoDB",
                icon: DiMongodb,
                level: "Intermediate",
                color: "#47A248",
                percentage: 75
            },

            {
                id: 2,
                name: "SQL Server",
                icon: FaDatabase,
                level: "Intermediate",
                color: "#CC2927",
                percentage: 75
            },

        ]
    },

    {
        id: 4,
        title: "Tools",
        items: [
            {
                id: 1,
                name: "Git",
                icon: FaGitAlt,
                level: "Intermediate",
                color: "#F05032",
                percentage: 70
            },
            {
                id: 2,
                name: "GitHub",
                icon: FaGithub,
                level: "Intermediate",
                color: "#24292E",
                percentage: 75
            },
            {
                id: 3,
                name: "VS Code",
                icon: FaCode,
                level: "Intermediate",
                color: "#5D9CEA",
                percentage: 85
            },
            {
                id: 4,
                name: "Visual Studio",
                icon: FaMicrosoft,
                level: "Intermediate",
                color: "#5D9CEA",
                percentage: 85
            },
            {
                id: 5,
                name: "Postman",
                icon: SiPostman,
                level: "Intermediate",
                color: "#FF6C37",
                percentage: 75
            }
        ]
    }
];

export default skills;