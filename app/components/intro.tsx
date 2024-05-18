"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { achievementsList } from "../../lib/data";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

function Intro() {
  return (
    <section className="mb-28 lg:mb-0 max-w-[50rem] text-center">
      <div className="flex place-items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="https://i.imgur.com/v6hXMtA.jpeg"
              alt=""
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem]
            border-white shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ y: -100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl cursor-pointer"
            whileHover={{
              rotate: [0, 20, -20, 20, 0],
              transition: { duration: 0.5, repeat: Infinity },
            }}
          >
            👋
          </motion.div>
        </div>
      </div>

      {/* desc */}
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl 
        font-medium leading-[1.5] sm:text-4xl"
        initial={{ y: -100, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.1,
          duration: 0.5,
        }}
      >
        <span className="font-bold">Olá, sou o Michael.</span> Sou um{" "}
        <span className="font-bold">desenvolvedor full-stack</span>. Sou
        apaixonado em criar <span className="italic">sites & aplicativos</span>.
        Meu foco é <span className="underline">Angular e Java</span>. Entretanto
        também uso outras linguagens de programação.
      </motion.p>

      {/* links */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=5547999543668&text="
          target="_blank"
          className="bg-gray-900 text-white px-7 py-3 flex items-center rounded-full outline-none hover:scale-110 hover:bg-gray-700 transition"
        >
          Contato
        </Link>
        <a
          href="https://www.linkedin.com/in/michaeldu4rte/"
          target="_blank"
          download={true}
          className="bg-gray-900 text-white px-7 py-3 flex items-center rounded-full hover:scale-110 hover:bg-gray-700 transition"
        >
          Linkedin
        </a>
        <a
          href="/cv.pdf"
          download={true}
          className="bg-gray-900 text-white px-7 py-3 flex items-center rounded-full hover:scale-110 hover:bg-gray-700 transition"
        >
          Curriculo
        </a>
      </motion.div>

      {/* links */}
      {/* <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/michaeldu4rte/"
          target="_blank"
          className="bg-white  p-4 text-gray-700 flex items-center rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          Linkedin
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5547999543668&text="
          target="_blank"
          className="bg-white  p-4 text-gray-700 flex items-center rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          Whatszap
        </a>
        <a
          href="https://github.com/MichaelDu4rte"
          target="_blank"
          className="bg-white  p-4 text-gray-700 flex items-center rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          Github
        </a>
      </motion.div> */}

      <motion.div
        className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="sm:border-purple-200 sm:border-x-8 rounded-full py-8 px-16 flex flex-col sm:flex-row items-center justify-between text-black">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-black text-4xl font-bold"
                  configs={(_: any, index: number) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
