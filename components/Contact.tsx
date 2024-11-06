"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions/actions";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly{" "}
        <a className="underline" href="mailto:adamgordon119@gmail.com">
          here
        </a>{" "}
        or through this form.
      </p>

      <form
        className="dark:text-black mt-10 flex flex-col"
        action={async (formData) => {
          // eslint-disable-next-line no-unused-vars
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="borderBlack dark:bg-opacity-80/80 dark:focus:bg-opacity-100/100 h-14 rounded-lg px-4 transition-all dark:bg-white dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack dark:bg-opacity-80/80 dark:focus:bg-opacity-100/100 my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
