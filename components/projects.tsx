"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Download, Layers } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* SECTION HEADER */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Layers className="w-6 h-6" />
              </span>
              Projects
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              A selection of featured projects I&apos;ve engineered, spanning full-stack platforms and mobile apps.
            </p>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col justify-between p-5 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div>
                  {/* IMAGE PREVIEW */}
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-4 border border-zinc-200/50 dark:border-zinc-800/50">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE & ROLE */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg md:text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs rounded-full font-medium bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex-shrink-0">
                      {project.role}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION LINKS */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-auto">
                  <div className="flex items-center gap-3">
                    {project.deploy === "download" ? (
                      <a
                        href="/Book store.apk"
                        download
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download APK
                      </a>
                    ) : (
                      project.deploy && (
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )
                    )}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
