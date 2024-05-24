import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// projects images
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

// links and anchor
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiências",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;



// skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "SQL",
  "PostgreSQL",
  "Framer Motion",
] as const;


export const achievementsList = [
  {
    metric: "Projetos",
    value: "40",
    postfix: "+",
  },
  {
    metric: "Anos de experiencia",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Clientes",
    value: "20",
    postfix: "+",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Dashboard Study",
    des: "Contem opções de inumeras ferramentes para ajudas nos estudos e produtividade",
    img: "https://i.imgur.com/5iE9Tde.png",
    iconLists: ["./agl.svg", "/ts.svg",],
    link: "https://github.com/MichaelDu4rte/PersonalDashboard",
  },
 
  {
    id: 2,
    title: "Escritório Advocacia",
    des: "Apresentação, envio de emails, agendamento de consultas e uso de api.",
    img: "https://i.imgur.com/5uPM6vY.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "https://escritorio-xjtc.vercel.app/",
  },
  {
    id: 3,
    title: "Mentoria Ayrel",
    des: "Site para divulgacão de mentorida para um medico.",
    img: "https://i.imgur.com/CFRZGnN.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", ],
    link: "https://mentoria-medica.vercel.app/",
  },
  {
    id: 4,
    title: "Controle Financeiro ",
    des: "Dashboard para controle financeiro desenvolvido para um cliente freelancer",
    img: "https://i.imgur.com/0RaAG7z.png",
    iconLists: ["./agl.svg", "/ts.svg"],
    link: "https://github.com/MichaelDu4rte/BudgetPlanner",
  },
  {
    id: 5,
    title: "MD Social",
    des: "Uma rede social completa, desenvolvido em php e usando banco de dados.",
    img: "https://i.imgur.com/BGLsP74.png",
    iconLists: ["/php.svg"],
    link: "https://github.com/MichaelDu4rte/ScribbliSocial?tab=readme-ov-file",
  },
  {
    id: 6,
    title: "Lucre Com Licitações",
    des: "Web site desenvolvido para uma empresa de Licitações.",
    img: "https://i.imgur.com/vLmIvtd.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", ],
    link: "https://github.com/MichaelDu4rte/LucreLicitacoes",
  },
 
] as const;




export const workExperience = [
  {
    id: 1,
    title: "Front End Junior",
    desc: "Auxiliei e criei plataformas webs utilizando React, Angular e entre outros.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Rede Social - Md Social",
    desc: "Criei uma rede social completa, back-end, front-end, design. Usando também banco de dados. Proporcionando uma experiência agradável e segura.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projetos Freelances",
    desc: "Liderei e desenvolvi muitos web sites e ecommerces para diferentes clientes. Desde o conceito inicial até a implementação do front-end e back-end.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Segurança e Manutenção",
    desc: "Auxilei na segurança e manutenção de sites. Garatindo uma experiência melhor ao cliente final.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const; ;

