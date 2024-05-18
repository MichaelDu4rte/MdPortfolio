"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "../../lib/data";
import Link from "next/link";

function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 h-[7.5rem] w-full
        rounded-none border border-white border-opacity-40 bg-white 
        bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem]
        sm:bottom-8 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav
        className="fixed bottom-[0.15rem] left-1/2 h-15 -translate-x-1/2 py-2 
        sm:bottom-[2.2rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1
        text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap
        sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;