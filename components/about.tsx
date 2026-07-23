"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Code2, Server, Smartphone, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* SECTION TITLE */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <User className="w-6 h-6" />
              </span>
              About Me
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              My background, passion for building software, and tech stack focus.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="relative w-60 h-72 rounded-2xl overflow-hidden glass-card border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 240px, 240px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* BIO CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-2/3 flex flex-col gap-6"
            >
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {personalInfo.aboutText}
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl glass-card">
                  <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Frontend Architecture
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Next.js, React, TypeScript & Tailwind CSS
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card">
                  <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Backend & APIs
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Node.js, Express, PostgreSQL & Prisma
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card">
                  <Smartphone className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Mobile Development
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    React Native, Expo & Firebase Auth
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
