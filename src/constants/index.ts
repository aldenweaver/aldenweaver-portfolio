import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
  TTestimonial,
} from "../types";

import {
  backend,
  carrent,
  css,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web, Mobile, and Software Developer",
    icon: mobile,
  },
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
    icon: starbucks,
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
    icon: tesla,
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
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2021 - Oct 2022",
    points: [
      "Developed software using C#/.NET/WPF (dashboards, control panels, & data loggers) to talk to hardware (hydrogen fuel cells & programmable logic controllers)",
    ],
  },
  {
    title: "App Tester & Hardware Manager",
    companyName: "Focal Systems",
    icon: meta,
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
    icon: meta,
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
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2015 - Dec 2017",
    points: [
      "Collaborated with development, PM, & UX teams on projects such as diagnostic dashboards, client portals, internal portals, web forms, HTML emails, & UI component libraries.",
    ],
  },
  {
    title: "Software Engineer Internships",
    companyName: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Summers 2012-2014",
    points: [
      "Vertafore (2014): Built an Angular dashboard to show the health of our single sign-on system",
      "Seattle Avionics Software (2013): Helped build a PostgreSQL DB, API, & front-end for a complex flight-planning app with many relational DB tables for airport & navigation data",
      "SolutionsIQ (2012): Worked on an ASP.NET web app for T-Mobile, used by their CSRs, that allows for flexible business rules & logic",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

