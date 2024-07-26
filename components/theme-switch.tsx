"use client";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5  bg-white text-black dark:bg-gray-950  dark:text-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] ring-1 dark:ring-gray-300 ring-gray-800 border  rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Image src="/sun.png" alt="Logo" width={28} height={28} />
      ) : (
        <Image src="/moon.png" alt="Logo" width={28} height={28} />
      )}
    </button>
  );
}
