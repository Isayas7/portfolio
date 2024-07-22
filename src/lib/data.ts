import bus from "/public/bus.png";
import campus from "/public/campus.png";
import marketPlace from "/public/market-place.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Market-place platform",
    link: "https://github.com/Isayas7/market-place",
    deploy: "https://market-place-wku.vercel.app/",
    description:
      "Online Marketplace Platform Using React.js with Next.js 14 framework and MongoDB with Chapa Payment Processor.",

    imageUrl: marketPlace,
  },
  {
    title: "Campus Book Club App",
    link: "https://github.com/Isayas7/Campus-book-clubs",
    deploy: "",

    description:
      "Campus Book Club App Using React native and firebase. It is where book lovers on campus can connect, discuss, and explore new reads together.",

    imageUrl: campus,
  },
  {
    title: "Bus Reservation and Control System",
    link: "https://github.com/Isayas7/Bus-Station-Management-System",
    deploy: "",

    description: "Bus Reservation and Control System with PHP.",

    imageUrl: bus,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
