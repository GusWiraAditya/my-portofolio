import cv from "../assets/cv/Curriculum vitae-Ida Bagus Aditya Cahya Wiraguna.pdf";

import profileDark from "../assets/profile/profile-dark.jpg";
import profileLight from "../assets/profile/profile-light.jpg";

import aboutDark from "../assets/about/about-dark.jpg";
import aboutLight from "../assets/about/about-light.jpg";

// hero
export const hero = {
  firstName: "Gus",
  lastName: "Wira",
  role: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  description: `A Full Stack Developer who enjoys crafting beautiful, functional web
          experiences. Whether it’s frontend design or backend logic, I love
          solving problems and building things people actually use.`,
  imageProfileLight: profileLight,
  imageProfileDark: profileDark,
  resume: cv,
  hire: "https://wa.me/628987940653",
};
export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/guswiraaditya/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.github.com/GusWiraAditya/",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.instagram.com/guswiiraaaa/",
    label: "Instagram",
    icon: "instagram",
  },
];

// about
export const aboutMe = {
  description: `  Detail-oriented and driven Software Engineering student with a strong foundation in full-stack web development using
Laravel, React.js, and Express.js. Proven leadership experience in academic software projects, with a focus on
responsive design, API integration, and database management. Demonstrates strong collaboration, problem-solving,
and project management skills, gained through internships and team-based development. Currently seeking an
opportunity to contribute to impactful software solutions in a forward-thinking tech company.`,
  imageAboutLight: aboutLight,
  imageAboutDark: aboutDark,
};

// technologies
export const technologies = [
  {
    name: "HTML",
    icon: "FaHtml5",
    color: "text-orange-500",
    level: "advanced",
  },
  { name: "CSS", icon: "FaCss3Alt", color: "text-blue-500", level: "advanced" },
  {
    name: "JavaScript",
    icon: "DiJavascript1",
    color: "text-yellow-400",
    level: "advanced",
  },
  {
    name: "JQuery",
    icon: "DiJqueryLogo",
    color: "text-blue-400",
    level: "advanced",
  },
  { name: "PHP", icon: "FaPhp", color: "text-indigo-600", level: "advanced" },
  {
    name: "Laravel",
    icon: "FaLaravel",
    color: "text-red-600",
    level: "advanced",
  },
  {
    name: "CodeIgniter",
    icon: "SiCodeigniter",
    color: "text-orange-600",
    level: "advanced",
  },
  { name: "MySQL", icon: "SiMysql", color: "text-blue-600", level: "advanced" },
  {
    name: "Bootstrap",
    icon: "FaBootstrap",
    color: "text-purple-600",
    level: "advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "text-cyan-400",
    level: "advanced",
  },
  {
    name: "PostgreSQL",
    icon: "SiPostgresql",
    color: "text-blue-500",
    level: "learning",
  },
  {
    name: "MongoDB",
    icon: "SiMongodb",
    color: "text-green-500",
    level: "learning",
  },
  {
    name: "React JS",
    icon: "FaReact",
    color: "text-cyan-300",
    level: "learning",
  },
  {
    name: "Express JS",
    icon: "SiExpress",
    color: "text-white",
    level: "learning",
  },
];
