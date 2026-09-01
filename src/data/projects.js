export const projects = [
  {
    id: 'patient-movement',
    title: 'Patient Movement Monitoring System',
    subtitle: 'Real-time Telemetry & Health Monitoring Backend',
    role: 'Backend Developer & API Specialist',
    category: 'Backend / IoT',
    badge: 'HealthTech & Real-Time',
    tech: ['FastAPI', 'WebSocket', 'MySQL', 'Python', 'Postman', 'Swagger'],
    description:
      'Engineered a high-throughput, low-latency backend system to track patient movement sensors in healthcare facilities, delivering instantaneous event alerts over persistent WebSockets.',
    highlights: [
      'Engineered asynchronous REST APIs with FastAPI capable of ingesting high-frequency sensor telemetry.',
      'Designed real-time bi-directional WebSocket channels for instant nurse-station alert broadcast.',
      'Constructed complete Postman API automation test collections covering contract schemas and edge cases.',
      'Integrated auto-generated interactive API documentation with Swagger UI / OpenAPI specification.'
    ],
    testMetrics: {
      tool: 'Postman & Pytest',
      coverage: '95% API Endpoints',
      testType: 'Integration & Contract Testing',
      suiteCount: '24 Automated Tests'
    },
    githubUrl: 'https://github.com/MatTew-png',
    liveUrl: '#',
    accentColor: '#38bdf8'
  },
  {
    id: 'complaint-management',
    title: 'Complaint Management System',
    subtitle: 'Enterprise RBAC Platform with E2E Quality Assurance',
    role: 'Full-Stack Developer & QA Automation',
    category: 'Full-Stack',
    badge: 'Enterprise & E2E Tested',
    tech: ['Laravel', 'Vue.js', 'Cypress', 'PHP', 'MySQL', 'REST API'],
    description:
      'Architected a role-based complaint tracking portal ensuring transparency and rapid triage, backed by automated Cypress end-to-end regression testing suites.',
    highlights: [
      'Implemented granular Role-Based Access Control (RBAC) separating Admin, Department Officer, and Citizen roles.',
      'Created reactive responsive user interfaces using Vue.js with smooth status timeline updates.',
      'Authored automated Cypress E2E test suites verifying authentication, file attachments, and resolution flows.',
      'Enforced data integrity with relational foreign key schemas and database audit logs in MySQL.'
    ],
    testMetrics: {
      tool: 'Cypress E2E',
      coverage: '100% Critical User Flows',
      testType: 'End-to-End Regression & UI Testing',
      suiteCount: '18 Test Scenarios'
    },
    githubUrl: 'https://github.com/MatTew-png',
    liveUrl: '#',
    accentColor: '#a855f7'
  },
  {
    id: 'coffee-shop-pos',
    title: 'MonkKato Coffee POS & ERP System',
    subtitle: 'Modular Multi-Branch Point-of-Sale & Inventory Management',
    role: 'Full-Stack Developer & Software Architect',
    category: 'Full-Stack',
    badge: 'Enterprise POS & Inventory',
    tech: ['NestJS', 'Vue 3', 'Pinia', 'TypeORM', 'TypeScript', 'SQLite'],
    description:
      'Engineered an enterprise Point-of-Sale and ERP platform managing high-velocity cafe ordering, cashier shift accounting, staff attendance & payroll, and automated real-time inventory deductions.',
    highlights: [
      'Built a structured enterprise backend using NestJS dependency injection and TypeORM data layer.',
      'Implemented atomic database transactions to guarantee zero inventory drift during simultaneous sales.',
      'Developed high-speed cashier checkout interface in Vue 3 and Pinia with responsive cart state management.',
      'Constructed complete staff biometric attendance tracking, monthly payroll engine, and expense reporting.'
    ],
    testMetrics: {
      tool: 'Jest & Unit Testing',
      coverage: '92% Core Business Logic',
      testType: 'Integration, Unit & POS Smoke Tests',
      suiteCount: '18 Test Specs'
    },
    githubUrl: 'https://github.com/MatTew-png/monkkato-pos',
    liveUrl: 'https://github.com/MatTew-png/monkkato-pos',
    accentColor: '#34d399'
  }
];
