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
        After enrolling for a degree in{" "}
        <span className="font-medium">Computer Engineering</span> in University at Buffalo to pursue my
        passion for programming. I completed my degree in 2019 where I familiarized myself with{" "}
        <span className="font-medium">Java/J2EE technologies, full stack web development, cloud computing, and server deployment</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.

      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        sports, binge watching mafia movies, and playing my guitar while humming along. I also enjoy{" "}
        <span className="font-medium">learning different languages to understand different cultures</span>. I am currently
        learning {" "}
        <span className="font-medium">dutch and also refreshing my spanish.</span>. I also enjoy  boxing in the ring, when
        I am not busy with my Engineering.
      </p>
    </motion.section>
  );
}
