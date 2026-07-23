"use client";

import React from "react";
import { skillCategoriesData } from "@/lib/data";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* SECTION HEADER */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Wrench className="w-6 h-6" />
              </span>
              Skills & Tech Stack
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              Technologies, frameworks, databases, and tools I utilize daily.
            </p>
          </div>

          {/* CATEGORIZED SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategoriesData.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="p-5 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80"
              >
                <h3 className="text-base font-semibold text-emerald-500 dark:text-emerald-400 mb-4 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-zinc-100/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
