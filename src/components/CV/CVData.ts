export const CVData = {
  email: import.meta.env.VITE_CV_EMAIL,
  phone: import.meta.env.VITE_CV_PHONE,
  fullName: 'Mykola Grybyk',
  jobTitle: 'Senior Software Development Engineer in Test',
  cityCountry: 'Amsterdam, Netherlands',

  languages: 'English, Ukrainian, Russian',

  summary: [
    `
As a seasoned Senior SDET with a strong background in frontend development,
I have a proven track record of building end-to-end automation frameworks and implementing CI/CD pipelines.`,
    `With a passion for problem-solving and a proactive, goal-oriented approach,
I excel at efficiently allocating my efforts to achieve the best possible results.`,
    `I am thrilled to leverage my skills and experience to contribute to your team's success
by efficiently achieving our shared goals.`
  ],

  resourceLinks: [
    {
      text: 'linkedin.com/in/mykola-grybyk-361ab140',
      href: 'https://www.linkedin.com/in/mykola-grybyk-361ab140'
    },
    { text: 'github.com/mgrybyk', href: 'https://github.com/mgrybyk' },
    { text: 'mgrybyk.m-utils.win (CV)', href: 'https://goo.gl/et70lm' }
  ],

  skills: [
    'Programming languages: TypeScript, JavaScript, Java, Bash, Batch',
    'Automation: Playwright, WebdriverIO, Selenium Webdriver, Appium, Cypress, BackstopJS, Lighthouse, Jest, Mocha, RestAssured, TestNG, various reporters like Allure',
    'CI/CD: Jenkins, Docker, Kubernetes, AWS, GitHub',
    'Operating systems: Windows, Linux, Mac',
    'Databases: MS SQL, Oracle, PostgreSQL, MongoDB',
    'Virtualization: VirtualBox, VMware ESXi',
    'Interviewing and mentoring',
    'Frontend frameworks: Vue.js, React, Storybook',
    'Build tools: Vite, Webpack',
    'Code quality tools: ESLint, SonarQube'
  ],

  workingHistory: [
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Sep 2021 - now, Amsterdam, Netherlands'],
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
    },
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
      link: { text: 'Certificate', href: 'https://goo.gl/jy7jsH' }
    },
    {
      mainTitle: 'Galytska Academy',
      subTitle: 'Bachelor',
      subStrings: ['Jul 2011 - Dec 2012']
    },
    {
      mainTitle: 'National Technical University of Ukraine',
      subTitle: 'Kyiv Polytechnic Institute',
      subStrings: ['Sep 2006 - May 2009']
    }
  ]
}
