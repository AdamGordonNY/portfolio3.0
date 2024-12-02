import { FaReact, FaLaravel, FaVuejs } from "react-icons/fa";
import { FaCode, FaBookJournalWhills } from "react-icons/fa6";
import { BsPersonWorkspace, BsBriefcase } from "react-icons/bs";
import { CaseStudy, DevSkills } from "./types";
import React from "react";

export const experiencesData = [
  {
    title: "DevToday - JavaScript Mastery",
    location: "Remote",
    description:
      "Second project of a 2-part series with JavaScript Mastery, building a social media platform for developers, using NextJS, TailwindCSS, and Prisma-ORM.",
    icon: React.createElement(FaCode),
    date: "2024",
  },
  {
    title: "GitNote - Javascript Mastery",
    location: "Online",
    description:
      "Part one of a two-part series with JavaScript Mastery, building a note-taking platform for developers, using NextJS, TailwindCSS, and Prisma-ORM.",
    icon: React.createElement(FaBookJournalWhills),
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
export const linksTwo = [
  { name: "Home", hash: "/" },
  { name: "Dev Today", hash: "/case-studies/devtoday" },
  { name: "GitNote", hash: "/case-studies/gitnote" },
  { name: "Dev Overflow", hash: "/case-studies/devoverflow" },
] as const;
export const skillsData = [
  "HTML",
  "TailwindCSS",
  "Framer Motion",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "NuxtJS",
  "Agile",
  "VCS",
  "SQL DBMS",
  "MongoDB",
  "Laravel",
  "PHP",
  "Docker",
  "Google Firebase/Firestore",
  "Android Development w/ Java",
  "Java 16",
  ".NET Core",
  "Python",
  "Restful API development",
  "AWS S3",
  "Google Cloud",
  "Azure",
  "AI integration",
  "Webhooks",
  "CI/CD",
  "Prisma ORM",
  "Project Management",
  "Growth Mindset",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Leadership",
  "Open Mindedness",
] as const;
export const projectsData = [
  {
    title: "DevToday - Social Media Made For Developers, Made By Developers",
    description: "",
    tags: [
      "Next.JS",
      "Tailwind",
      "TypeScript",
      "Framer Motion",
      "Prisma ORM",
      "Webhooks",
      "ISR",
      "PostgreSQL",
    ],
    imageUrl: "/images/devtoday.svg",
    siteUrl: "https://devtoday.adam-gordon.info",
    githubUrl: "https://github.com/AdamGordonNY/DevTodayAdamsVersion",
    caseStudyUrl: "/case-studies/devtoday",
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
    siteUrl: "https://devoverflow.adam-gordon.info",
    githubUrl: "https://github.com/adamgordonny/devoverflow",
    caseStudyUrl: "/case-studies/devtoday",
  },
  {
    title: "Git Note - A Developer's Best Friend",
    description:
      "Personal note taking platform to keep track of problems and how to solve them",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "React", "MongoDB", "Git"],
    imageUrl: "/images/gitnote.svg",
    siteUrl: "https://gitnote.adam-gordon.info",
    githubUrl: "https://github.com/AdamGordonNY/git_note",
    caseStudyUrl: "/case-studies/devtoday",
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

// const iconsArray: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>[] =
//   [
//     IconBrandNextjs,
//     IconBrandReact,
//     IconBrandPrisma,
//     IconBrandSupabase,
//     IconBrandTailwind,
//     // Add other icons as needed
//   ];

export const projectList: CaseStudy[] = [
  {
    key: "devtoday",
    title: "DevToday",
    subtitle: "Where Developers Connect",
    description:
      "A social media platform for developers to share their knowledge, organize meetups, and share audio content. Made with NextJS 14, TailwindCSS, and Prisma as the primary technologies.",
    cardImage: "/images/devtodayslanted.svg",
    images: ["/images/devtoday-wide.svg", "/images/devtoday.svg"],
    tech: [
      "nextjs",
      "tailwind",
      "prisma",
      "supabase",
      "typescript",
      "uploadthing",
      "framer",
      "postgres",
      "clerkjs",
      "react",
    ],
    links: {
      repo: "https://github.com/AdamGordonNY/DevTodayAdamsVersion",
      liveSite: "https://devtoday.adam-gordon.info",
      portfolioPath: "https://wwww.adam-gordon.info/projects/devtoday",
    },
    summary:
      "This project was done with the Javascript Mastery Masterclass,  and Brandon was our mentor who did code reviews with us and helped us on any concepts that we hadn't mastered yet.  The Audio Player and the Content Overview pages are what I'm most proud of in the project.  ",
    mission: [
      {
        task: [
          {
            title: "Planning",
            description:
              "With 9 weeks to do the project, and a long list of user stories on our Asana board to divide and conquer, we each went ticket by ticket - with discussion everyday for 30-60 minutes to catch each other up and go over any blockers. ",
            goal: "To establish a clear project roadmap and choose the most suitable technologies.",
            result:
              "Using Asana and common agile processes with check-ins 5 times a week, we were able to smoothly divide the work and keep a pace that allowed us to complete all but 5 or 6 of the 75 or so User Stories",
            takeaways: [
              "Team collaboration tools like Asana and daily check-ins were critical in keeping us on track",
            ],
          },
          {
            title: "Authentication / Onboarding",
            description:
              "Implemented a secure and customizable authentication system using ClerkJS to handle user sign-ins and sign-ups.",
            goal: "To integrate a secure, scalable authentication system, that integrates Github and Google OAuth, with an onboarding system to properly set first time users up.",
            result:
              "Using a seperate route group (auth) in the app directory, I made a sign-in and sign-up route with a custom design.  Using webhooks, Svix, and Server Actions, these goals were accomplished in short order.",
            takeaways: [
              "ClerkJS was flexible and customizable, which greatly reduced development time while offering strong authentication features.",
              "Making a seperate route group for auth made it easier to manage and test the auth system.",
            ],
          },
          {
            title: "Profile Pages",
            description:
              "Needed to set up a complex profile page, which displays users personal information, their posts, content of interest, as well as an option to follow/unfollow users.",
            goal: "For users to have their own personal page that displays all the content they've contributed, as well as links to other platforms they're on.",
            result:
              "Starting with the layout, set up a DOM that matched our design, then adding functionality to the page.  Using the power of Typescript Types, Prisma's ability to query data easily through either SQL or their own modules, NextJS's server actions, and TailwindCSS convenient and flexible styling, it took somewhere between 2 and 3 weeks to complete this feature.",
            takeaways: [
              "NextJS dynamic routing came in handy here in order to load the correct profile page based on the user's ID, as well as editing the profile page. Fetching complex data on the server with the correct custom type was challenging , but mission was accomplished.",
            ],
          },
          {
            title: "Content Overview Pages (Home Routes)",
            description:
              "The first thing you see when you load the site, consisting of a center area displaying paginated links to recent content.  Sidebars contain previews of content not selected at the time, as well as popular posts of other types.",
            goal: "Using the momentum I'd gained from working on the auth and profile pages, and identifying the similarities between some of the elements on the profile page as well as projects I've done before, design the DOM, and set up a sorting and pagination system.",
            result:
              "Leveraging the power of Prisma's ability to use raw sql queries, and using the URLSearchparams and useSearchParams features of HTML and React, I was able to set up a system that allowed users to sort by date, popularity, and other factors, as well as paginate through the content.  I completed it rather quickly and even added some animation to the page using framer motion.  I especially am fond of the group cards that fade in and then cascade outward.  Using query-strings, I was able to make the page dynamic and responsive to user input.",
            takeaways: [
              "Framer motion used in spurts is a great way to spice up the look of a page, but overdoing it can be distracting. The ability to query data on the server and then send it to the client is a powerful tool that can be used to make a page dynamic, fast, and save on resources.  Following the pattern of designing the HTML first, then adding the dynamic elements, is a good way to keep the project organized and my workflow on track.",
            ],
          },
          {
            title: "Audio Player",
            description:
              "A site wide audio-player that allows users to listen to audio content while they browse the site.",
            goal: "To create a site-wide audio player that allows users to listen to audio content while they browse the site.",
            result:
              "Using a Context Provider, the <audio /> HTML API, and a custom hook, I was able to create a site-wide audio player that allows users to listen to audio content while they browse the site.  The player is responsive and can be controlled from any page on the site.  ",
            takeaways: [
              "Using a context provider, I was able to make the audio player site-wide, and responsive.  The custom hook I made was able to control the audio player from any page on the site, allowing users to browse other posts while listening to a podcast.",
            ],
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description:
          "Rebuild the socket.io server for real-time notifications.",
      },
      {
        step: 2,
        description: "Optimize the site for SEO to improve search visibility.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Content Overview Pages + Sort/Filter/Pagination, Profile Pages, Audio Player, Auth and Onboarding System, ",
      },
      {
        name: "Darshin Van Parijs",
        role: "ORM models and database setup, Meetups,Posts,Group pages and Comment Sections, Dark/Light Theming, Google Maps Integration",
      },
      { name: "Brandon Etter", role: "Project Manager and Code Reviewer" },
    ],
  },
  {
    key: "devoverflow",
    title: "Overflow GPT",
    description:
      "A StackOverflow clone that uses the power of Generative AI to answer questions.",
    cardImage: "images/docard.svg",
    images: ["images/doSlanted.svg"],
    tech: ["nextjs", "tailwind", "mongo", "typescript", "chatgpt", "clerk"],
    links: {
      repo: "https://github.com/AdamGordonNY/devoverflow",
      liveSite: "https://devoverflow.adam-gordon.info",
      portfolioPath: "/projects/devoverflow",
    },
    summary: "A platform inspired by StackOverflow, powered by AI.",
    mission: [
      {
        task: [
          {
            title: "AI Powered Answering",
            description:
              "AI generates answers to user questions, similar to StackOverflow but powered by ChatGPT.",
            goal: "To provide users with AI-generated answers to their questions.",
            result:
              "The AI feature is fully integrated, allowing users to ask questions and receive responses generated by the AI.",
            takeaways: [
              "Integrating AI into a Q&A platform opens up new ways to provide real-time, accurate answers.",
            ],
          },
          {
            title: "Interactivity and User Engagement System",
            description:
              "Users can earn badges, follow others, and interact with questions and answers. Popular questions and active users are displayed.",
            goal: "To create an interactive system that encourages engagement.",
            result:
              "The badge system and user activity features were implemented, increasing user engagement and interaction.",
            takeaways: [
              "Gamification through badges and following systems creates stronger user retention.",
            ],
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description: "Enhance AI's accuracy and response generation.",
      },
      {
        step: 2,
        description:
          "Expand the badge and reward system for more user interaction.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Content Overview Pages + Profile Pages + Audio Player",
      },
    ],
  },
  {
    key: "gitnote",
    title: "GitNote",
    description:
      "A learning journal and knowledge repository for developers to log their thoughts, processes, and ideas.",
    cardImage: "/images/gitnoteslanted.svg",
    images: ["/images/gitnote.svg"],
    tech: ["nextjs", "tailwind", "mongo", "supabase", "typescript"],
    links: {
      repo: "https://github.com/AdamGordonNY/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "https://wwww.adam-gordon.info/projects/gitnote",
    },
    summary: "A platform to track learning and development processes.",
    mission: [
      {
        task: [
          {
            title: "Knowledge Repository",
            description:
              "GitNote acts as a journal for developers to log their learning processes and ideas.",
            goal: "To provide a central space for developers to record and organize their knowledge.",
            result:
              "The platform allows users to store and categorize their learning and project notes.",
            takeaways: [
              "Developers can stay organized and track their growth by documenting their progress.",
            ],
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description: "Add advanced search and filtering capabilities.",
      },
      {
        step: 2,
        description:
          "Introduce social sharing features for broader collaboration.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Primary Developer",
      },
      {
        name: "Brandon Etter",
        role: "Project Manager and Code Reviewer",
      },
    ],
  },
];
export const devSkills: DevSkills = {
  categories: [
    {
      category: "Front End",
      skills: [
        { name: "javascript", icon: true },
        { name: "typescript", icon: true },
        { name: "react", icon: true },
        { name: "vue", icon: true },
        { name: "blazor", icon: true },
        { name: "tailwind", icon: true },
        { name: "framer", icon: true },

        { name: "HTML", icon: true },
        { name: "CSS", icon: true },
      ],
    },
    {
      category: "Architecture",
      skills: [
        { name: "Laravel", icon: true },
        { name: "dotnet", icon: true },
        { name: "NextJS", icon: true },
        { name: "Nuxt", icon: true },
        { name: "Vite", icon: true },
        { name: "Apache", icon: true },
        { name: "NginX", icon: true },
        { name: "Docker", icon: true },
      ],
    },
    {
      category: "Database Systems",
      skills: [
        { name: "mongo", icon: true },
        { name: "firestore", icon: true },
        { name: "postgres", icon: true },
        { name: "mssql", icon: true },
        { name: "graphql", icon: true },
        { name: "prisma", icon: true },
      ],
    },
    {
      category: "Platforms",
      skills: [
        { name: "Vercel", icon: true },
        { name: "Supabase", icon: true },
        { name: "Azure", icon: true },
        { name: "Firebase", icon: true },
        { name: "AWS", icon: true },
      ],
    },
    {
      category: "Design/Organizational Programs",
      skills: [
        { name: "Figma", icon: true },
        { name: "Canva", icon: true },
        { name: "Trello", icon: true },
        { name: "AGILE methodology", icon: false },
        { name: "Asana", icon: false },
        { name: "Google Cloud", icon: true },
      ],
    },
    {
      category: "Misc Dev Skills",
      skills: [
        { name: "RestFUL API creation and use", icon: false },
        { name: "Generative AI integration and Augmentation", icon: false },
        { name: "Github Copilot", icon: false },
        { name: "Version Control Systems (Github)", icon: false },
        { name: "System Design", icon: false },
        { name: "Project Management and Planning", icon: false },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", icon: false },
        { name: "Leadership by Example", icon: false },
        { name: "Growth Mindset", icon: false },
      ],
    },
  ],
};
export const contactDetails: { [key: string]: string } = {
  email: "mailto:adam@adam-gordon.info",
  github: "https://github.com/adamgordonnny",
  linkedIn: "https://www.linkedin.com/in/adam-gordon119",
  location: "New York, NY",
  resume: "/resume.pdf",
  discord: "Username: _adam_g",
};
