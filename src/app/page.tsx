import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skill from "@/components/Skill";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <div className="fixed top-0 z-10 w-full px-5 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-current dark:from-inherit  ">
        <div className="container mx-auto  w-full flex justify-between items-center">
          <Link href={""}>Logo</Link>
          <div className="flex gap-5 items-center">
            <Link href={""}>About</Link>
            <Link href={""}>Project</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Blog</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-5">
        <section className="place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] h-screen w-full">
          <HeroSection />
        </section>
        <section className="h-screen w-full bg-orange-500">
          <About />
        </section>
        <section className="h-screen w-full flex justify-center gap-5 items-center bg-green-600">
          <Skill />
          <Skill />
          <Skill />
        </section>
      </div>
    </main>
  );
}
