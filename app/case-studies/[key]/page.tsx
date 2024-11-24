import CaseStudyPage from "@/components/case-studies/CaseStudy";
import { CaseStudy } from "@/lib/types";
import { projectList } from "@/lib/data";
import React from "react";

const Page = ({ params }: { params: { key: string } }) => {
  const key = params.key;
  const study = projectList.find((study: CaseStudy) => study.key === key);
  return CaseStudyPage({ caseStudy: study! });
};

export default Page;
