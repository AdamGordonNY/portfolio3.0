"use client";
import React from "react";
import SectionHeader from "./SectionHeader";

import { testimonials } from "@/lib/data";
import Testimonial from "./Testimonial";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section id="testimonials" className="mb-28 scroll-mt-28">
      <SectionHeader>Testimonials and Certifications</SectionHeader>
      <Image
        src="/cert.png"
        width={600}
        height={400}
        alt="certs"
        className="my-10"
      />
      <div>
        {testimonials.map((test, idx) => (
          <React.Fragment key={test.name}>
            <Testimonial {...test} idx={idx} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
