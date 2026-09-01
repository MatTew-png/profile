export const projects = [
  {
    id: 'coffee-shop-pos',
    title: 'MonkKato Coffee POS & ERP System',
    subtitle: 'Full-Stack Multi-Branch Point-of-Sale & Inventory Management',
    role: 'Full-Stack Developer & Software Architect',
    category: 'Full-Stack',
    badge: '⭐ Featured Project',
    featured: true,
    bannerImage: '/projects/coffee-pos.png',
    previewType: 'pos',
    tech: ['NestJS', 'Vue 3', 'Pinia', 'TypeORM', 'TypeScript', 'SQLite', 'html2pdf'],
    description:
      'Engineered an enterprise-grade Point-of-Sale (POS) and ERP platform for cafe chains, managing high-velocity cashier ordering, customer loyalty point deduction, automated PDF receipts, and multi-branch payroll accounting.',
    authorOwnership: [
      'Architected full frontend foundation using Vue 3, Pinia state management, and Axios service layer.',
      'Developed real-time order queuing (Queue on Receipt) and client-side PDF receipt generation with html2pdf.js.',
      'Engineered member loyalty point system, automating real-time point-to-discount conversion at POS checkout.',
      'Designed multi-branch relational data bindings (branchId) and TypeORM database relations for employee payroll calculations.'
    ],
    highlights: [
      'Built a structured enterprise backend with NestJS dependency injection and TypeORM data layer.',
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
    screenshots: [
      {
        title: 'POS Cashier Order Interface',
        tag: 'Cashier POS',
        desc: 'Real-time category filtering (Coffee, Bakery, Desserts), temperature modifiers (Hot/Iced/Frappe), sweetness levels, and live reactive cart calculation.'
      },
      {
        title: 'Queue on Receipt & PDF Invoice',
        tag: 'Receipt & Queue',
        desc: 'Sequential order queue generation for barista pickup and client-side printable PDF receipt generation.'
      },
      {
        title: 'Member Loyalty & Discount Engine',
        tag: 'Loyalty Points',
        desc: 'Instant customer phone search at checkout with real-time point-to-discount calculation and point deduction.'
      },
      {
        title: 'Multi-Branch Inventory & Stock ERP',
        tag: 'Inventory ERP',
        desc: 'Track live stock quantities of raw coffee beans, fresh milk, and packaging per branch location with physical stock check audit logs.'
      }
    ],
    githubUrl: 'https://github.com/MatTew-png/monkkato-pos',
    liveUrl: 'https://github.com/MatTew-png/monkkato-pos',
    accentColor: '#10b981'
  },
  {
    id: 'patient-movement',
    title: 'Patient Movement Monitoring System',
    subtitle: 'Real-time Telemetry & Health Monitoring Backend',
    role: 'Backend Developer & API Specialist',
    category: 'Backend / IoT',
    badge: 'HealthTech & Real-Time',
    bannerImage: null,
    previewType: 'iot',
    tech: ['FastAPI', 'WebSocket', 'MySQL', 'Python', 'Postman', 'Swagger UI'],
    description:
      'Engineered a high-throughput, low-latency backend system to track patient movement sensors in healthcare facilities, delivering instantaneous fall detection alerts over persistent WebSockets.',
    authorOwnership: [
      'Constructed asynchronous REST endpoints with FastAPI capable of ingesting high-frequency sensor telemetry.',
      'Designed real-time bi-directional WebSocket channels for instant nurse-station alert broadcast (<35ms latency).',
      'Authored automated Postman API contract testing collections covering payload validation and security constraints.'
    ],
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
    screenshots: [
      {
        title: 'Live Telemetry Stream',
        tag: 'WebSocket Stream',
        desc: 'Continuous real-time patient movement stream with automatic fall threshold detection and sub-35ms nurse dispatch.'
      },
      {
        title: 'OpenAPI & Swagger Documentation',
        tag: 'API Contracts',
        desc: 'Interactive REST API documentation with automated Pydantic schema validation for patient vital data.'
      }
    ],
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
    bannerImage: null,
    previewType: 'complaint',
    tech: ['Laravel', 'Vue.js', 'Cypress', 'PHP', 'MySQL', 'REST API'],
    description:
      'Architected a role-based complaint tracking portal ensuring transparency and rapid triage, backed by automated Cypress end-to-end regression testing suites.',
    authorOwnership: [
      'Implemented granular Role-Based Access Control (RBAC) separating Admin, Department Officer, and Citizen roles.',
      'Authored automated Cypress E2E test suites verifying authentication, file attachments, and resolution flows.',
      'Constructed relational foreign key database schemas and audit logs in MySQL.'
    ],
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
    screenshots: [
      {
        title: 'Citizen Portal & Complaint Filing',
        tag: 'Citizen UI',
        desc: 'Public filing form with secure document attachment, category classification, and tracking token generation.'
      },
      {
        title: 'Department Triage Dashboard',
        tag: 'Admin RBAC',
        desc: 'Officer workflow dashboard with department routing, status progression timeline, and resolution auditing.'
      }
    ],
    githubUrl: 'https://github.com/MatTew-png',
    liveUrl: '#',
    accentColor: '#a855f7'
  }
];
