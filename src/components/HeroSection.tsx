"use client";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-64 ">
      <div className="flex-1 text-center ">
        <Image src={"/man3.png"} alt="" width={750} height={900} />
      </div>
      <div className="flex-1 text-center ">
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
        <div className=" flex gap-5 justify-center items-center mt-10">
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            Hire me Now
          </Button>
          <Button>Download my CV</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
