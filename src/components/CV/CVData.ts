export const CVData = {
  email: import.meta.env.VITE_CV_EMAIL,
  phone: import.meta.env.VITE_CV_PHONE,
  fullName: 'Mykola Grybyk',
  jobTitle: 'Frontend Engineer',
  cityCountry: 'Amsterdam, Netherlands',

  languages: 'English, Ukrainian, Russian',

  yearsOfExperience: new Date().getFullYear() - 2010,

  summary: [
    `Passionate Frontend (React, Vue) & Fullstack (Node.js) Engineer with a proven track record of building high-performance, user-friendly web applications.`,
    `Leveraging my 10+ years of SDET experience, I seamlessly integrate automated testing practices and CI/CD pipelines throughout the development lifecycle to ensure reliable and maintainable applications.`
  ],

  resourceLinks: [
    {
      text: 'linkedin.com/in/mykola-grybyk',
      href: 'https://www.linkedin.com/in/mykola-grybyk',
      hidePrintMode: true
    },
    { text: 'github.com/mgrybyk', href: 'https://github.com/mgrybyk' },
    { text: 'cv.mgrybyk.icu (CV)', href: 'https://cv.mgrybyk.icu' }
  ],

  skills: [
    'Programming languages: TypeScript, JavaScript, Bash, Java',
    'Automation: Playwright, WebdriverIO, Selenium Webdriver, Appium, Cypress, BackstopJS, Lighthouse, Jest, Mocha, Vitest, RestAssured, TestNG, various reporters like Allure',
    'CI/CD/Cloud: GitHub Actions, Jenkins, Cloudflare, AWS, Docker, Kubernetes',
    'Operating systems: Windows, Linux, Mac',
    'Databases: MS SQL, Oracle, PostgreSQL, MongoDB',
    'Interviewing and mentoring',
    'Frontend frameworks: React, Vue.js, Storybook',
    'Build tools: Vite, Webpack',
    'Code quality tools: ESLint, SonarQube'
  ],

  workingHistoryMain: [
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Frontend Engineer',
      subStrings: ['Jan 2023 - now, Amsterdam, Netherlands'],
      list: [
        `Built new pages and reusable components using React, while applying best practices and coding standards.`,
        `Maintained code quality and project security by addressing vulnerabilities identified through automated tools and updating outdated libraries/code with secure alternatives. This resulted in the absence of critical and major vulnerabilities.`,
        `Implemented CI/CD pipelines in GitHub Actions for both projects, streamlining the build, testing, release, and deployment processes.`,
        `Implemented component and integration tests, and replaced most of the JSDom. This resulted in the prevention of numerous bugs, regressions, and increased development speed by eliminating manual activities, while decreasing the chance of potential risks.`,
        `Automated accessibility and screenshot comparison testing with Lighthouse and Playwright to ensure compliance with WCAG standards and deliver a seamless experience for developers and designers. Both accessibility and screenshot changes were reflected in PRs and kept as historical records for trend reports.`,
        `Improved user experience by optimizing performance and loading time. Reduced JS entry point size from 30MiB to 600KiB through techniques like tree shaking, decoupling assets from the bundle, lazy loading, removal of unused libraries, and dead code.`,
        `Tech stack: TypeScript, Node.js, React, TanStack, Storybook, Playwright, Lighthouse, Cloudflare, AWS, Kubernetes, Docker, Dependabot, CodeQL, SonarQube, Checkmarx`
      ]
    },
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Sep 2021 - Jan 2023, Amsterdam, Netherlands'],
      list: [
        `Led automation activities in two teams, developing and implementing software testing strategies for complex projects involving both frontend and backend technologies`,
        `Assisted developers with building automation tests, and provided technical guidance on testing frameworks and best practices`,
        `Maintained and kept up to date the frontend codebase, ensuring consistent quality and user experience across multiple projects`,
        `Developed and maintained CI/CD pipelines using Jenkins, AWS, and Kubernetes, enabling seamless deployment of software products across multiple environments`,
        `Tech stack: TypeScript, Node.js, React, Storybook, Playwright, Lighthouse, Jenkins, AWS, Kubernetes, Docker, Checkmarx, Twistlock, Java, RestAssured, JUnit, Postgres, Cloudflare`
      ]
    },
    {
      mainTitle: 'ServiceHouse',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Jul 2020 - Jul 2021, Amsterdam, Netherlands'],
      list: [
        `Implemented integration and end-to-end frameworks, enabling efficient testing of complex software systems`,
        `Introduced automation roadmap and best practices, resulting in increased test coverage and more effective use of testing resources`,
        `Adopted CI processes to include static analysis, automation phases, and reporting, ensuring high standards of code quality and reliability`,
        `Led test design and pull request reviews, providing technical guidance and ensuring adherence to established testing standards and best practices`,
        `Mentored team members and provided technical training, helping to build a strong and capable development team`
      ]
    },
    {
      mainTitle: 'Ciklum',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Apr 2018 - Mar 2020,  Malaga, Spain'],
      list: [
        `Built integration framework with Cypress, resulting in a more efficient and effective testing process for complex software systems`,
        `Built end-to-end framework with WebdriverIO to run browser, mobile browser, and React Native app tests, leveraging Selenium Grid and Appium to ensure comprehensive test coverage across multiple platforms and devices`,
        `Led and mentored a team of five automation engineers from a technical perspective, providing technical guidance and training to ensure the development of a strong and capable team`,
        `Actively contributed to the WebdriverIO open-source project, participating in code reviews, bug fixes, and new feature development`,
        `Tech stack: WebdriverIO, Appium, Cypress, BackstopJS, Detox, BrowserStack`
      ]
    },
    {
      mainTitle: 'Micro Focus',
      subTitle: 'Senior QA Automation Engineer',
      subStrings: ['Sep 2016 - Apr 2018,  Kyiv, UA', 'Project: Deployment Automation'],
      list: [
        `Built REST automation framework using Java, enabling more efficient and effective testing of complex REST APIs`,
        `Built end-to-end automation framework using Java, Webdriver, and TestNG, resulting in the implementation of over 2,500 automated tests and ensuring comprehensive test coverage across multiple platforms`,
        `Implemented internal Docker infrastructure from scratch, including configuring CentOS servers, designing Docker images, and building a web app to monitor and manage images and containers`,
        `Built a web app using VueJS, NodeJS, and MongoDB to manage and monitor test execution and test environments in real-time, leveraging WebSockets to provide real-time updates`,
        `Built other internal tools to improve reporting, generate test data, and automate the integration of QA and dev tools with corporate infrastructure, streamlining and automating manual and routine tasks`,
        `Mentored manual and automation QAs, providing technical guidance and training to ensure the development of a strong and capable team`,
        `Collaborated closely with all team members, including developers, QAs, and managers, to identify and automate time-consuming and routine tasks, identify defects early in the development cycle, and provide better visibility to each other`,
        `Participated in every feature discussion session as an expert user of Deployment Automation, providing valuable input on design and ensuring that the team moved in the right direction`
      ]
    }
  ],

  workingHistoryOld: [
    {
      mainTitle: 'Serena Software',
      subTitle: 'Senior QA Engineer',
      subStrings: [
        'Sep 2014 - Sep 2016, Kyiv, UA',
        'Projects: Release Management, Service Management'
      ],
      text: [
        `
As a manual QA, I transitioned to the automation/manual QA path where I focused on test design planning,
definition, and review, as well as mentoring others. I also spent time on automation activities,
such as designing SOAP tests (using C#) and automating project configuration with Ranorex (using C#).`,
        `
I built a fully-functional CI pipeline that automated the build, deployment to test environments,
and test execution with nightly and one-button on-demand jobs.
This saved both manual QAs and developers up to half a day daily.`,
        `Additionally, I created a small web app with NodeJS and Angular v1 to monitor and manage test environments.`
      ]
    },
    {
      mainTitle: 'Serena Software',
      subTitle: 'QA Engineer',
      subStrings: [
        'Jan 2012 - Sep 2014,  Kyiv, UA',
        'Projects: Requirement Manager, Development Manager'
      ],
      text: [
        `As a QA Engineer, I took a proactive approach in every SDLC phase, spending most of my efforts on analysis, design, and planning to optimize later stages. I experimented with risk-based approaches to accelerate release time and minimize manual testing.`,
        `During my tenure, I invested my personal time in learning Jenkins, C#, Ranorex, batch, PowerShell, and attended a 4-month course on HTML/CSS/JavaScript. This dedication resulted in a significant reduction in product set-up time, from 2.5 hours to only 20 minutes, thanks to my essential Jenkins and automation knowledge.`
      ]
    },
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
