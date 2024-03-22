import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <div className="group h-96 w-96 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:perspective-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <Image
            alt="jjj"
            width={250}
            height={300}
            src={"/dashboard.png"}
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1>NextJs</h1>
            <h1>NextJs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
