import Image from "next/image";
import React from "react";

const Skill = ({ render }) => {
  return (
    <div className="relative group h-[300px] md:h-[500px] w-96 mx-auto md:w-full [perspective:1000px]">
      <div className="absolute bg-amber-200 inset-0 h-full w-full rounded-xl   transition-all duration-700  group-hover:[transform:rotateY(-180deg)] [backface-visibility:hidden] ">
        {render}
      </div>
      <div className="absolute bg-lime-500 inset-0 h-full w-full rounded-xl  transition-all duration-700  group-hover:[transform:rotateY(0)] [transform:rotateY(180deg)]  [backface-visibility:hidden]">
        Back
      </div>
    </div>
  );
};

export default Skill;
