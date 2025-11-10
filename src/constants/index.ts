import type {
  TCertifications,
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
} from '../types';

import {
  backend,
  creator,
  csharp,
  discord,
  docker,
  git,
  graphql,
  grid_exercise,
  java,
  javascript,
  lists_exercise,
  mongodb,
  nextjs,
  nodejs,
  postgresql,
  python,
  reactjs,
  space_exercise,
  tailwind,
  typescript,
  web,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services: TService[] = [
  {
    title: 'BA in Computer Science - Harvey Mudd College, Claremont, CA',
    icon: backend,
  },
  {
    title: 'BA in Media Studies - Scripps College, Claremont, CA',
    icon: web,
  },
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
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Discord',
    icon: discord,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences: TExperience[] = [
  {
    title: 'Senior AI Software Engineer',
    companyName: 'AI Startup',
    icon: creator,
    iconBg: '#383E56',
    date: 'September 2025 - Present',
    points: [
      'Using Claude Code to develop IIoT Industry 4.0 SaaS platforms from start to finish, leveraging 10+ years of full stack experience to orchestrate AI coding engines',
      'Building RAG-based AI models that serve as subject matter experts (SMEs)',
      'Contributing to team development while maintaining documentation of AI-assisted workflows',
      'Keeping current with latest technologies in software & renewable energy sectors',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Semper Valens Solutions',
    icon: creator,
    iconBg: '#E6DEDD',
    date: 'June 2024 - August 2025',
    points: [
      'Developing progressive web apps to support the health of military members & their families',
      'Writing dev & stakeholder documentation; creating & giving continued learning presentations',
      'Using JavaScript (React, Redux), TypeScript, Vite, & TailwindCSS',
      'Upskilling in AI/ML & applying it to current projects; writing Python scripts',
      'Learned Sitecore CMS & how to integrate it into React apps via GraphQL',
      'Working cross-functionally with PMs, UX, QA, devops, stakeholders, & other developers',
    ],
  },
  {
    title: 'Technical Consultant',
    companyName: '',
    icon: creator,
    iconBg: '#383E56',
    date: 'January 2018 - September 2025',
    points: [
      'Worked with high-performance computing company to get their dev team accepted as presenters at the Ubuntu Summit; worked with presenters to refine their presentations, community presence, and developer documentation',
      'Trained AI chatbots to write better code; AI bootcamp tutor',
      'Successfully helped a renewable energy equipment supplier secure WA state grant funding & strategic partnerships with major universities',
      'Collaborated with developers, stakeholders, users, & management on technical vision, presentations, documents, & grants',
      'Represented Seattle Rust User Group at The Linux Foundation\'s Open Source Summit Post-Conference Event; attending meetups & hackathons in Seattle & at Microsoft Reactor (won an AI hackathon with my team!)',
      'Tested & improved IoT AI computer vision algorithm & mobile app; installed IoT hardware',
    ],
  },
  {
    title: 'Controls Engineer',
    companyName: 'H2Power Tech',
    icon: creator,
    iconBg: '#E6DEDD',
    date: 'September 2021 - October 2022',
    points: [
      'Developed C#/.NET/WPF software (dashboards, control panels, data loggers) to interface with hydrogen fuel cells & programmable logic controllers',
      'Collaborated on cross-team effort to develop International Electrotechnical Commission (IEC)-compliant code & documentation for functional safety certification',
      'Read & applied IEC 61508-2 & -3 standards to software development and documentation',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'Vertafore',
    icon: creator,
    iconBg: '#383E56',
    date: 'June 2015 - December 2017',
    points: [
      'Used C#/.NET & React.js to code diagnostic dashboards for the Single Sign On team',
      'Collaborated with development, PM, & UX teams on projects such as client portals, internal portals, web forms, HTML emails, & UI component libraries',
      'Won honorable mention in company-wide hackathon & wrote about it in an internal article',
    ],
  },
  {
    title: 'Software Engineer Internships',
    companyName: '',
    icon: creator,
    iconBg: '#E6DEDD',
    date: 'Summers 2012 - 2014',
    points: [
      'Vertafore (2014): Built an Angular dashboard to show the health of our single sign-on system',
      'Seattle Avionics Software (2013): Helped build a PostgreSQL DB, API, & front-end for a complex flight-planning app with many relational DB tables for airport & navigation data',
      'Attended the 2013 Grace Hopper Conference & developed a passion for conferences & involvement in the development community',
      'SolutionsIQ (2012): Worked on an ASP.NET web app for T-Mobile, used by their CSRs, that allows for flexible business rules & logic',
    ],
  },
];

const certifications: TCertifications[] = [
  {
    certification: 'Security+ SY0-701',
    organization: 'CompTIA',
    year: '2024',
    image: creator,
  },
  {
    certification: 'Quantum Explorer',
    organization: 'IBM Quantum',
    year: '2023-2024',
    image: creator,
  },
  {
    certification: 'React.js Certificate',
    organization: 'Noble Desktop',
    year: '2023',
    image: creator,
  },
  {
    certification: 'Certified Scrum Product Owner',
    organization: 'Scrum Alliance',
    year: '2021',
    image: creator,
  },
  {
    certification: 'Certified Scrum Master',
    organization: 'Scrum Alliance',
    year: '2012-2021',
    image: creator,
  },
  {
    certification: 'Intro to Web Development Certificate',
    organization: 'Bellevue College',
    year: '2009',
    image: creator,
  },
];

const projects: TProject[] = [
  {
    name: 'Space Mission Exercise',
    description: 'React certificate class lab practicing React, routing, API calls, etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: space_exercise,
    sourceCodeLink: 'https://space-mission-exercise.onrender.com/',
  },
  {
    name: 'List Exercise',
    description: 'Practice displaying data in Lists using React & Material UI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'materialui',
        color: 'pink-text-gradient',
      },
    ],
    image: lists_exercise,
    sourceCodeLink: 'https://lit-lists-exercise.onrender.com/',
  },
  {
    name: 'Grid Exercises',
    description: 'Practice displaying data in Grids using React & Material UI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'materialui',
        color: 'pink-text-gradient',
      },
    ],
    image: grid_exercise,
    sourceCodeLink: 'https://grid-grind-exercise.onrender.com/',
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
