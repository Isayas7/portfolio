"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 scroll-mt-28 relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* AVATAR IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-emerald-500/30 dark:border-emerald-400/25 bg-zinc-100 dark:bg-zinc-900 shadow-2xl shadow-emerald-500/20">
                <Image
                  alt={personalInfo.name}
                  src={personalInfo.avatarUrl}
                  fill
                  priority
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* TEXT & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left max-w-xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                <span className="text-zinc-900 dark:text-zinc-100">
                  Hey! I&apos;m{" "}
                </span>
                <span className="text-emerald-500 dark:text-emerald-400">
                  {personalInfo.shortName}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* SOCIAL & BUTTON ACTIONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-100 w-full sm:w-auto"
                    aria-label="Download Resume"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>

                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all w-full sm:w-auto"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
