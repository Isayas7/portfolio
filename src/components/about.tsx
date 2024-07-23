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
        className="md:w-2/5 rounded-md"
        alt="computer"
        src={"/computer.jpg"}
        width={1009}
        height={1000}
      />
      <div className=" flex flex-col gap-3 md:w-3/5 text-lg ">
        <p>
          I have a passion for developing dynamic, responsive websites and
          mobile applications. I work as a full stack web developer. I have
          worked with Node.js, Redux Toolkit, React, React query, and
          JavaScript. Express, Next.JS, HTML, CSS, PHP, React Native, and Git. I
          pick things up quickly, and I am constantly trying to increase my
          skill set and knowledge. Being a team player, I am eager to
          collaborate with others to develop incredible applications.
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
