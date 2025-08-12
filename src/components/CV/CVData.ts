export const CVData = {
  email: import.meta.env.DEV ? 'mgrybyk@stub.com' : import.meta.env.VITE_CV_EMAIL,

  yearsOfExperience: new Date().getFullYear() - 2010,

  workingHistoryMain: [
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Frontend Engineer',
      subStrings: [
        'AI solutions for researchers',
        'Sep 2021 - now, Amsterdam, Netherlands',
        'Projects: Researcher AI, Scopus AI, Funding Institutional'
      ],
      list: [
        `Led GitHub Actions migration from Jenkins, enabling 5+ teams to transition to modern CI/CD infrastructure and eliminate costly legacy systems.`,
        `Built visual regression testing with screenshot comparison and Lighthouse accessibility testing, integrated into PR workflows for automated design and accessibility reviews.`,
        `Optimized application performance: reduced component library bundle from 4MiB to 20KiB and main application from 30MiB to 600KiB, significantly improving load times.`,
        `Modernized legacy Node.js 8 codebase, resolving 100+ critical vulnerabilities and upgrading to current standards with zero security issues.`,
        `Architected decoupled frontend deployment, achieving 3x faster CI/CD and reducing customer load times from minutes to seconds in remote regions.`,
        `Developed Scopus AI search platform - a Perplexity-style solution leveraging Elsevier's scientific database for AI-powered research with citation tracking and deep analysis capabilities.`,
        `Built comprehensive mock server with automated fixture management and user switching for streamlined development workflows.`,
        `Tech stack: TypeScript, React, TanStack Query, Node.js, Storybook, Playwright, Lighthouse, AWS, Kubernetes, Docker, GitHub Actions, Postgres, Java`
      ]
    },
    {
      mainTitle: 'Cryptocurrency Trading Platform',
      subTitle: 'Personal Projects',
      subStrings: [
        'Built automated trading system for cryptocurrency markets with real-time decision making and execution.'
      ],
      list: [
        `Architected microservices ecosystem: decision engine, trade execution agent, multi-source data collector, and Telegram signal monitoring`,
        `Implemented WebSocket-based inter-service communication for low-latency trade execution`,
        `Developed Vue.js trading dashboard with real-time charts, P&L tracking, and strategy analytics`,
        `Integrated multiple data sources (BullX, DEX platforms) for market analysis and signal aggregation`,
        `Tech stack: TypeScript, Vue.js, Node.js, WebSockets, LowDB`
      ]
    },
    {
      mainTitle: 'ServiceHouse',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Dutch energy company', 'Jul 2020 - Jul 2021, Amsterdam, Netherlands'],
      list: [
        `Established automated testing strategy from zero, analyzing existing processes and creating comprehensive roadmap for integration and end-to-end testing implementation.`,
        `Redesigned development pipelines with integrated static analysis and automated testing in PR workflows, transforming team from no quality processes to modern CI/CD practices.`,
        `Mentored development team on testing best practices and process adoption to ensure sustainable implementation.`,
        `Tech stack: TypeScript, Node.js, Jest, Cypress, GitHub Actions, Docker`
      ]
    },
    {
      mainTitle: 'Ciklum',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['MoPlay betting', 'Apr 2018 - Mar 2020,  Malaga, Spain'],
      list: [
        `Built local mobile device farm with Selenium Grid for automated testing on real devices, enabling comprehensive cross-platform validation.`,
        `Contributed to WebdriverIO open-source project as core maintainer, implementing features, reviewing code, and fixing critical bugs.`,
        `Led team of 5 automation engineers, providing technical mentorship and establishing testing standards for betting platform.`,
        `Tech stack: WebdriverIO, TypeScript, Appium, Cypress, Selenium Grid, BrowserStack, Detox`
      ]
    },
    {
      mainTitle: 'Micro Focus',
      subTitle: 'Senior QA Automation Engineer',
      subStrings: [
        'Dec 2011 - Apr 2018,  Kyiv, UA',
        'Project: Deployment Automation (corporate Jenkins alternative) and some other related projects'
      ],
      list: [
        `Established CI infrastructure from scratch for legacy product, building physical server room setup that saved 2 man-days per week across development teams.`,
        `Built one-click product installation solution, saving 2 hours per deployment and achieving 10,000+ uses by departure.`,
        `Developed custom staging environment dashboard with version monitoring, progress tracking, and automated software installation, reducing environment setup time from 1 day to 1-2 hours.`,
        `Enhanced product UI/UX through feature design implementations, receiving positive customer feedback and improving user satisfaction.`,
        `Mentored QA team on analytical test design approaches, improving testing efficiency and reducing manual effort.`,
        `Implemented 2,500+ automated tests running across multiple OS (Windows Server, Ubuntu, RedHat) and browsers (Chrome, Firefox, IE11).`,
        `Tech stack: TypeScript, Vue.js, JavaScript, Node.js, Java, Selenium WebDriver, Jenkins, Docker, GitHub`
      ]
    }
  ],

  workingHistoryOld: [
    {
      mainTitle: 'Wincor-Nixdorf',
      subTitle: 'Junior QA Engineer',
      subStrings: ['Sep 2010 - Dec 2012,  Kyiv, UA', 'Project: Namos'],
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
