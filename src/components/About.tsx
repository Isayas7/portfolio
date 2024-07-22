"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const About = () => {
  const [active, setActive] = useState("Eduction");
  return (
    <section
      id="about"
      className="scroll-mt-28 flex flex-col md:flex-row  gap-10  mt-20 "
    >
      <Image
        className="md:w-2/5"
        alt="computer"
        src={"/bus.png"}
        width={1009}
        height={1000}
      />
      <div className=" flex flex-col gap-3 md:w-3/5 text-lg ">
        <p>
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications and Mobile application. I
          have experience working with JavaScript, React, Redux, Node.js,
          Express, Flutter React Native, PHP, Next.JS, HTML, CSS, and Git. I am
          a quick learner and I am always looking to expand my knowledge and
          skill set. I am a team player and I am excited to work with others to
          create amazing applications.
        </p>
        <div className="flex items-center  gap-5">
          <Button
            onClick={() => setActive("Eduction")}
            variant={`${active === "Eduction" ? "" : "outline"}`}
          >
            Eduction
          </Button>
          <Button
            onClick={() => setActive("Certificate")}
            variant={`${active === "Certificate" ? "" : "outline"}`}
          >
            Certificate
          </Button>
        </div>
        {active === "Eduction" && (
          <ul className=" flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <ArrowRightCircle />
              Software Enginering
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightCircle />
              Wolkite University
            </li>
          </ul>
        )}
        {active === "Certificate" && (
          <ul className=" flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <ArrowRightCircle />
              Red Hat System Administration
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightCircle />
              Red Hat Applications Development in Java EE
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightCircle />
              NDG Linux Essentials certifications from Cisco Networking Academy
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default About;
