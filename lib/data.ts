import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "University at Buffalo",
    location: "Buffalo, NY",
    description:
      "I graduated in 2019. I immediately found a job after completing my internship in Blockchain.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Developer",
    location: "Denver, CO",
    description:
      " I was responsible for creating user-friendly GUI interface using HTML5, CSS3, jQuery, Angular, NodeJS, AJAX, XML and JSON for DISH NATION",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },

  {
    title: "Computer Engineer",
    location: "Seattle, WA",
    description:
        " I was responsible for maintaining customer support application which used  HTML5, CSS3, jQuery, Angular, NodeJS, SpringBoot, XML and JSON for the Boeing Company",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },


  {
    title: "Web Developer",
    location: "Remote",
    description:
      "I am currently a developer for Ally Bank where I'm responsible for converting processes from existing outsourced COTs environments to an Outsystems low code internal environment using Outsystems, SQL, JavaScript, Java.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CMES Boeing",
    description:
      "I worked as a full-stack developer on this application which was responsible for Boeing 787 safety and maintenance. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ontech Services",
    description:
      "I was the front-end developer. Customers would use our websites to place maintenance order for Dish Nation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },


  {
    title: "Ally Black Ops",
    description:
      "Developer on converting processes from existing outsourced COTs environments to an Outsystems low code internal environment using Outsystems, SQL, JavaScript, Java.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "XML",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Oracle",
  "MS SQL",
  "Java",
  "AWS",
  "Outsystems",
  "RESTful API",
  "Elastic Beanstalk",
  "Elastic Search",
  "Maven",
  "Spring MVC",
  "Framer Motion",
] as const;
