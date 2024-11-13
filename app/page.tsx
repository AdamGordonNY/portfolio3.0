import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="z-1 flex min-h-screen w-full flex-col items-center ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </div>
  );
}
