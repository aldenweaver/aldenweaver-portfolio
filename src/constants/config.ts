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
    title: "Alden Weaver",
    fullName: 'Alden Weaver',
    email: 'aaldenweaver@gmail.com',
  },
  hero: {
    name: 'Alden Weaver',
    p: [
      'Software Engineer & Technical Writer. \n 10+ years building software and writing documentation. \n Combining engineering expertise with technical communication.',
    ],
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
      p: 'Introduction',
      h2: 'Overview',
      content: `Software Engineer & Technical Writer with 10+ years of experience building complex systems & creating developer-focused content. Worked on everything from hydrogen fuel cell control systems to military family health apps. Early adopter of AI-assisted development workflows, using Claude Code since July 2025 after experience with prior AI coding tools & with training AI chatbots to write better code. Built production-quality documentation analyzer demonstrating deep understanding of information architecture, developer workflows, & technical content creation. Combining Computer Science & Media Studies education with industry experience & passion for championing safe technology to better the world.`,
    },
    experience: {
      p: 'Track Record',
      h2: 'Experience',
    },
    skills: {
      p: 'Tech I Use',
      h2: 'Skills',
    },
    certifications: {
      p: 'Lifelong Learning',
      h2: 'Certifications',
    },
    works: {
      p: 'Work Examples',
      h2: 'Projects',
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
