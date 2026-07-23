"use client";

import React, { useState } from "react";
import { experienceData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* SECTION HEADER */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </span>
              Experience
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              My professional background and software engineering experience.
            </p>
          </div>

          {/* EXPERIENCE LIST */}
          <div className="space-y-4">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 md:p-6 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm">
                      <span className="font-medium text-emerald-500 dark:text-emerald-400">
                        {exp.company}
                      </span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {exp.type}
                      </span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ACCORDION TOGGLE */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  {expandedIndex === index
                    ? "Hide Key Achievements"
                    : "View Key Achievements"}
                </button>

                {/* ACCORDION CONTENT */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
