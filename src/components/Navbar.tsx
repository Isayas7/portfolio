"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./themeprovider/mode-toggle";
import { links } from "@/lib/data";

export interface Link_Type {
  id: number;
  link: string;
}
const Links: Link_Type[] = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 4,
    link: "About",
  },
  {
    id: 1,
    link: "skills",
  },
  {
    id: 2,
    link: "projects",
  },
  {
    id: 3,
    link: "contact",
  },
];
const Navbar = () => {
  return (
    <section
      id="home"
      className="sticky top-0 z-10 w-full px-5 border-b border-slate-900/10 dark:border-slate-300/10  py-2 backdrop-blur-2xl  dark:from-inherit  "
    >
      <div className="container mx-auto  w-full flex justify-between items-center">
        <Link href={""}>
          <Image
            src="/logo2.jpg"
            alt="my image"
            className="  rounded-full"
            width={100}
            height={100}
          />
        </Link>

        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center text-card-foreground ">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};

export default Navbar;