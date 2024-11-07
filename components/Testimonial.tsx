"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
interface TestimonialProps {
  name: string;
  description?: string | null;
  img?: string | null | undefined;
  idx: number;
}
const Testimonial = ({ name, description, img, idx }: TestimonialProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative  max-w-2xl overflow-visible rounded-lg transition hover:bg-gray-200 dark:text-white dark:hover:bg-white/20 sm:h-80 sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-72">
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {name}
            <li
              className="bg-black/[0.7] rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              key={idx}
            >
              {description && (
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {" "}
                  {description}
                </p>
              )}
            </li>
          </ul>
          {img && (
            <Image
              src={img}
              alt="Project I worked on"
              quality={95}
              width={600}
              height={400}
              className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-40 
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3

        group-even:group-hover:rotate-2 sm:block"
            />
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonial;
