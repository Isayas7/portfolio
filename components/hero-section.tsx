"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row gap-5 items-center scroll-mt-28  pt-20 md:pt-0"
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 text-center "
      >
        {/* TITLE */}
        <motion.h1
          className=" w-4/6 sm:w-full mb-10  mx-auto text-2xl font-medium !leading-[1.5] sm:text-4xl  "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
            Hello, I am Isayas.
          </span>{" "}
          I am an experienced{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
            full-stack developer.
          </span>{" "}
          I enjoy building <span className="italic">sites & apps</span>
        </motion.h1>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
          <Link href="#contact" className="w-full">
            <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Hire me Now
            </button>
          </Link>
          <Link
            className="w-full "
            href="/isayas-melkamu-CV.pdf"
            download
            target="_blank"
          >
            <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Download my CV
            </button>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 text-center "
      >
        <Image
          className="w-full "
          src={"/isayas.png"}
          alt=""
          width={750}
          height={900}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
