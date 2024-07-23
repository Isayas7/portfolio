import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" container flex flex-col gap-10 mx-auto">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
