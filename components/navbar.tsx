"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { links } from "@/lib/data";
import Menu from "./menu";
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
    <nav className="sticky top-0 z-10 w-full h-20  px-4 md:px-8 lg:16 xl:px-32 2xl:px-64  border-b border-slate-900/10 dark:border-slate-300/10  backdrop-blur-2xl  dark:from-inherit  ">
      {/* MOBILE */}
      <div className="h-full flex justify-between items-center md:hidden">
        {/* LEFT */}
        <Link href={""}>
          <Image
            src="/logo.jpg"
            alt="my image"
            className="  rounded-full"
            width={100}
            height={100}
          />
        </Link>
        {/* RIGHET */}
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="h-full hidden md:flex items-center justify-between gap-8">
        {/* LEFT */}
        <Link href="" className="">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="size-16"
          />
        </Link>

        {/* RIGHET */}
        <div className=" flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              className="text-md font-medium hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
