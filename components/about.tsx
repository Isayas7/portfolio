"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const About = () => {
  const [active, setActive] = useState("Eduction");
  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-3xl text-center capitalize font-bold tracking-wide sm:text-4xl md:text-5xl drop-shadow-md mb-10">
        About me
      </h2>
      <div className=" flex flex-col md:flex-row  gap-10  ">
        <Image
          className="md:w-2/6 rounded-md"
          alt="computer"
          src={"/computer.jpg"}
          width={1009}
          height={1000}
        />

        <div className=" flex flex-col gap-3 md:w-4/6 text-lg tracking-wider dark:text-white/80">
          <p>
            I have a passion for developing dynamic, responsive websites and
            mobile applications. I work as a full stack web developer. I have
            worked with Node.js, Redux Toolkit, React, React query, and
            JavaScript. Express, Next.JS, HTML, CSS, PHP, React Native, and Git.
            I pick things up quickly, and I am constantly trying to increase my
            skill set and knowledge. Being a team player, I am eager to
            collaborate with others to develop incredible applications.
          </p>
          <div className="flex items-center gap-5">
            <span
              onClick={() => setActive("Eduction")}
              className={`${
                active === "Eduction" ? " border-b border-gray-400" : ""
              } cursor-pointer`}
            >
              Eduction
            </span>
            <span
              onClick={() => setActive("Certificate")}
              className={`${
                active === "Certificate" ? "border-b border-gray-400" : ""
              } cursor-pointer`}
            >
              Certificate
            </span>
          </div>

          {active === "Eduction" && (
            <ul className=" flex flex-col gap-3">
              <li className="flex items-center gap-x-2 ">
                <ArrowRight className="size-6" />
                Software Enginering
              </li>
              <li className="flex items-center gap-x-2">
                <ArrowRight className="size-6" />
                Wolkite University
              </li>
            </ul>
          )}
          {active === "Certificate" && (
            <ul className=" flex flex-col gap-3">
              <li className="flex items-center gap-x-2">
                <ArrowRight className="size-6" />
                Red Hat System Administration
              </li>
              <li className="flex items-center gap-x-2">
                <ArrowRight className="size-6" />
                Red Hat Applications Development in Java EE
              </li>
              <li className="flex items-center gap-x-2">
                <ArrowRight className="size-6" />
                NDG Linux Essentials certifications from Cisco Networking
                Academy
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
