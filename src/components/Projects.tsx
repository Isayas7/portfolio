import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center h-screen gap-5">
      <Link
        href={""}
        className="  bg-gradient-to-r h-96 rounded-lg flex justify-center items-center text-3xl"
      >
        <Image src={"/dashboard.png"} alt="hhh" width={250} height={300} />
      </Link>
      <div className="  h-96 rounded-lg flex justify-center items-center  text-3xl ">
        Backend Skill
      </div>
      <div className=" bg-gradient-to-r h-96 rounded-lg flex justify-center items-center   text-3xl">
        Database Skill
      </div>
      <div className=" bg-gradient-to-r h-96 rounded-lg flex justify-center items-center  text-3xl ">
        Education
      </div>
      <div className=" bg-gradient-to-r h-96 rounded-lg flex justify-center items-center  text-3xl">
        Certificate
      </div>
      <div className=" bg-gradient-to-r h-96 rounded-lg flex justify-center items-center  text-3xl">
        Operating System
      </div>
    </div>
  );
};

export default Projects;
