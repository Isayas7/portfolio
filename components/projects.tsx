"use client";
import React from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className=" w-full scroll-mt-28 ">
      <div className="container  mx-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-wide sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and see how I can help bring your
              ideas to life.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3  ">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="group hover:bg-[#D1D5DB] dark:hover:bg-[#192840] p-2 rounded-md transition-all ease-in duration-300"
            >
              <div className="group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.imageUrl}
                    width={300}
                    height={200}
                    alt="Project 1"
                    className="h-[200px] w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-white">
                {project?.deploy && (
                  <Link
                    href={project?.deploy}
                    className="inline-flex items-center justify-center rounded-md bg-green-700 hover:bg-green-900 px-4 py-2 text-sm font-medium "
                    prefetch={false}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                )}

                <Link
                  href={project?.link}
                  className="inline-flex items-center justify-center rounded-md  bg-orange-700 hover:bg-orange-900 px-4 py-2 text-sm font-medium"
                  prefetch={false}
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
