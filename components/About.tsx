"use client";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
// import useSectionInView from "../hooks/useSectionView";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        BS in Computer Programming and Information Systems from SUNY
        Farmingdale, Long Island, NY. Since early 2022, I&rsquo;ve worked in
        multiple Full-Stack Development roles, as an intern, with an
        international company, a freelance developer, and contributing to a
        major Social Media prototype with Javascript Mastery. I enjoy the
        challenge of learning new things and solving problems, and I like the
        idea of being able to create something with a team that can make lives
        easier. My stack of choice is NextJS with TypeScript, and TailwindCSS.
        I&rsquo;ve also worked with the LAMP Stack, and the .NET framework at a
        professional lvel. I am currently looking for a Full-Time Position in a
        field that uses all my talents, preferably in the NYC area. I am open to
        remote work or even relocating if the opportunity is right.
        <br />
        <br />I am currently looking for a{" "}
        <span className="text-xl font-bold">Full-Time Position</span> in a field
        that uses all my talents, preferably in the NYC area. I am open to
        remote work or even relocating if the opportunity is right.
      </p>

      <p>
        When I&apos;m not working on my career, I{" "}
        <span className="bold">enjoy</span> playing golf, reading up on ,
        Psychology, and History. I also try to maintain a work life balance and
        like to spend time at the gym, because of the increasing importance of
        maintaining physical and mental health.
      </p>
    </motion.section>
  );
}
