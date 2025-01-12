import type {
  TCertifications,
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
} from "../types";

import {
  backend,
  creator,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services: TService[] = [
  {
    title: "BA in Computer Science - Harvey Mudd College",
    icon: backend,
  },
  {
    title: "BA in Media Studies - Scripps College",
    icon: web,
  }
  // {
  //   title: "Full Stack Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Web, Mobile, and Software Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Intermediate Web Developer",
    companyName: "Semper Valens Solutions",
    icon: creator,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing progressive web apps to support the health of military members & their families",
      "Using JavaScript (React, Redux), TypeScript, Vite, & TailwindCSS",
      "Learned Sitecore CMS & how to integrate it into React apps via GraphQL",
      "Earned a CompTIA Security+ certification",
      "Collaborating as a part of a development team; using GitHub, Jira, & Confluence",
      "Working cross-functionally with PMs, UX, QA, devops, stakeholders, & other developers",
    ],
  },
  {
    title: "Technical Consultant",
    companyName: "",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "June 2023 - June 2024",
    points: [
      "Developing SaaS platforms for a renewable energy startup & training AI coding chatbots",
      "Collaborating with CEOs on technical vision, presentations, documents, & grants",
      "Previous consulting includes high-performance computing SaaS platforms & mobile apps",
    ],
  },
  {
    title: "Controls Engineer",
    companyName: "H2Power Tech",
    icon: creator,
    iconBg: "#383E56",
    date: "Sept 2021 - Oct 2022",
    points: [
      "Developed software using C#/.NET/WPF (dashboards, control panels, & data loggers) to talk to hardware (hydrogen fuel cells & programmable logic controllers)",
    ],
  },
  {
    title: "App Tester & Hardware Manager",
    companyName: "Focal Systems",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Mar 2021",
    points: [
      "Tested & improved mobile app & AI algorithm",
      "Installed hardware to scan shelf inventory",
    ],
  },
  {
    title: "Software Engineer & Operations Manager",
    companyName: "Mickom",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Oct 2020",
    points: [
      "Engineer: Reviewed & tested mobile app code (Xamarin) & design (InVision)",
      "Manager: Built SharePoint sites; managed projects & tasks; handled administrative duties",
    ],
  },
  {
    title: "Software Engineer I",
    companyName: "Vertafore",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jun 2015 - Dec 2017",
    points: [
      "Collaborated with development, PM, & UX teams on projects such as diagnostic dashboards, client portals, internal portals, web forms, HTML emails, & UI component libraries.",
    ],
  },
  {
    title: "Software Engineer Internships",
    companyName: "",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Summers 2012-2014",
    points: [
      "Vertafore (2014): Built an Angular dashboard to show the health of our single sign-on system",
      "Seattle Avionics Software (2013): Helped build a PostgreSQL DB, API, & front-end for a complex flight-planning app with many relational DB tables for airport & navigation data",
      "SolutionsIQ (2012): Worked on an ASP.NET web app for T-Mobile, used by their CSRs, that allows for flexible business rules & logic",
    ],
  },
];

const certifications: TCertifications[] = [
  {
    certification: "Security+ SY0-701",
    organization: "CompTIA",
    year: "2024",
    image: creator,
  },
  {
    certification: "Quantum Explorer",
    organization: "IBM Quantum",
    year: "2023-2024",
    image: creator,
  },
  {
    certification: "React.js Certificate",
    organization: "Noble Desktop",
    year: "2023",
    image: creator,
  },
  {
    certification: "Certified Scrum Product Owner",
    organization: "Scrum Alliance",
    year: "2021",
    image: creator,
  },
  {
    certification: "Certified Scrum Master",
    organization: "Scrum Alliance",
    year: "2012-2021",
    image: creator,
  },
  {
    certification: "Intro to Web Development Certificate",
    organization: "Bellevue College",
    year: "2009",
    image: creator,
  },
];

const projects: TProject[] = [
  {
    name: "Space Mission Exercise",
    description:
      "React certificate class lab practicing React, routing, API calls, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/space-mission-exercise-1.png",
    sourceCodeLink: "https://space-mission-exercise.onrender.com/",
  },
  {
    name: "List Exercise",
    description:
      "Practice displaying data in Lists using React & Material UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/lit-lists-exercise-1.png",
    sourceCodeLink: "https://lit-lists-exercise.onrender.com/",
  },
  {
    name: "Grid Exercises",
    description:
      "Practice displaying data in Grids using React & Material UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/grid-grind-exercise-1.png",
    sourceCodeLink: "https://grid-grind-exercise.onrender.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { experiences, projects, services, technologies, certifications as testimonials };

