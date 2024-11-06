"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/public/portrait.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsDownload } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="picture"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-228 w-28 rounded-2xl border-[0.05rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className=" mb-10 mt-4 px-4 text-center text-2xl font-medium !leading-normal sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m <span className="font-bold"> Adam Gordon. </span>I&apos;m a
        <span className="font-bold"> Software Engineer </span>based in the
        <span className="font-bold"> NYC Area. </span>I like to build Full Stack
        projects in current and flexible technologies like
        <span className=" font-bold ">
          {" "}
          NextJS (TSX) - .NET Core (C#) - Laravel (PHP) - Vue/NuxtJS (TSX).
        </span>
      </motion.p>
      <motion.div
        className="flex flex-col items-center justify-center gap-2  px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="0 group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition
          hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 group-hover:translate-x-1"
        >
          Contact Me Here
          <BsArrowRight className="opacity-70" />
        </Link>

        <Link
          className="border-black/10 group flex cursor-pointer items-center gap-2 rounded-full border bg-white p-4 text-gray-700 outline-none
        transition hover:scale-[1.15] hover:text-gray-950  focus:scale-[1.15] active:scale-105 "
          href="/resume.pdf"
        >
          Download CV{" "}
          <BsDownload className="group-hover:trahslate-x-1 opacity-60 transition" />
        </Link>
        <Link
          className="border-black/10 flex cursor-pointer items-center gap-2 rounded-full border bg-white p-4 text-gray-700
        transition hover:scale-[1.15] hover:text-gray-950  focus:scale-[1.15] active:scale-105"
          href="https://www.linkedin.com/in/adam-gordon119/"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="border-black/10 flex cursor-pointer items-center gap-2 rounded-full border bg-white  p-4 text-[1.35rem] text-gray-700
        transition hover:scale-[1.15] hover:text-gray-950  focus:scale-[1.15] active:scale-105"
          href="https://github.com/adamgordonny"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
