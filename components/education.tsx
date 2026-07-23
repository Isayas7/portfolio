"use client";

import React, { useState } from "react";
import { educationData, certificationsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, ChevronDown, CheckCircle2 } from "lucide-react";

const Education = () => {
  const [showEduCourses, setShowEduCourses] = useState(true);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <section id="education" className="py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* EDUCATION SECTION */}
          <div>
            <div className="mb-6 text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </span>
                Education
              </h2>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                Academic background and computer science degree.
              </p>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-5 md:p-6 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-emerald-500 dark:text-emerald-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {edu.details}
                  </p>

                  <button
                    onClick={() => setShowEduCourses(!showEduCourses)}
                    className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        showEduCourses ? "rotate-180" : ""
                      }`}
                    />
                    {showEduCourses ? "Hide Relevant Coursework" : "View Relevant Coursework"}
                  </button>

                  <AnimatePresence>
                    {showEduCourses && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.courses.map((course, cIndex) => (
                            <div key={cIndex} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS SECTION */}
          <div>
            <div className="mb-6 text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
                <span className="p-2 rounded-lg bg-teal-500/10 text-teal-500 dark:text-teal-400">
                  <Award className="w-6 h-6" />
                </span>
                Certifications
              </h2>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                Professional industry certifications & technical training.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-emerald-500 dark:text-emerald-400 mt-1">
                      {cert.issuer} • <span className="font-mono text-zinc-400">{cert.date}</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() =>
                        setExpandedCert(expandedCert === index ? null : index)
                      }
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          expandedCert === index ? "rotate-180" : ""
                        }`}
                      />
                      {expandedCert === index ? "Hide Modules" : "View Modules"}
                    </button>

                    <AnimatePresence>
                      {expandedCert === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                            {cert.modules.map((mod, mIndex) => (
                              <li key={mIndex}>• {mod}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
