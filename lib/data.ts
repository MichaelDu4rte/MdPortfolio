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

// experiencia title, location, desc, icon, data
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    value: "5",
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
    title: "Lucre Com Licitações",
    des: "Web site desenvolvido para uma empresa de Licitações.",
    img: "https://i.imgur.com/vLmIvtd.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", ],
    link: "https://github.com/MichaelDu4rte/LucreLicitacoes",
  },
  {
    id: 3,
    title: "Controle Financeiro ",
    des: "Dashboard para controle financeiro desenvolvido para um cliente freelancer",
    img: "https://i.imgur.com/0RaAG7z.png",
    iconLists: ["./agl.svg", "/ts.svg"],
    link: "https://github.com/MichaelDu4rte/BudgetPlanner",
  },
  {
    id: 4,
    title: "MD Social",
    des: "Uma rede social completa, desenvolvido em php e usando banco de dados.",
    img: "https://i.imgur.com/BGLsP74.png",
    iconLists: ["/php.svg"],
    link: "https://github.com/MichaelDu4rte/ScribbliSocial?tab=readme-ov-file",
  },
 
];




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
    desc: "Criei uma rede social completa, back-end, front-end, design. Usando também banco de dados. Proporcionando uma experiência agradável e segura",
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
    desc: "Auxilei na segurança e manutenção de sites. Garatindo uma experiência melhor ao clinte final.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

