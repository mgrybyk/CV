export const CVData = {
  email: import.meta.env.DEV ? 'mgrybyk@stub.com' : import.meta.env.VITE_CV_EMAIL,

  yearsOfExperience: new Date().getFullYear() - 2010,

  workingHistoryMain: [
    {
      mainTitle: 'Elsevier',
      subTitle: 'Senior Frontend Engineer',
      subStrings: [
        'Funding search tool for researchers',
        'Sep 2021 - now, Amsterdam, Netherlands',
        'Projects: Funding Institutional, Graphene (internal web component library)'
      ],
      list: [
        `Developed GitHub actions for reporting purposes (refer to https://github.com/orgs/mgrybyk-org/repositories) to facilitate the migration from Jenkins to GitHub. This enabled at least 5 teams to transition to new infrastructure, effectively discontinuing the use of the old and costly infrastructure.`,
        `Implemented screenshot comparison testing using free, open-source solutions, enabling developers and designers to review visual changes within pull requests.`,
        `Implemented Lighthouse accessibility testing with free, open-source solutions, enabling the visualization of accessibility changes within pull requests and providing a reporting solution for tracking changes over time.`,
        `Enhanced user experience by optimizing performance and loading times. Reduced the JavaScript entrypoint size from 4MiB to 20KiB across the company-wide component library and from 30MiB to 600KiB in the main project.`,
        `Upgraded an old Node.js 8 project, addressing hundreds of critical and major vulnerabilities, deprecated packages, and approaches, resulting in a up-to-date, vulnerability-free environment following modern development guidelines.`,
        `Developed a mock server with automated recording and fixture updates, as well as mock and user-switching modes, simplifying the team's development process.`,
        `Decoupled the static website from the Java app, resulting in CI/CD processes being more than 3 times faster, simplifying the development process, and enabling proper caching utilization, significantly improving loading times (from minutes to seconds) for customers in certain regions.`,
        `Tech stack: TypeScript, Node.js, React, TanStack, Storybook, Playwright, Lighthouse, Cloudflare, AWS, Kubernetes, Docker, Dependabot, CodeQL, SonarQube, Checkmarx, Jenkins, Twistlock, Java, RestAssured, JUnit, Postgres`
      ]
    },
    {
      mainTitle: 'ServiceHouse',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['Dutch energy company', 'Jul 2020 - Jul 2021, Amsterdam, Netherlands'],
      list: [
        `The company hired me to implement automated testing. After analyzing company processes, I refined the development process (which took most of the time), created a roadmap for integration and end-to-end tests, initiated its implementation, and mentored others to ensure its continuation.`,
        `I redesigned development pipelines to incorporate static analysis and automated testing, integrating them with PRs. It was a hard journey from having no quality in mind to establishing proper CI/CD and development processes.`
      ]
    },
    {
      mainTitle: 'Ciklum',
      subTitle: 'Senior Software Development Engineer in Test',
      subStrings: ['MoPlay betting', 'Apr 2018 - Mar 2020,  Malaga, Spain'],
      list: [
        `Built a local mobile device farm managed with Selenium Grid, enabling the execution of end-to-end tests on real devices.`,
        `Actively contributed to the WebdriverIO open-source project by participating in code reviews, bug fixes, and developing new features as needed by the product.`,
        `Led and mentored a team of five automation engineers, providing technical guidance and training.Project: MoPlay betting. - Built a local mobile device farm managed with Selenium Grid, enabling the execution of end-to-end tests on real devices. - Actively contributed to the WebdriverIO open-source project by participating in code reviews, bug fixes, and developing new features as needed by the product. - Led and mentored a team of five automation engineers, providing technical guidance and training.`,
        `Tech stack: WebdriverIO, Appium, Cypress, BackstopJS, Detox, BrowserStack`
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
        `Implemented Continuous Integration (CI) in a legacy product without automation. I initiated this project from scratch in 2011, which involved ordering hardware, installing it, and managing it in the local company server room. It saved around 2 man-days per week.`,
        `Implemented a solution for installing and configuring the product in just a couple of clicks, saving approximately 2 hours each time. By the time I left the company, it had been used around 10,000 times.`,
        `Built a custom dashboard for managing staging environments, which included monitoring versions, aggregating reports, tracking installation and test progress, identifying users working on it, and executing actions such as installing specific software. It decreased time needed for using that environments by around 4-8 times (from 1 man-day to just 1-2 hours).`,
        `I enjoyed working on feature design implementations to enhance their UI/UX appeal and better align them with customer requests, even though making decisions within limited time and resources was challenging quite often. While I cannot quantify the exact impact, I was pleased to receive positive feedback from customers.`,
        `Mentored other QAs in developing effective test designs using analytical approaches to enhance testing efficiency and minimize efforts.`,
        `Implemented over 2,500 automated tests that run reliably on Windows Server, Ubuntu, RedHat and some other operating systems, as well as on Chrome, Firefox, and IE11 browsers.`,
        `Tech stack: TypeScript, Vue.js, JavaScript, GitHub, Jenkins, Node.js, Java, Selenium, Selenium WebDriver, Docker Products`
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
