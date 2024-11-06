import About from "@/components/About";
import Contact from "@/components/Contact";

import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="z-1 flex min-h-screen w-full flex-col items-center ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </div>
  );
}
