import bus from "/public/bus.png";
import portfolio from "/public/portfolio.png";
import productstore from "/public/productstore.png";
import campus from "/public/campus.png";
import marketPlace from "/public/market-place.png";
import book from "/public/book.png";
import qenget from "/public/qegnet.png"

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
    title: "qegnet",
    link: "",
    deploy: "https://qegnet.et",
    description:
      "Online platform based in Ethiopia that offers a variety of challenge and competition based opportunities..",
    imageUrl: qenget,
  },
  {
    title: "Market-place platform",
    link: "https://github.com/Isayas7/market-place",
    deploy: "https://market-place-wku.vercel.app/",
    description:
      "Online Marketplace Platform Using React.js with Next.js 14 framework and MongoDB with Chapa Payment Processor.",

    imageUrl: marketPlace,
  },
  {
    title: "Book Store for Rent ",
    link: "https://github.com/Isayas7/book-rent-2f-capital",
    deploy: "https://book-store-2f-capital.vercel.app",
    description:
      "Book store for rent Using React.js with Next.js 14 framework, Express and posgresql with prisma and CASL for Authorization.",

    imageUrl: book,
  },
  {
    title: "Campus Book Club App",
    link: "https://github.com/Isayas7/Campus-book-clubs",
    deploy: "download",

    description:
      "Campus Book Club App Using React native and firebase. It is where book lovers on campus can connect, discuss, and explore new reads together.",

    imageUrl: campus,
  },
  {
    title: "Product Store",
    link: "https://github.com/Isayas7/product-store",
    deploy: "",

    description:
      "Product store web app Using React.js, MongoDB , express with redux toolkit for global state management .",

    imageUrl: productstore,
  },
  {
    title: "Portfolio",
    link: "https://github.com/Isayas7/portfolio",
    deploy: "",

    description: "Portfolio Website with Next.js.",

    imageUrl: portfolio,
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
  "Express",
  "Git",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "Mysql",
  "posgresql",
  "prisma",
  "Firebase",
  "Redux Toolkit",
  "React Query",
  "Python",
  "Java",
  "C++",
] as const;
