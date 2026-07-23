"use client";
import Link from "next/link";
import React from "react";
import { links, personalInfo } from "@/lib/data";
import Menu from "./menu";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-50/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-800/50 supports-[backdrop-filter]:bg-slate-50/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="#home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-extrabold text-sm shadow-md shadow-emerald-500/20">
              {personalInfo.initials}
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-zinc-700" />
              ) : (
                <Sun className="w-4 h-4 text-emerald-400" />
              )}
            </button>
          </div>

          {/* MOBILE NAV BUTTONS */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-zinc-700" />
              ) : (
                <Sun className="w-4 h-4 text-emerald-400" />
              )}
            </button>
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
