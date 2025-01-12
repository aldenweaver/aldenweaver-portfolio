type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  // contact: {
  //   form: {
  //     name: {
  //       span: string;
  //       placeholder: string;
  //     };
  //     email: {
  //       span: string;
  //       placeholder: string;
  //     };
  //     message: {
  //       span: string;
  //       placeholder: string;
  //     };
  //   };
  // } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    skills: TSection;
    certifications: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Alden Weaver's Portfolio",
    fullName: "Alden Weaver",
    email: "aaldenweaver@gmail.com",
  },
  hero: {
    name: "Alden Weaver",
    p: ["Full stack developer specializing in Javascript & C#. Currently learning AI & ML."],
  },
  // contact: {
  //   p: "Get in touch",
  //   h2: "Contact.",
  //   form: {
  //     name: {
  //       span: "Your Name",
  //       placeholder: "What's your name?",
  //     },
  //     email: { span: "Your Email", placeholder: "What's your email?" },
  //     message: {
  //       span: "Your Message",
  //       placeholder: "What do you want to say?",
  //     },
  //   },
  // },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I am an experienced full-stack software, web, and mobile developer with industry experience, a strong education, and additional certifications. I've worked with many technologies, including multiple Javascript frameworks and libraries, C#/.NET, SQL and NoSQL. I'm a quick learner who is passionate about using technology and teamwork to solve real-world problems and make the world a better place.`,
    },
    experience: {
      p: "Industry Track Record",
      h2: "Work Experience",
    },
    skills: {
      p: "Tech I Use",
      h2: "Skills",
    },
    certifications: {
      p: "Lifelong Learning",
      h2: "Certifications",
    },
    works: {
      p: "Work Examples",
      h2: "Projects",
      content: `The following projects showcase my skills and experience through
    real-world examples of my work. Many of these are simple exercises; however, I have more experience working on proprietary projects.`,
    },
  },
};

// I'm a skilled software developer with experience in TypeScript and
//       JavaScript, and expertise in frameworks like React, Node.js, and
//       Three.js. I'm a quick learner and collaborate closely with clients to
//       create efficient, scalable, and user-friendly solutions that solve
//       real-world problems. Let's work together to bring your ideas to life!
// Each project is briefly described with links to code repositories and live demos in it. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.