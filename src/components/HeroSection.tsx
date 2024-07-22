"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import Image from "next/image";

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
        className="flex-1 text-center "
      >
        <div className=" font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <TypeAnimation
            sequence={[
              "Hi, I'm Web Developer ",
              1000,
              "Hi, I'm React Native Developer ",

              1000,
              "Hi, I'm Sofware Enginer ",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div>
          🚀 Experienced Full Stack Developer | React ⚛️ | React Native 📱 |
          Flutter 🚀 | Node.js 🌐 | Java ☕ | PHP 🖥️ | Python 🐍 | MongoDB 🍃 |
          MySQL 🧮 | Firebase 🔥
        </div>
        <div className=" flex gap-5 justify-center items-center mt-10">
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            Hire me Now
          </Button>
          <Button>Download my CV</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center "
      >
        <Image src={"/isayas.png"} alt="" width={750} height={900} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
