import {
    Code2,
    GraduationCap,
    Briefcase,
    Rocket,
    BookOpen,
    Zap,
    Database,
    Server,
    Mail,
    MapPin,
    FileUser,
    Layout,
    Smartphone,
    Globe,
    Palette
} from 'lucide-react';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

// Project images from public folder
const PROJECT_IMG_1 = "/portfolio.png";
const PROJECT_IMG_2 = "/brink.png";
const PROJECT_IMG_3 = "/royal.png";
const PROJECT_IMG_4 = "/mikrobot.png";
const PROJECT_IMG_5 = "/aeero.png";


export const SKILLS_CATEGORY = [
    {
        title: "Frontend Development",
        icon: Layout,
        description: "Building responsive and interactive user interfaces",
        skills: [
            { name: "React", level: 92, color: "bg-cyan-500" },
            { name: "JavaScript", level: 90, color: "bg-yellow-500" },
            { name: "TypeScript", level: 85, color: "bg-blue-500" },
            { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
        ],
    },
    {
        title: "Backend Development",
        icon: Server,
        description: "Creating robust server-side applications and APIs",
        skills: [
            { name: "Node.js", level: 88, color: "bg-green-500" },
            { name: "Express.js", level: 85, color: "bg-gray-500" },
            { name: "Python", level: 82, color: "bg-blue-600" },
            { name: "REST APIs", level: 90, color: "bg-purple-500" },
        ],
    },
    {
        title: "Database & Tools",
        icon: Database,
        description: "Managing data and development workflows",
        skills: [
            { name: "MongoDB", level: 85, color: "bg-green-600" },
            { name: "PostgreSQL", level: 80, color: "bg-indigo-500" },
            { name: "Git/GitHub", level: 92, color: "bg-orange-500" },
            { name: "Vercel/Render", level: 88, color: "bg-rose-500" },
        ],
    }
];

export const TECH_STACK = [
    "Next.js",
    "Vite",
    "Redux",
    "Framer Motion",
    "Sass/SCSS",
    "HTML5/CSS3",
    "Responsive Design",
    "RESTful APIs",
    "JWT Authentication",
    "Firebase",
    "Supabase",
    "Docker",
    "Figma",
    "VS Code",
    "Postman"
];

export const STATS = [
    { number: "4+", label: "Client Projects" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2+", label: "Years Experience" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Foster Oppong Portfolio",
        description: "A modern, responsive portfolio website showcasing professional work and skills. Built with React, featuring smooth animations, dark/light mode toggle, and optimized performance. Deployed on Render with full CI/CD pipeline.",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
        liveUrl: "https://foster-oppong.onrender.com/",
        // githubUrl: "https://github.com/data-detectiv",
        featured: true,
        category: "Portfolio"
    },
    {
        id: 2,
        title: "The Brink Global",
        description: "A professional business website for The Brink Global organization. Features modern design, responsive layouts, content management, and optimized SEO. Built with attention to brand identity and user experience.",
        image: PROJECT_IMG_2,
        tags: ["React", "Tailwind CSS", "Responsive Design", "SEO"],
        liveUrl: "https://www.thebrinkglobal.org/",
        // githubUrl: "https://github.com/data-detectiv",
        featured: true,
        category: "Business Website"
    },
    {
        id: 3,
        title: "Royal Child Academy",
        description: "An educational institution website featuring course information, enrollment systems, and parent resources. Built with modern web technologies, featuring intuitive navigation and mobile-first design principles.",
        image: PROJECT_IMG_3,
        tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
        liveUrl: "https://royalchildacademy.vercel.app/",
        // githubUrl: "https://github.com/data-detectiv",
        featured: false,
        category: "Education"
    },
    {
        id: 4,
        title: "Mikrobot Dashboard",
        description: "A comprehensive admin dashboard application with user authentication, data visualization, and real-time updates. Features secure login system, responsive charts, and intuitive user interface for managing robot systems.",
        image: PROJECT_IMG_4,
        tags: ["React", "Dashboard", "Authentication", "Charts"],
        liveUrl: "https://mikrobot-dashboard-n5xf.vercel.app/login",
        // githubUrl: "https://github.com/data-detectiv",
        featured: false,
        category: "Web Application"
    },
    {
        id: 5,
        title: "Aeero Landing Page",
        description: "A sleek, modern landing page with clean design and smooth animations. Built with attention to visual aesthetics and user experience, featuring responsive layouts and optimized performance.",
        image: PROJECT_IMG_5,
        tags: ["React", "Tailwind CSS", "Landing Page", "Responsive"],
        liveUrl: "https://mono-landing-six.vercel.app/",
        // githubUrl: "https://github.com/data-detectiv",
        featured: true,
        category: "Landing Page"
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2023-2027",
        title: "BSc. Mathematics",
        company: "Wingate University",
        description: "Relevant Coursework: Data Structures & Algorithms, Web Development, Database Systems, Software Engineering, Object-Oriented Programming, Computer Networks, UI/UX Design Principles",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
        year: "2024 - Present",
        title: "Freelance Web Developer",
        company: "Self-Employed",
        description: "Building custom websites and web applications for clients across various industries. Specializing in React-based solutions with modern UI/UX, responsive design, and performance optimization. Successfully delivered projects for educational institutions and global organizations.",
        icon: Briefcase,
        color: "bg-green-500"
    },
    {
        year: "2023 - 2024",
        title: "Web Development Learning Journey",
        company: "Self-Taught & Online Courses",
        description: "Intensive self-study in modern web development: React ecosystem, Node.js, database management, and deployment strategies. Completed projects and built portfolio while mastering frontend and backend technologies.",
        icon: BookOpen,
        color: "bg-purple-500"
    },
];

export const PASSIONS = [
    {
        icon: Palette,
        title: "Beautiful Interfaces",
        description: "Creating visually stunning and intuitive user experiences"
    },
    {
        icon: Rocket,
        title: "Performance Optimization",
        description: "Building fast, efficient applications that scale"
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Ensuring seamless experiences across all devices"
    },
    {
        icon: Zap,
        title: "Modern Technologies",
        description: "Staying current with the latest web development trends"
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/data-detectiv",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/foster-oppong/",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "Resume",
        icon: FileUser,
        url: "https://drive.google.com/file/d/1MHtLnUqtNyLxvSZLq72Vq8Bcyg2ihX-S/view?usp=sharing",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Charlotte, NC"
    },
    {
        icon: Mail,
        label: "Email",
        value: "oppongfoster89@gmail.com"
    },
];
