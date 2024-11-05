import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="z-1 flex min-h-screen w-full flex-col items-center ">
      <Header />
      <Intro />
    </div>
  );
}
