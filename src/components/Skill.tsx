import { skill } from "@/app/page";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Skill: React.FC<skill> = ({ render, skill, image }) => {
  return (
    <div className="relative group  w-6/12 md:w-4/12 aspect-[3/4] p-6 [perspective:1500px]">
      <div className="  p-6 absolute  w-full aspect-[3/4]">
        <div className=" w-full aspect-[3/4] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500   rounded-xl overflow-hidden transition-all duration-700  group-hover:[transform:rotateY(-180deg)] [backface-visibility:hidden] ">
          <Image
            src={image}
            alt={""}
            width={650}
            height={700}
            className={cn(
              " w-full  aspect-[4/2] object-cover transition-all hover:scale-105"
            )}
          />
          <h1 className="text-2xl text-center mt-2 text-gray-200/80">
            {render}
          </h1>
        </div>
      </div>
      <div className=" p-6 absolute w-full aspect-[3/4] ">
        <div className="  w-full aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  transition-all duration-700  group-hover:[transform:rotateY(0)] [transform:rotateY(180deg)]  [backface-visibility:hidden]">
          <h1 className="text-center pt-5 text-lg font-semibold">{render}</h1>
          <ul className="flex flex-col pl-10">
            {skill?.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
