import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/screencapture-localhost-3000-2023-08-20-10_29_56.png";
import rmtdevImg from "@/public/treasury-today-logo.png";
import wordanalyticsImg from "@/public/download.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Intern",
    location: "KashTech Solutions",
    description:
      "Developing and maintaining web applications using Html,Css,Javascript and other related technologies.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.Implementing responsive design and ensuring cross-browser compatibility.Participating in code reviews and providing constructive feedback to other developers.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2021 - April 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Aiiots Geek World Private Limited",
    description:
      "Developing and maintaining web applications using React.js and other related technologies.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.Implementing responsive design and ensuring cross-browser compatibility.Participating in code reviews and providing constructive feedback to other developers.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Full Bright Commission",
    description:
      "I worked as a frontend developer on this  project. Users can give public feedback to companies.",
    tags: ["Html", "Sass", "Bootstrap", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Treasury Today",
    description:
      "The Treasury Today Group supply the best in international corporate treasury and finance news and intelligence. I was the front-end developer.",
    tags: ["Html", "Sass", "Bootstrap", "JavaScript", "WordPress"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Centurion Invest",
    description:
      "A public web app for  global platform for managing your digital finances.",
    tags: ["React", "Material Ui", "SQL", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
