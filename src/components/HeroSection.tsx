"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center scroll-mt-[100rem] "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 text-center "
      >
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Hello, I'm Isayas.
          </span>{" "}
          I'm a experienced{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            full-stack developer.
          </span>{" "}
          I enjoy building <span className="italic">sites & apps</span>
        </motion.h1>

        <div className="flex gap-5 justify-center items-center mt-10">
          <Link href="#contact">
            <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Hire me Now
            </Button>
          </Link>
          <Link href="/resume.pdf" download>
            <Button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Download my CV
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 text-center "
      >
        <Image src={"/isayas.png"} alt="" width={750} height={900} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
