import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 md:px-8 lg:16 xl:px-32 2xl:px-64  flex flex-col gap-y-40 md:gap-y-60">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
