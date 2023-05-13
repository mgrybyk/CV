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
    }
  ],

  educationHistory: [
    {
      mainTitle: 'ISTQB® Certified Tester',
      subTitle: 'Foundation Level',
      subStrings: ['Feb 2015'],
      link: { text: 'Certificate', href: 'https://goo.gl/jy7jsH' }
    }
  ]
}
