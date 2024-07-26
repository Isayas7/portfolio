"use client";

import { links } from "@/lib/data";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <X
          className=" size-7 sm:size-10 md:size-14 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <AlignJustify
          className=" size-7 sm:size-10 md:size-14 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}

      {open && (
        <div className="flex flex-col items-center justify-center gap-8 absolute bg-gray-900 text-white left-0 top-20 w-full min-h-[calc(100vh-80px)] text-xl z-10 ">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              className="text-md font-medium hover:underline underline-offset-4"
              onClick={() => setOpen((prev) => !prev)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
