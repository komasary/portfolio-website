import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import UnitedN from "@/public/UnitedN.png";

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
    title: "Data Engineer",
    location: "United Nations",
    description:
        "Led schema design, ETL optimization, and AI deployment for global sustainability initiatives, driving data-driven insights on impactful projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Data Engineer",
    location: "Detroit, Michigan",
    description:
        "Promoted from software engineer to optimize financial data pipelines with AWS services. Developed ETL workflows, real-time processing with Kinesis, and dashboards using Quicksight, reducing costs by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Data Engineer",
    location: "Seattle, Washington",
    description:
        "Optimized aerospace data pipelines at Boeing using AWS Glue and Redshift. Built ETL workflows, integrated real-time processing, and created business intelligence dashboards, boosting decision-making efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Developer Intern",
    location: "Englewood, Colorado",
    description:
        "Designed a web app using Java, Spring Framework, and SQL. Streamlined database queries and promoted reusable, testable code with Spring MVC.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },

] as const;

export const projectsData = [
  {
    title: "Cloud Data Warehouse for Financial Transactions",
    description:
        "Developed a real-time financial data pipeline using AWS Glue and Redshift, increasing operational efficiency by 20%.",
    tags: ["AWS Glue", "Redshift", "Kinesis", "Real-Time Data"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Business Intelligence Dashboard for Aerospace Operations",
    description:
        "Designed a reporting system using AWS Quicksight, reducing manual efforts by 80%.",
    tags: ["AWS Quicksight", "ETL", "Real-Time Analytics"],
    imageUrl: rmtdevImg,
  },


  {
    title: "Data Migration and Low-Code Solutions for Banking",
    description:
        "Enhanced data pipelines and optimized workflows, reducing operational overhead by 25%.",
    tags: ["Outsystems", "SQL", "Java", "Low-Code"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "AI/ML Pipelines for Global Sustainability Projects",
    description:
        "Developed data pipelines and deployed AI/ML models for sustainability projects and ETL optimization for global-scale initiatives at the United Nations.",
    tags: ["AI/ML", "ETL", "Global Data"],
    imageUrl: UnitedN,


  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Java",
  "AWS",
  "Databricks",
  "Apache Spark",
  "Glue Crawler",
  "Kinesis Data Firehose",
  "Terraform",
  "Docker",
  "Jenkins",
  "Redshift",
  "AWS Glue",
  "AWS Quicksight",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
] as const;
