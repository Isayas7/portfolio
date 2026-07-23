import bus from "/public/bus.png";
import portfolio from "/public/portfolio.png";
import productstore from "/public/productstore.png";
import campus from "/public/campus.png";
import marketPlace from "/public/market-place.png";
import book from "/public/book.png";
import qenget from "/public/qegnet.png";
import cargolink from "/public/cargolink.png"
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
   {
    name: "Experience",
    hash: "#experience",
  },
   {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const personalInfo = {
  name: "Isayas Melkamu",
  shortName: "Isayas",
  initials: "IM",
  title: "Full-Stack Software Developer",
  bio: "I build production-ready, scalable applications with a focus on high-performance web platforms, mobile solutions, and seamless user experiences.",
  aboutText: "I have a deep passion for developing dynamic, responsive websites and mobile applications. As a full-stack software developer, I specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, Express, React Native, and PostgreSQL/MongoDB databases. I pick up new technologies quickly, embrace challenging problems, and thrive in collaborative team environments to build exceptional digital products.",
  location: "Addis Ababa, Ethiopia",
  email: "isayas2024@gmail.com",
  github: "https://github.com/Isayas7",
  linkedin: "https://www.linkedin.com/in/isayas7/",
  resumeUrl: "/isayas-melkamu-resume.pdf",
  avatarUrl: "/isayas.png",
};

export interface ProjectItem {
  title: string;
  role: string;
  link: string;
  deploy: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData | string;
}

export const projectsData: ProjectItem[] = [
  {
    title: "Qegnet Platform",
    role: "Full-Stack Developer",
    link: "",
    deploy: "https://qegnet.et",
    description:
      "Online platform based in Ethiopia that offers a variety of challenge and competition-based opportunities for creators and participants.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    imageUrl: qenget,
  },
  {
    title: "CargoLink Logistics Management Platform",
    role: "Full Stack Developer",
    link: "",
    deploy: "",
    description:
      "A modern logistics management platform designed to streamline fleet, shipment, and financial operations for logistics companies.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Radix UI",
      "Firebase Firestore",
      "Firebase Auth",
    ],
    imageUrl: cargolink,
  },
  {
    title: "Market-Place Platform",
    role: "Full-Stack Developer",
    link: "https://github.com/Isayas7/market-place",
    deploy: "https://market-place-wku.vercel.app/",
    description:
      "Online Marketplace Platform built with React.js & Next.js 14, integrated with MongoDB database and Chapa Payment Processor.",
    tags: ["Next.js 14", "React", "MongoDB", "Chapa Payment", "Tailwind CSS"],
    imageUrl: marketPlace,
  },
  {
    title: "Book Store for Rent",
    role: "Full-Stack Developer",
    link: "https://github.com/Isayas7/book-rent-2f-capital",
    deploy: "https://book-store-2f-capital.vercel.app",
    description:
      "Book rental management platform utilizing Next.js 14, Express, PostgreSQL with Prisma ORM, and CASL for fine-grained authorization.",
    tags: ["Next.js 14", "Express", "Prisma", "CASL.js", "PostgreSQL"],
    imageUrl: book,
  },
  {
    title: "Campus Book Club App",
    role: "Mobile App Developer",
    link: "https://github.com/Isayas7/Campus-book-clubs",
    deploy: "download",
    description:
      "Campus mobile community app for book lovers to connect, organize discussions, and share recommended reads on campus.",
    tags: ["React Native", "Firebase Auth", "Firestore", "Mobile UX"],
    imageUrl: campus,
  },
  // {
  //   title: "Product Store Web App",
  //   role: "Full-Stack Developer",
  //   link: "https://github.com/Isayas7/product-store",
  //   deploy: "",
  //   description:
  //     "E-commerce product store web application with state management powered by Redux Toolkit, backed by Node.js, Express, and MongoDB.",
  //   tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
  //   imageUrl: productstore,
  // },
  {
    title: "Bus Reservation & Control",
    role: "Backend & System Architect",
    link: "https://github.com/Isayas7/Bus-Station-Management-System",
    deploy: "",
    description:
      "Comprehensive bus station reservation and transit management system built with PHP and MySQL database backend.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    imageUrl: bus,
  },
  // {
  //   title: "Personal Portfolio",
  //   role: "Frontend Developer",
  //   link: "https://github.com/Isayas7/portfolio",
  //   deploy: "",
  //   description:
  //     "Modern, responsive developer portfolio showcasing projects, experience, skills, and interactive features built with Next.js and Framer Motion.",
  //   tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   imageUrl: portfolio,
  // },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Python",
      "Java",
      "C++",
      "Prisma",
      "CASL.js",
      "REST APIs",
    ],
  },
  {
    name: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Firestore", "Vercel"],
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Agile / Scrum", "Responsive Design"],
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Redux Toolkit",
  "React Query",
  "Python",
  "Java",
  "C++",
] as const;

export interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
  logo?: string;
}

export const experienceData: ExperienceItem[] = [
 
  {
    title: "Full-Stack Software Developer",
    company: "2F Capital",
    type: "Full-Time",
    location: "Addis Ababa, Ethiopia",
    duration: "2024 - Present",
    description:
      "Architecting and developing custom full-stack web and mobile platforms for clients and enterprise products. Specializing in Next.js, Node.js APIs, and database architecture.",
    highlights: [
      "Developed high-traffic platform Qegnet.et using Next.js and PostgreSQL.",
      "Architected secure RBAC role authorization using CASL.js and Prisma ORM for Contest platforms.",
      "Integrated Payment gateway for automated local payment processing.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
  },
   {
    title: "Full Stack Developer",
    company: "Black Bridge Technology",
    type: "Remote, Part time",
    location: "Addis Ababa, Ethiopia",
    duration: "Aug 2024 - Present",
    description:
      "Architected comprehensive FinOps and Fleet modules for logistics systems, integrating multi-channel notification engines and developing end-to-end supply chain visibility solutions.",
    highlights: [
      "Cargo Link — Architected 'FinOps' and 'Fleet' modules to handle complex logistics workflows and financial reporting.",
      "Integrated multi-channel notification systems using Telegram API, Email, and in-app notifications.",
      "Developed end-to-end 'Quotex' and 'LogOps' modules for real-time supply chain visibility.",
    ],
    skills: ["Next.js", "TypeScript", "FinOps", "Fleet Management", "Telegram API", "Firebase"],
  },
  {
    title: "Software Developer Intern",
    company: "Wolkite University ICT Incubation Center",
    type: "Onsite, Internship",
    location: "Wolkite, Ethiopia",
    duration: "2023 - 2024",
    description:
      "Collaborated with cross-functional developer teams to build digital solutions, implement administrative tools, and refine software development workflows.",
    highlights: [
      "Participated in requirements gathering, software design, and database normalization.",
      "Built responsive UI components and backend REST API integrations.",
      "Conducted system testing, bug fixes, and performance optimizations.",
    ],
    skills: ["JavaScript", "React", "Node.js", "PHP", "MySQL", "Git"],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
  courses: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Wolkite University",
    duration: "2019 - 2024",
    details: "Graduated with strong academic foundation in software development, algorithm design, system architecture, and database management systems.",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (SQL)",
      "Web Application Development",
      "Mobile Application Development",
      "Software Testing & Quality Assurance",
    ],
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  modules: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    title: "Red Hat System Administration",
    issuer: "Red Hat",
    date: "2023",
    modules: [
      "Linux System Administration Essentials",
      "Command Line & User Management",
      "File System Permissions & Security",
      "System Storage & Process Management",
    ],
  },
  {
    title: "Red Hat Applications Development in Java EE",
    issuer: "Red Hat",
    date: "2023",
    modules: [
      "Enterprise Java Development",
      "RESTful Web Services",
      "Application Lifecycle Management",
      "Persistence & Context Dependency Injection",
    ],
  },
  {
    title: "NDG Linux Essentials",
    issuer: "Cisco Networking Academy",
    date: "2022",
    modules: [
      "Open Source Concepts & Linux OS",
      "Shell Scripting Fundamentals",
      "Network Configuration & Security",
    ],
  },
];
