"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Computer Engineering</span> from the University at Buffalo in 2019, I developed a deep passion for{" "}
        <span className="font-medium">solving complex data challenges</span>. My academic journey and professional experience have equipped me with expertise in{" "}
        <span className="font-medium">cloud computing, data pipeline optimization, and scalable data architecture using technologies like AWS and Python</span>.{" "}
        <span className="italic">My favorite part of data engineering</span> is the problem-solving aspect. I{" "}
        <span className="underline">thrive</span> on designing efficient ETL workflows and implementing real-time analytics solutions.
      </p>
      <p>
        <span className="italic">When I'm not working</span>, I enjoy boxing, understanding music theory to play guitar and piano, and immersing myself in diverse cultures by{" "}
        <span className="font-medium">learning new languages</span>. I am currently improving my{" "}
        <span className="font-medium">Spanish and exploring Dutch</span>. These hobbies keep me curious and adaptable—qualities that resonate in my professional approach.
      </p>

    </motion.section>
  );
}
