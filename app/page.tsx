import HeroSection from "@/components/hero-section";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <HeroSection />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
