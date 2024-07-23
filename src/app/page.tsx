import About from "@/components/about";
import Contact from "@/components/Contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
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
