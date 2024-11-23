"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="shadow-black/[0.03] dark:borderBlack/40 fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg backdrop-blur-[0.5rem] dark:bg-gray-950/75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-2 text-gray-100 transition hover:text-gray-100 dark:text-gray-300  dark:hover:text-gray-200 max-sm:text-[.7rem]",
                  {
                    "text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full ":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
