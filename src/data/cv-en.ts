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
    'Frontend Developer with over 4 years of hands-on experience in React, Next.js, and TypeScript. Experienced in building web applications from the ground up, designing reusable UI components, and optimizing responsive interfaces across desktop, mobile, and WebView. Solid background in state management, complex form handling, REST and GraphQL integration, and collaborative Agile development.',
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
        'Building personal projects with React, Next.js, and TypeScript to experiment with modern frontend patterns and reusable UI component architecture.',
      bullets: [
        'Built full-stack web applications with user authentication, RESTful APIs, form validation, and responsive mobile layouts.',
        'Improved page load speeds through lazy loading, code splitting, client-side API caching, and render tuning.',
        'Practiced backend development and deployment using Node.js (Express, NestJS), MongoDB, Prisma, Docker, and Linux.',
      ],
    },
    {
      company: 'EnjoyWorks Company',
      role: 'Frontend Developer',
      period: '01/2023 – 11/2025',
      projects: [
        {
          name: 'Seasonal Worker Management (South Korean Local Government Platform)',
          teamSize: '20 members (Frontend: 6)',
          description:
            'A labor management platform for South Korean local government offices, tracking seasonal foreign workers, farm employers, and job placements through an admin portal and mobile WebView.',
          responsibilities: [
            'Built the admin portal from the ground up with React and TypeScript, structuring the codebase, data flow, and core views.',
            'Worked with BAs, PMs, and QA engineers to clarify user stories, review specifications, and spot edge cases early.',
            'Created core modules for worker profiles, employer records, seasonal assignments, metrics dashboards, and large data tables.',
            'Optimized responsive layouts across desktop, tablet, mobile browsers, and native app WebViews.',
            'Managed asynchronous data flows with Redux-Saga and handled complex multi-step forms using Formik and Yup.',
            'Implemented Role-Based Access Control (RBAC) across Super Admin, Master Admin, and Admin levels.',
            'Developed Excel import and export features with ExcelJS to handle thousands of worker records efficiently.',
            'Optimized file uploads with client-side image compression, HEIC-to-PNG conversion, and sequential batching to avoid server spikes.',
            'Added multi-language support using i18next, and managed application builds and uptime on Linux VPS via PM2.',
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
            'A WebView-based mobile wallet supporting NFC and QR payments. Responsible for developing social feeds, surveys, Q&A forums, and daily challenge features.',
          responsibilities: [
            'Built user interfaces for community feeds, user surveys, Q&A forums, and daily challenges in React.',
            'Ensured WebView pages rendered accurately and scrolled smoothly inside native mobile containers.',
            'Collaborated with backend and QA teammates to test API contracts and resolve UI defects.',
            'Packaged production bundles and deployed code updates to Linux VPS test and production instances.',
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
            'An administrative and partner portal enabling employers to post job openings, screen candidates from the Linglow mobile app, and track hiring pipelines.',
          responsibilities: [
            'Maintained and expanded web portals for internal admins and recruitment partners using Next.js and TypeScript.',
            'Created reusable UI components for account management, job publishing, and applicant screening.',
            'Coordinated with backend developers and UI designers to refine user journeys and polish interface interactions.',
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
            'A web application supporting underwriting workflows and insurance policies for corporate Mergers and Acquisitions (M&A) deals.',
          responsibilities: [
            'Developed and maintained user interfaces for M&A insurance workflows using Vue.js and Vuetify.',
            'Built modular UI components to keep styling consistent and simplify future updates.',
            'Participated in Agile/Scrum ceremonies and communicated directly with clients to clarify requirements and share progress.',
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
            'An online portal allowing retail customers to purchase life insurance policies from Fubon Life.',
          responsibilities: [
            'Built and maintained customer-facing web pages for insurance sign-ups using JavaScript and jQuery.',
            'Turned design mockups into responsive pages and integrated GraphQL endpoints with a backend team based in Singapore.',
            'Fixed cross-browser quirks across Safari, Chrome, and Firefox to ensure reliable presentation.',
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
            'An online booking website for searching and reserving hotel rooms.',
          responsibilities: [
            'Developed frontend pages for hotel reservations using Vue.js and Element UI.',
            'Connected RESTful APIs with Axios and handled centralized client state using Vuex.',
            'Adjusted layouts for different screen sizes and collaborated with teammates through Git.',
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
            'Maintained an internal web application used for insurance operations.',
          responsibilities: [
            'Fixed reported bug tickets and maintained stability across existing modules.',
            'Supported the team in building and updating views using Angular 6 and Bootstrap.',
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
        'Operated and maintained the Building Management System (BMS) at Da Nang International Terminal T2, keeping HVAC and wastewater monitoring systems running smoothly.',
        'Supervised site installation of Access Control Systems (ACS), CCTV cameras, and Wi-Fi networks at Cam Ranh International Terminal.',
        'Worked directly with on-site contractors to verify installation quality and keep work on schedule.',
        'Conducted field testing, formal inspections, and handoffs with facility managers.',
        'Completed technical training workshops on Smart Home automation solutions.',
      ],
    },
    {
      company: 'Mabuchi Motor Danang Co., Ltd.',
      role: 'Production Innovation Staff',
      period: '08/2016 – 06/2017',
      bullets: [
        'Planned and coordinated projects that integrated automated machinery into motor production lines.',
        'Tracked progress across mechanical design, parts ordering, assembly, and trial testing.',
        'Collaborated with Design, Procurement, Assembly, and Quality Control teams to clear blockers and hit milestone dates.',
        'Monitored machine test runs on the factory floor before clearing them for full production runs.',
        'Maintained technical specifications, equipment checklists, and project records.',
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
