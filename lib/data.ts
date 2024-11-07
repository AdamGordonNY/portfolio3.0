import { FaReact, FaLaravel, FaVuejs } from "react-icons/fa";
import { BsPersonWorkspace, BsBriefcase } from "react-icons/bs";
import React from "react";

export const experiencesData = [
  {
    title: "DevToday - JavaScript Mastery",
    location: "Remote",
    description:
      "Second project of a 2-part series with JavaScript Mastery, building a social media platform for developers, using NextJS, TailwindCSS, and Prisma-ORM.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "GitNote - Javascript Mastery",
    location: "Online",
    description:
      "Part one of a two-part series with JavaScript Mastery, building a note-taking platform for developers, using NextJS, TailwindCSS, and Prisma-ORM.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "NextJS 14 Pro Mastery Certified - JavaScript Mastery",
    location: "Online",
    description:
      "Certified in NextJS 14 Pro Mastery by JavaScript Mastery with DevOverflow Project.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Freelance Web Developer",
    location: "Long Island, NY",
    description:
      "Creating Projects both for myself and for clients, using React (with TS), Next.js, Laravel/InertiaJS (with Vue3 as a UI), and Tailwind CSS.",
    icon: React.createElement(FaLaravel),
    date: "December 2022-Present",
  },
  {
    title: "Lead Front-End Developer, MNC Consulting LLC (Internship)",
    location: "Brooklyn, NY",
    description:
      "Learning React on my own, working with Google Firebase, built a Real Estate website as both the project manager and trainer of new interns.",
    icon: React.createElement(FaReact),
    date: "2022-2023 (12 months)",
  },
  {
    title: "Full-Stack Developer",
    location: "DIAM International, Melville, NY",
    description:
      "Inherited a Nuxt2 with Laravel API and MySQL database, and built on the work of my predecessor, adding new features and fixing bugs.",
    icon: React.createElement(FaVuejs),
    date: "July 2022-December 2022",
  },
  {
    title: "B.S. in Computer Programming and Information Systems",
    location: "SUNY Farmingdale, NY",
    description:
      "Graduated in 2022 with a 3.31 Cumulative GPA, 3.87 in my major. Returned as an adult student in 2019.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2019-2022",
  },
  {
    title: "Account Manager, Renewal By Andersen Long Island",
    location: "Farmingdale, NY",
    description:
      "Starting from entry level, I worked my way up to Account Manager, acting as the last point of contact between our in-home customers and sales representatives. Frequently received awards for leading in various performance metrics.",
    icon: React.createElement(BsBriefcase),
    date: "2016-2018",
  },
];

export const testimonials = [
  {
    name: "Adrian Hajdin",

    title: "JavaScript Mastery CEO",
    quote:
      "Adam Gordon is an exceptional full-stack Next.js developer with strong technical skills and attention to detail. He’s also a team player and a great person.",
  },
  {
    name: "Moses Cowan",
    quote:
      "...He trained a multitude of new interns on the framework, and before he left to pursue full employment, made sure that the staff taking over knew what they were doing. He was a great communicator with both the interns and myself. He also learned the ReactJS library and laid the groundwork for many students that followed him. Additionally, Adam also stayed on as a guide to some interns even after his official departure and has demonstrated a capacity to work well with team members, learn new skills on the job, and be a leader in his time working for this firm. He would be a great addition to any team, and I have no doubt he will impress, given the chance to thrive.",
    title: "CEO of MNC Consulting LLC",
  },
  {
    name: "Riva Kantowitz",
    quote:
      "...Adam was able to clearly explain the different options we had in a way that we could understand, and he worked through challenges with our partners, to create this for our organization.  We have not deployed it live yet due to unrelated complications with other partners ,I found Adam as an honest, hardworking individual who would be an asset to any organization.... ",
    title: "Founder of Radical Flexibility Fund",
  },
];
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript/TypeScript",
  "React18/Vue3.0",
  "Next.js/Nuxt.js",
  "Node.js",
  "Redux",
  "VCS/Git",
  "PostgreSQL / MYSQL",
  "MongoDB",
  "Laravel",
  "Inertia.js",
  "PHP",
  "Docker",
  "Google Firebase",
  "Android Development w/ Java",
  "Java 16",
  ".NET Core",
  "Python",
  "Restful API development",
  "Amazon S3",
] as const;
export const projectsData = [
  {
    title: "DevToday - Social Media Made For Developers, Made By Developers",
    description: "",
    tags: [""],
    imageUrl: "/images/devtoday.svg",
    siteUrl: "https://devtoday.adam-gordon.info",
    githubUrl: "https://github.com/AdamGordonNY/DevTodayAdamsVersion",
  },
  {
    title: "Dev Overflow - A Stack Overflow Clone enhanced with AI",
    description:
      "A NextJS 13 Project, using the OpenAI API - Hosted on a VPS with Nginx and PM2",
    tags: [
      "Next.JS",
      "OpenAI",
      "Tailwind",
      "App Router",
      "TypeScript",
      "shadcn-ui",
      "MongoDB",
      "Webhooks",
    ],
    imageUrl: "/images/devoverflow.svg",
    siteUrl: "https://devoverflow.gordon-webdesign.com",
    githubUrl: "https://github.com/adamgordonny/devoverflow",
  },
  {
    title: "Git Note - A Developer's Best Friend",
    description:
      "Personal note taking platform to keep track of problems and how to solve them",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "React", "MongoDB", "Git"],
    imageUrl: "/images/gitnote.svg",
    siteUrl: "https://gitnote.adam-gordon.info",
    githubUrl: "https://github.com/AdamGordonNY/git_note",
  },
] as const;
export const certs = [
  {
    title: "NextJS 14 Pro Mastery Certified - JavaScript Mastery",
    issuer: "JavaScript Mastery",
    image: "/images/jsmcert.png",
  },
  {
    title: "Javascript Mastery Masterclass",
    issuer: "JavaScript Mastery",
    image:
      "https://my.certifyme.online/static/fileStore/img/926/6408/315427_badge_06DF5C.png",
  },
] as const;

export const SecondarySkillsData = [] as const;
