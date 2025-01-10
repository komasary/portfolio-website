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
        I earned my degree in <span className="font-medium">Computer Engineering</span> from the University at Buffalo in 2019, where I discovered a strong passion for <span className="font-medium">solving complex data challenges</span>. My academic background and professional experience have equipped me with expertise in <span className="font-medium">cloud computing, data pipeline optimization, and scalable data architecture</span> using technologies like AWS and Python. <span className="italic">What excites me most about data engineering</span> is the problem-solving process—I <span className="underline">excel</span> at designing efficient ETL workflows and building real-time analytics solutions that drive business insights.
      </p>
      <p>
        <span className="italic">Outside of work</span>, I’m passionate about boxing, exploring music theory to play guitar and piano, and embracing different cultures through <span className="font-medium">language learning</span>. I’m currently improving my <span className="font-medium">Spanish</span> and starting to explore <span className="font-medium">Dutch</span>. These interests foster curiosity and adaptability—qualities that I bring into every project I tackle.
      </p>


    </motion.section>
  );
}
