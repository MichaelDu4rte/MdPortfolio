"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  }),
};

function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-medium capitalize mb-4">Sobre mim</h2>

      <p className="mb-3">
        Sou um desenvolvedor web com ampla experiência na criação de uma
        variedade de projetos.{" "}
        <span className="font-medium">
          Minha stack é focada em Angular, TypeScript e Java,{" "}
        </span>
        sempre aproveitando ao máximo suas funcionalidades para garantir uma
        estética excepcional e um desempenho robusto. Tenho contribuições
        significativas em projetos de código aberto, onde desenvolvi
        competências tanto no <span className="font-medium">front-end</span>{" "}
        quanto no <span className="font-medium">back-end.</span> Forneço
        soluções eficazes e inovadoras para aprimorar a experiência do usuário e
        a funcionalidade dos sistemas.
      </p>

      <p>
        <span className="italic">Quando não estou programando...</span> eu gosto
        de jogar algum jogo, ler livros e brincar com o meu gato.{" "}
        <span className="font-medium">
          Também gosto de manter habitos saudáveis.
        </span>
        Pratico esportes e faço academia frequentemente, também gosto de manter
        uma dieta saudável.
      </p>
    </motion.section>
  );
}

export default About;
