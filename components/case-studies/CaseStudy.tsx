import type { CaseStudy } from "@/lib/types";
import React from "react";
import Image from "next/image";
const CaseStudyPage = async ({
  caseStudy,
  key,
}: {
  caseStudy: CaseStudy;
  key: string;
}) => {
  return (
    <section className="satoshi mx-[15%]  flex flex-col items-center justify-center ">
      <h1 className="sans-serif modern-h1 text-center dark:text-white">
        {caseStudy?.title}
      </h1>
      <br />
      <h2 className="modern-h2 text-center dark:text-offwhite-100">
        {caseStudy?.subtitle}
      </h2>
      <span className="--font-satoshi modern-paragraph-regular text-center dark:text-offwhite-100">
        {caseStudy?.description}
      </span>
      <Image
        width={600}
        height={800}
        alt="title-image"
        className="w-full"
        src={caseStudy.cardImage}
      />
    </section>
  );
};

export default CaseStudyPage;
