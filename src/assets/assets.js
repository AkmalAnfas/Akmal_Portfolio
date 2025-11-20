import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/Profile.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/Project2.webp';
import projectImg3 from '../assets/Project3.png';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import projectImg7 from '../assets/Hungry.jpg'


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I enjoy crafting unique solutions to challenging problems with creativity and modern approaches.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'I focus on creating visually appealing and user-friendly experiences in everything I build..',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write clear, maintainable, and efficient code following best practices and modern standards.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Next.js', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Springboot', 'FastAPI', 'Go' ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow and project management.',
    tags: ['GitHub', 'ClickUp', 'Figma', 'Jira']
  }
];



export const projects = [
  {
    title: "Book Store (Back-end)",
    description: "Developed a book store for Randloi, facilitating workflows between authors, and publishers with local features.",
    image: projectImg1,
    tech: ["Go", "RESTful API development", " Text file data strong (json)", "MVC architecture"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "https://github.com/AkmalAnfas/GoLangRestApi",
  },
  {
    title: "E-Commerce Platform",
    description: "Created a E-commerce platform complete with user friendly.",
    image: projectImg2,
    tech: ["React", "Spring Boot", "Spring Data JPA", "AWS (cloud-hosted environment)"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "https://github.com/AkmalAnfas/E-commerce-Spring-boot",
  },
  {
    title: "Unified Multi-Service Booking Platform",
    description: "A centralized multi-service booking platform for multiple user. (Final year thesis project)",
    image: projectImg3,
    tech: ["React", "Spring Boot", "Micro-Frontend", "MongoDB", "Docker", "Microservices"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "https://github.com/Easy-Booking/Eb_front-end",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Blogmium",
    description: "A user-friendly website for creating, managing, and reading blog posts.",
    image: projectImg5,
    tech: ["Express.js", "React.js and Tailwind CSS.", "Node.js", "MongoDB","Firebase"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Mini MCQ System",
    description: "Built a full-stack MCQ examination system where users can log in, select papers, submit answers, and view results. Integrated secure API communication between React frontend and Node.js backend.",
    image: projectImg6,
    tech: ["React", "Axios and React Router", "MongoDB", "RESTful APIs","Node.js","Express.js"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/AkmalAnfas/miniMCQSystem_be",
  },

    {
    title: "Hungry Mart | Mobile Application",
    description: "Developed a mobile app for a real food-truck business, allowing customers to browse the menu and place orders.",
    image: projectImg7,
    tech: ["React Native", "Spring Boot", "AWS Deployment", "RESTful APIs","Figma Prototype"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Software Engineer Intern",
    company: "Clancode Labs pvt ltd - Sri Lanka",
    duration: "2025 August - Present",
    description:
      " Worked on an AI-driven project, primarily handling the frontend using Next.js and collaborating with the backend built on FastAPI to create a seamless user experience.",
    color: "purple"
  }
];
