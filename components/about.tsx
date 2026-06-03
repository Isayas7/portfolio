"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const About = () => {
  const [active, setActive] = useState("Education");
  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-3xl text-center capitalize font-bold tracking-wide sm:text-4xl md:text-5xl drop-shadow-md mb-10">
        About me
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        <div className="w-full md:w-1/3">
          <Image
            className="w-full h-auto object-contain"
            alt="Isayas"
            src="/isayas.png"
            width={600}
            height={600}
            priority
          />
        </div>

        <div className="flex flex-col gap-4 md:w-2/3 text-lg tracking-wider dark:text-white/80">
          <p>
            I have a passion for developing dynamic, responsive websites and
            mobile applications. I work as a full stack web developer. I have
            worked with Node.js, Redux Toolkit, React, React query, and
            JavaScript. Express, Next.JS, HTML, CSS, PHP, React Native, and Git.
            I pick things up quickly, and I am constantly trying to increase my
            skill set and knowledge. Being a team player, I am eager to
            collaborate with others to develop incredible applications.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <button
              onClick={() => setActive("Education")}
              className={`${
                active === "Education" ? "border-b-2 border-gray-500 font-semibold" : ""
              } cursor-pointer pb-1 transition-all`}
            >
              Education
            </button>
            <button
              onClick={() => setActive("Certificate")}
              className={`${
                active === "Certificate" ? "border-b-2 border-gray-500 font-semibold" : ""
              } cursor-pointer pb-1 transition-all`}
            >
              Certificate
            </button>
          </div>

          {active === "Education" && (
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-x-2 ">
                <ArrowRight className="size-6" />
                Software Engineering
              </li>
              <li className="flex items-center gap-x-2">
                <ArrowRight className="size-6" />
                Wolkite University
              </li>
            </ul>
          )}
          {active === "Certificate" && (
            <ul className="flex flex-col gap-3 mt-2">
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
