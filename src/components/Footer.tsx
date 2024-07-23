import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-3 border z-10  border-t border-slate-900/10 dark:border-slate-300/10 ">
      <div className="container p-5 flex justify-between items-center">
        <Image
          src="/logo.jpg"
          alt="my image"
          className="  rounded-full"
          width={100}
          height={100}
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
