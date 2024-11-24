import { links, linksTwo } from "./data";

export type SectionName = (typeof links | typeof linksTwo)[number]["name"];

export type CaseStudy = {
  key: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  cardImage: string;
  links: {
    repo: string;
    liveSite: string;
    portfolioPath?: string;
  };
  tech: string[]; // tech stack
  summary: string; // retrospective on the project
  mission: {
    task: {
      title: string;
      description: string;
      goal: string;
      result: string;
      takeaways: string[];
    }[];
  }[]; // What was the goal of the project?

  nextSteps: {
    step: number;
    description: string;
  }[];
  teamMembers: {
    name: string;
    role: string;
  }[];
};
export type Skill = {
  name: string;
  icon?: boolean;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type DevSkills = {
  categories: SkillCategory[];
};
