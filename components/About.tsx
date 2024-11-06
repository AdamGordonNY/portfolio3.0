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
        I went to SUNY Farmingdale to get a Business Management degree out of
        high school in the 2000s, but the truth is I actually didn&apos;t know
        what I wanted to do professionally, and it took awhile to figure it out.
        After spending years working odd jobs in retail, service, and sales, I
        went back to college in 2019. I was successful and was promoted to a
        position of responsibility in my 3 year tenure in the Renewal By
        Andersen call center. I decided to switch majors to Computer Programming
        and Information Systems, in which I attained{" "}
        <span className="font-extrabold">
          a B.S. in Computer Programming and Information Systems from SUNY
          Farmingdale, Long Island, NY
        </span>
        .<br />
        <br /> Since early 2022, I&apos;ve worked in multiple
        <span className="text-xl font-medium"> Full-Stack Development </span>
        roles, as an intern, with an international company, a freelance
        developer, and contributing to a major Social Media prototype with
        Javascript Mastery.
        <span className="">
          I enjoy the challenge of learning new things and solving problems, and
          I like the idea of being able to create something with a team that can
          make lives <span className="font-bold italic">easier.</span>
        </span>{" "}
        My stack of choice is{" "}
        <span className="text-xl font-medium">
          NextJS 14, with TypeScript, and TailwindCSS,
        </span>{" "}
        with the{" "}
        <span className="text-xl font-medium">
          Laravel framework or .NET framework
        </span>{" "}
        coming in a close second a third. I am always looking to learn new
        technologies. I am currently looking for a{" "}
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
