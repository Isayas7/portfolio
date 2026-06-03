"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center scroll-mt-28 pt-20 md:pt-10"
    >
      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center max-w-3xl mx-auto"
      >
        {/* TEXT CONTENT */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-sm flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="block mb-2 text-center w-full text-gray-900 dark:text-white">Hello, I am Isayas.</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block mt-2 pb-2 w-fit mx-auto text-center">
            Full-Stack Developer
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I am an experienced developer who enjoys building modern, responsive, and dynamic sites & apps. Let&apos;s create something amazing together.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              Hire me Now
            </button>
          </Link>
          <Link
            href="/isayas-melkamu-resume.pdf"
            download
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
