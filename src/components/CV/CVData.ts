export const CVData = {
  email: import.meta.env.DEV ? 'mgrybyk@stub.com' : import.meta.env.VITE_CV_EMAIL,

  yearsOfExperience: new Date().getFullYear() - 2010,

  workingHistoryMain: [
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Fullstack Engineer',
      subStrings: [
        'Sep 2021 - now, Amsterdam, Netherlands',
        'Projects: LeapSpace, Scopus AI, company design system'
      ],
      list: [
        `Working on LeapSpace, Elsevier's research-grade AI workspace, primarily across frontend and Node.js middleware, with contributions to Java/Spring Boot services, CI/CD, architecture, and the company design system.`,
        `Contributed to the company design system used across 5+ teams, working closely with designers and engineers on shared components, architecture, and adoption.`,
        `Built and evolved Playwright integration testing with mocked backend services, visual regression coverage, and Lighthouse accessibility checks integrated into PR workflows.`,
        `Led migration from Jenkins to GitHub Actions, helping 5+ teams move to the new CI/CD infrastructure and retire legacy systems.`,
        `Reduced the component-library bundle from 4 MiB to 20 KiB and the main application bundle from 30 MiB to 600 KiB.`,
        `Architected decoupled frontend deployment, making CI/CD around 3x faster and reducing application load times from minutes to seconds for users in remote regions.`,
        `Modernized a legacy Node.js 8 codebase, upgraded dependencies, and resolved 100+ security findings, restoring a clean security baseline.`,
        `Worked on Scopus AI, an AI-powered research product built on Elsevier's scientific content, including search, citations, and deeper research workflows.`
      ],
      techStack:
        'TypeScript, React, TanStack Query, Node.js, Storybook, Playwright, Lighthouse, AWS, Kubernetes, Docker, GitHub Actions, Postgres, Java / Spring Boot'
    },
    {
      mainTitle: 'Cryptocurrency Trading Platform',
      subTitle: 'Personal Projects',
      subStrings: [
        'Built automated trading system for cryptocurrency markets with real-time decision making and execution.',
        'May 2024 - Dec 2024'
      ],
      list: [
        `Built a trading application composed of the following components (stand-alone / microservices): Decision engine ('brain'; pricing strategy), trade execution engine (simplistic), data collector (collecting market prices and telegram messages)`,
        `Implemented WebSocket inter-service communication for low-latency trade execution`,
        `Developed Vue.js trading dashboard with real-time charts, P&L tracking, and strategy analytics`,
        `Integrated multiple data sources (BullX, DEXScreener, DEX platforms) for market analysis and signal aggregation`
      ],
      techStack: 'TypeScript, Vue.js, Node.js, WebSockets, LowDB'
    },
    {
      mainTitle: 'ServiceHouse',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Dutch energy company', 'Jul 2020 - Jul 2021, Amsterdam, Netherlands'],
      list: [
        `Established automated testing strategy from zero, analyzing existing processes and creating comprehensive roadmap for integration and end-to-end testing implementation.`,
        `Redesigned development pipelines with integrated static analysis and automated testing in PR workflows, transforming team from no quality processes to modern CI/CD practices.`,
        `Mentored development team on testing best practices and process adoption to ensure sustainable implementation.`
      ],
      techStack: 'TypeScript, Node.js, Jest, Cypress, GitHub Actions, Docker'
    },
    {
      mainTitle: 'Ciklum',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['MoPlay betting', 'Apr 2018 - Mar 2020,  Malaga, Spain'],
      list: [
        `Built local mobile device farm with Selenium Grid for automated testing on real devices, enabling comprehensive cross-platform validation.`,
        `Contributed to WebdriverIO open-source project as core maintainer, implementing features, reviewing code, and fixing critical bugs.`,
        `Led team of 5 automation engineers, providing technical mentorship and establishing testing standards for betting platform.`
      ],
      techStack: 'WebdriverIO, TypeScript, Appium, Cypress, Selenium Grid, BrowserStack, Detox'
    },
    {
      mainTitle: 'Micro Focus',
      subTitle: 'Senior QA Automation Engineer',
      subStrings: [
        'Jan 2012 - Apr 2018,  Kyiv, UA',
        'Project: Deployment Automation (corporate Jenkins alternative) and some other related projects'
      ],
      list: [
        `Established CI infrastructure from scratch for legacy product, building physical server room setup that saved 2 man-days per week across development teams.`,
        `Built one-click product installation solution, saving 2 hours per deployment and achieving 10,000+ uses by departure.`,
        `Developed custom staging environment dashboard with version monitoring, progress tracking, and automated software installation, reducing environment setup time from 1 day to 1-2 hours.`,
        `Enhanced product UI/UX through feature design implementations, receiving positive customer feedback and improving user satisfaction.`,
        `Mentored QA team on analytical test design approaches, improving testing efficiency and reducing manual effort.`,
        `Implemented 2,500+ automated tests running across multiple OS (Windows Server, Ubuntu, RedHat) and browsers (Chrome, Firefox, IE11).`
      ],
      techStack:
        'TypeScript, Vue.js, JavaScript, Node.js, Java, Selenium WebDriver, Jenkins, Docker, GitHub'
    }
  ],

  workingHistoryOld: [
    {
      mainTitle: 'Wincor-Nixdorf',
      subTitle: 'Junior QA Engineer',
      subStrings: ['Sep 2010 - Dec 2011,  Kyiv, UA', 'Project: Namos'],
      text: [
        `I began my QA career with guidance from experienced mentors, who taught me industry-standard processes, testing methodologies, and MSSQL debugging techniques. In my role as QA Engineer, I also oversaw the internal QA lab, leveraging my hardware expertise to ensure optimal performance.`,
        `During this time, I created my first C# tool to streamline test data generation and enhance testing efficiency, demonstrating my passion for automation and problem-solving.`
      ]
    }
  ],

  educationHistory: [
    {
      mainTitle: 'ISTQB® Certified Tester',
      subTitle: 'Foundation Level',
      subStrings: ['Feb 2015'],
      link: { text: 'Certificate', href: '/files/ISTQB_Mykola_Grybyk.pdf' }
    },
    {
      mainTitle: 'Galytska Academy',
      subTitle: 'Computer Science',
      subStrings: ['Jul 2011 - Dec 2012', 'Bachelor']
    },
    {
      mainTitle: 'National Technical University of Ukraine (KPI)',
      subTitle: 'Computer Science',
      subStrings: ['Sep 2006 - May 2009']
    }
  ]
}
