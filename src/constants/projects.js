import { IconBase } from "react-icons";
import Expenses from "../assets/projects/Landing_page.png";
import wastezero from "../assets/projects/wastezero.png";

const projects = [

    {
        id: 2,
        title: "WasteZero – Smart Waste Pickup and Recycling Platform",

        image: wastezero,

        description:
            "Developed a responsive user dashboard using React.js for scheduling waste pickups and tracking activities.",

        highlights: [
            "Pickup Scheduling System",
            "NGO & Volunteer Management",
            "Real-Time Activity Tracking"
        ],

        techStack: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js"
        ],

        github: "https://github.com/kishan-maddeshiya/wastezero-mern",

        demo: "http://Wastezero-frontend.onrender.com",

        featured: true
    },
    {
        id: 1,
        title: "Digital-Marketing-Landing-Page-MarketPro",

        image: Expenses,

        description:
            "Built a modern, responsive digital marketing landing page for MarketPro featuring service showcases, testimonials, lead-generation sections, and conversion-focused user experience using React.js and CSS3.",

        highlights: [
            "Marketing Service Showcase",
            "Customer Testimonials",
            "Fast Loading Performance",
            "SEO Optimization",
            "Engaging User Experience"
        ],

        techStack: [
            "React",
            "Tailwind CSS",
            "Framer-Motion",
            "React Icons"
        ],

        github: "https://github.com/kishan-maddeshiya/Digital-Marketing-Landing-Page-MarketPro-",

        demo: "https://digital-marketing-landing-page-mark.vercel.app/",

        featured: true
    },
];

export default projects;