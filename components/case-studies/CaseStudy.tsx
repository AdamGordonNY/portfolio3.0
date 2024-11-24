import type { CaseStudy } from "@/lib/types";
import React from "react";
import { projectList } from "@/lib/data";
const CaseStudyPage = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const title = caseStudy.title;
  const project = projectList.find((project) => project.title === title);
  return (
    <section className="--satoshi">
      <h1>{project?.title}</h1>
    </section>
  );
};

export default CaseStudyPage;
