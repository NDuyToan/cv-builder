import { CVData } from '../types/cv';

export const cvEnglish: CVData = {
  id: 'cv-en',
  title: 'English Version',
  language: 'en',
  labels: {
    objective: 'CAREER OBJECTIVE',
    skills: 'TECHNICAL SKILLS',
    experience: 'WORK EXPERIENCE',
    education: 'EDUCATION',
    responsibilities: 'Key Responsibilities:',
    technologies: 'Technologies:',
    description: 'Description:',
    teamSize: 'Team size:',
    project: 'Project:',
    product: 'Product:',
    major: 'Major:',
    gpa: 'GPA:',
    grade: 'Classification:',
    phone: 'Phone:',
    email: 'Email:',
    address: 'Location:',
    linkedin: 'LinkedIn:',
    github: 'GitHub:',
    portfolio: 'Portfolio:',
  },
  personalInfo: {
    name: 'NGUYEN DUY TOAN',
    roleTitle: 'Middle Frontend Developer',
    avatarUrl: '/avatar.png',
    contact: {
      phone: '034 861 8373',
      email: 'nguyenduytoanbkdn@gmail.com',
      address: 'Da Nang, Vietnam',
      linkedin: {
        label: 'linkedin.com/in/toan-nguyen-dev',
        url: 'https://www.linkedin.com/in/toan-nguyen-dev/',
      },
      github: {
        label: 'github.com/NDuyToan',
        url: 'https://github.com/NDuyToan',
      },
      portfolio: {
        label: 'nguyenduytoan.io.vn',
        url: 'https://www.nguyenduytoan.io.vn/',
      },
    },
  },
  objective:
    'Frontend Developer with 4+ years of specialized experience in React, Next.js, TypeScript, and modern web application development. Proven track record in building scalable applications from scratch, crafting reusable component libraries, and delivering seamless responsive UIs across desktop, tablet, mobile, and WebView platforms. Strong foundation in frontend architecture, state management, complex form validation, RESTful API & GraphQL integration, and cross-functional collaboration. Passionate about writing clean, maintainable code and continuously optimizing application performance and developer productivity.',
  skills: [
    {
      category: 'Core Technologies',
      items: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      category: 'UI Libraries & CSS',
      items: ['Tailwind CSS', 'Ant Design', 'Shadcn UI', 'HeroUI', 'Bootstrap', 'Vuetify'],
    },
    {
      category: 'State & Data Management',
      items: ['Redux', 'Redux-Saga', 'RTK Query', 'Vuex', 'Axios'],
    },
    {
      category: 'Forms & Validation',
      items: ['Formik', 'Yup'],
    },
    {
      category: 'API & Data Processing',
      items: ['RESTful APIs', 'GraphQL', 'Axios', 'ExcelJS'],
    },
    {
      category: 'Performance & Optimization',
      items: [
        'Lazy Loading',
        'Code Splitting',
        'API Caching',
        'Rendering Optimization',
        'Image Optimization',
      ],
    },
    {
      category: 'Development Tools',
      items: [
        'Git',
        'GitLab',
        'Docker (Fundamentals)',
        'PM2 (Fundamentals)',
        'Cursor',
        'Codex',
      ],
    },
    {
      category: 'Backend (Fundamentals)',
      items: ['Node.js', 'Express.js', 'NestJS', 'Prisma', 'SQL', 'MongoDB'],
    },
    {
      category: 'Methodologies & Concepts',
      items: [
        'Responsive Web Design',
        'Reusable Component Design',
        'Cross-browser Compatibility',
        'WebView Development',
        'Role-based Access Control (RBAC)',
      ],
    },
  ],
  experiences: [
    {
      company: 'Personal Projects & Technical Growth',
      period: '12/2025 – Present',
      description:
        'Developing full-stack and modern web applications using React, Next.js, TypeScript, and UI libraries to strengthen frontend architecture and reusable component design skills.',
      bullets: [
        'Practiced building end-to-end full-stack applications with authentication, RESTful APIs, form validation, state management, and responsive interfaces.',
        'Optimized application performance through lazy loading, code splitting, API caching, pagination, and rendering optimization.',
        'Expanded hands-on backend and deployment knowledge with Node.js, Express.js, NestJS, MongoDB, Prisma, Docker, Linux, and CI/CD pipelines.',
      ],
    },
    {
      company: 'EnjoyWorks Company',
      role: 'Frontend Developer',
      period: '01/2023 – 11/2025',
      projects: [
        {
          name: 'Seasonal Worker Management – Korean Government Product',
          teamSize: '20 members (Frontend: 6)',
          description:
            'A large-scale labor management platform for local governments in South Korea. The system enables administrators to manage foreign seasonal workers, employers, job assignments, and operational data via a centralized admin portal and WebView mobile app.',
          responsibilities: [
            'Developed the Admin Portal from scratch using React and TypeScript, contributing to the overall frontend architecture, code structure, and feature development.',
            'Collaborated with Dev, QC, BA, and PM teams in requirement analysis; reviewed project documentation, clarified specifications, and contributed actionable feedback.',
            'Built enterprise-scale modules: worker management, employer management, seasonal job allocation, analytics dashboard, business forms, and high-volume data tables.',
            'Delivered responsive web interfaces and optimized WebView pages for desktop, tablet, mobile, and in-app webview environments.',
            'Managed complex global state with Redux-Saga and built multi-step enterprise forms with Formik and Yup validation.',
            'Implemented robust Role-based Access Control (RBAC) supporting Super Admin, Master Admin, and Admin tiers.',
            'Engineered Excel import/export functionality with ExcelJS to handle heavy seasonal worker datasets efficiently.',
            'Optimized file upload workflows by compressing images, converting HEIC to PNG, and batching uploads sequentially to prevent backend overload.',
            'Integrated multi-language localization using i18next; packaged, deployed, and maintained applications on VPS with PM2.',
          ],
          technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Redux-Saga',
            'Formik',
            'Yup',
            'i18next',
            'Tailwind CSS',
            'Ant Design',
            'Shadcn UI',
            'ExcelJS',
            'Git',
            'GitLab',
          ],
        },
        {
          name: 'Goodtraepay',
          description:
            'A fintech WebView e-wallet platform supporting cashless transactions via NFC cards and QR codes. Contributed to Social, Survey, Q&A Forum, and Daily Challenges modules.',
          responsibilities: [
            'Developed responsive UI for Social, Survey, Q&A Forum, and Daily Challenges modules using React.',
            'Built lightweight, responsive WebView pages ensuring smooth integration and native-like feel inside the mobile app.',
            'Collaborated closely with Backend, QA, BA, and UI/UX teams to deliver new features and troubleshoot production issues.',
            'Built frontend applications locally and deployed updates to pre-configured VPS environments for staging and production.',
          ],
          technologies: [
            'React',
            'Redux',
            'Redux-Saga',
            'RTK Query',
            'TypeScript',
            'Tailwind CSS',
            'SCSS',
            'Formik',
          ],
        },
        {
          name: 'Linglow Admin & Partner Portal',
          link: {
            label: 'linglow.net',
            url: 'https://linglow.net',
          },
          description:
            'An admin and partner management portal allowing enterprise recruiters to post job openings, screen candidate applications from the Linglow mobile app, and manage recruitment lifecycles.',
          responsibilities: [
            'Developed and maintained Admin and Partner web portals using Next.js and TypeScript.',
            'Engineered reusable, accessible UI components for user management, job postings, and applicant tracking systems.',
            'Coordinated with Backend, QA, BA, and UI/UX designers to refine specifications and ensure top-tier product delivery.',
          ],
          technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Redux',
            'RTK Query',
            'Tailwind CSS',
            'HeroUI',
            'Formik',
            'Yup',
          ],
        },
      ],
    },
    {
      company: 'SmartDev Company',
      role: 'Frontend Developer',
      period: '03/2021 – 10/2022',
      projects: [
        {
          name: 'Insurance Platform for M&A',
          teamSize: '5 members',
          description:
            'A web-based platform streamlining underwriting and insurance workflows for corporate Mergers & Acquisitions (M&A) transactions.',
          responsibilities: [
            'Developed and maintained responsive web interfaces for M&A insurance processing using Vue.js and Vuetify.',
            'Created reusable UI component libraries to improve code consistency and long-term maintainability across the system.',
            'Worked in an Agile/Scrum environment and communicated directly with international clients to clarify business needs and report progress.',
          ],
          technologies: ['Vue.js', 'Vuetify', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitLab'],
        },
        {
          name: 'PowerSave 3-Year Insurance Channel (Fubon Life)',
          teamSize: '5 members',
          productUrl: {
            label: 'echannel.fubonlife.com.hk',
            url: 'https://echannel.fubonlife.com.hk/',
          },
          description:
            'An online insurance portal enabling retail customers to purchase life insurance products provided by Fubon Life Insurance.',
          responsibilities: [
            'Developed and maintained user interfaces for the online life insurance portal using JavaScript and jQuery.',
            'Implemented pixel-perfect responsive web pages from UI design mockups; collaborated with Singapore backend team to integrate GraphQL APIs.',
            'Resolved UI cross-browser compatibility issues across major modern browsers.',
          ],
          technologies: [
            'JavaScript',
            'jQuery',
            'HTML5',
            'CSS3',
            'GraphQL',
            'Git',
            'GitLab',
          ],
        },
      ],
    },
    {
      company: 'NCC ASIA Company',
      role: 'Frontend Developer',
      period: '12/2019 – 12/2020',
      projects: [
        {
          name: 'Meeting Hub (Hotel Booking Platform)',
          teamSize: '4 members',
          description:
            'An online hotel reservation platform enabling users to search, compare, and book hotel rooms seamlessly.',
          responsibilities: [
            'Developed and maintained UI for the online hotel booking website using Vue.js and Element UI.',
            'Integrated RESTful APIs using Axios and managed centralized application state with Vuex.',
            'Built responsive layouts with Element UI; coordinated version control workflows via Git/GitLab.',
          ],
          technologies: [
            'Vue.js',
            'Vuex',
            'Axios',
            'Element UI',
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'GitLab',
          ],
        },
        {
          name: 'Insurance Management System',
          description:
            'Maintained an internal web application in the insurance domain.',
          responsibilities: [
            'Maintained existing features and resolved reported bugs and issues.',
            'Supported development and maintenance of the project using Angular 6 and Bootstrap.',
          ],
          technologies: [
            'Angular 6',
            'Bootstrap',
            'TypeScript',
            'Git',
            'GitLab',
          ],
        },
      ],
    },
    {
      company: 'Vinteli Company Limited',
      role: 'Technical Engineer',
      period: '11/2017 – 09/2019',
      bullets: [
        'Maintained and operated the Building Management System (BMS) at Da Nang International Terminal T2.',
        'Troubleshot issues and ensured stable operation of the HVAC (climate control) system and wastewater treatment monitoring system.',
        'Executed, supervised, and commissioned Access Control Systems (ACS), CCTV surveillance, and Wi-Fi infrastructure at Cam Ranh International Terminal.',
        'Coordinated with contractors and project stakeholders to ensure work quality and delivery schedules.',
        'Conducted system testing, commissioning, quality inspection, and official project handover upon completion.',
        'Participated in training programs on Smart Home automation solutions.',
      ],
    },
    {
      company: 'Mabuchi Motor Danang Co., Ltd.',
      role: 'Production Innovation Staff',
      period: '08/2016 – 06/2017',
      bullets: [
        'Planned and scheduled implementation projects for introducing automated machinery into motor production lines.',
        'Monitored and coordinated the end-to-end project lifecycle from design, equipment ordering, and assembly to commissioning and live operation.',
        'Collaborated with Design, Purchasing, Assembly, and Quality Control departments to guarantee project progress.',
        'Tracked project milestones, monitored work packages, and urged related teams to ensure on-time delivery.',
        'Supervised machinery installation, trial runs, and equipment handover prior to mass manufacturing.',
        'Managed and updated engineering records, manuals, and technical documentation related to project execution.',
      ],
    },
  ],
  education: [
    {
      school: 'Danang University of Science and Technology (DUT)',
      period: '2011 – 2016',
      degree: "Engineer's Degree",
      major: 'Mechatronics Engineering',
      gpa: '3.00 / 4',
      grade: 'Good',
    },
  ],
};
