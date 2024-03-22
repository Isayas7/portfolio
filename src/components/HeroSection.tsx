"use client";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1">left side</div>
      <div className="flex flex-col items-center pt-24 flex-1 gap-5 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
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
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HeroSection;
