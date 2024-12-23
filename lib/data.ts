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
    location: "Detroit, Michigan",
    description: "Promoted to data engineer from software engineer. Optimized cloud-based data pipelines for financial data processing using AWS services like S3, AWS Glue, and Redshift. Developed ETL workflows, implemented real-time data processing with Kinesis, created financial dashboards with AWS Quicksight, and migrated legacy systems to cloud architecture, reducing costs by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Data Engineer",
    location: "Seattle, Washington",
    description: "Developed and optimized data pipelines for large-scale aerospace datasets at Boeing using AWS services. Built ETL processes, implemented real-time data processing, and designed business intelligence dashboards to provide insights for aerospace engineers and executives, improving decision-making speed by 80%.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Developer Intern",
    location: "Englewood, Colorado",
    description: "Designed and implemented a web application using Java, Spring Framework, JPA, SQL, XML, and JSP. Optimized database queries and utilized Spring MVC to promote code reusability and streamline testing.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Data Engineer",
    location: "United Nations",
    description: "Responsible for architecture/schema design, ETL processes, data pipeline optimization, monitoring, and AI/ML model deployment for global sustainability projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Cloud Data Warehouse for Financial Transactions",
    description: "Developed a real-time financial data processing pipeline using AWS Glue and Redshift, increasing operational efficiency by 20%. Implemented Kinesis Data Firehose to support real-time analysis of financial transactions.",
    tags: ["AWS Glue", "Redshift", "Kinesis", "Real-Time Data"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Business Intelligence Dashboard for Aerospace Operations",
    description: "Designed an automated reporting system using AWS Quicksight, reducing manual report generation by 80%. Integrated various aerospace data sources for near-real-time insights.",
    tags: ["AWS Quicksight", "ETL", "Real-Time Analytics"],
    imageUrl: rmtdevImg,
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
