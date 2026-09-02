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
      tool: 'Jest & E2E Verification',
      coverage: '96% Business Workflows',
      testType: 'POS Cashier, Loyalty & Stock ERP Suite',
      suiteCount: '28 Test Cases (100% Passed)'
    },
    testingDocUrl: 'https://github.com/MatTew-png/monkkato-pos/blob/main/TESTING_DOCUMENTATION.md',
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
    title: 'Patient Movement & Telemetry Monitoring System',
    subtitle: 'Real-Time IoT Health Telemetry & LLM AI Clinical Assistant',
    role: 'Full-Stack Developer & Real-Time API Architect',
    category: 'Backend / IoT',
    badge: 'HealthTech & Real-Time',
    bannerImage: '/projects/patient-monitoring.png',
    previewType: 'iot',
    tech: ['FastAPI', 'WebSockets', 'Vue 3', 'Tailwind CSS', 'SQLAlchemy', 'MySQL', 'LLM AI Ask', 'Pinia'],
    description:
      'An enterprise healthcare telemetry platform monitoring live room sensor streams, broadcasting sub-35ms emergency alerts to nurse stations over WebSockets, and featuring an integrated LLM AI clinical assistant for patient history inquiries.',
    authorOwnership: [
      'Constructed live telemetry graphs (BedSensorGraph, SleepTimelineGraph) plotting continuous patient vital & movement streams.',
      'Engineered nurse emergency alert system with immediate visual/sound dispatch and bulk triage (Accept All / Success All).',
      'Integrated LLM AI Clinical Assistant service (AiAsk) enabling natural language inquiries on patient historical data.',
      'Constructed asynchronous FastAPI endpoints for high-throughput sensor telemetry ingestion and bed mapping.'
    ],
    highlights: [
      'Engineered asynchronous REST APIs with FastAPI capable of ingesting high-frequency sensor telemetry.',
      'Designed real-time bi-directional WebSocket channels for instant nurse-station alert broadcast (<35ms latency).',
      'Integrated natural language LLM Clinical AI assistant for real-time patient inquiry and summaries.',
      'Completed comprehensive SDLC documentation: C4 Architecture Model, ERD, Class Diagram, and UAT test plan.'
    ],
    testMetrics: {
      tool: 'Postman, Vitest & UAT Suite',
      coverage: '100% Core Requirements',
      testType: 'Sub-35ms Latency, Telemetry & Alarm Verification',
      suiteCount: '32 Test Cases (100% Passed)'
    },
    testingDocUrl: 'https://github.com/MatTew-png/patient-monitoring-system/blob/main/TESTING_DOCUMENTATION.md',
    screenshots: [
      {
        title: 'Live Telemetry & Vital Graphs',
        tag: 'Telemetry Graph',
        desc: 'Continuous real-time patient vital sign streaming (Heart Rate, SpO2, Respiration) with sleep timeline charts and date filtering.'
      },
      {
        title: 'Nurse Station Emergency Alert Hub',
        tag: 'Nurse Alerts',
        desc: 'Real-time WebSocket emergency alert dispatch with audio/visual warnings, patient location tag, and Accept All / Resolve triage buttons.'
      },
      {
        title: 'LLM AI Clinical Assistant (AiAsk)',
        tag: 'AI Assistant',
        desc: 'Embedded AI assistant enabling natural language condition queries, vital summary lookups, and patient history retrieval.'
      },
      {
        title: 'Bed & Multi-Ward Hierarchy',
        tag: 'Ward ERP',
        desc: 'Building to Ward to Bed management interface with dynamic physical sensor assignment.'
      }
    ],
    githubUrl: 'https://github.com/MatTew-png/patient-monitoring-system',
    liveUrl: 'https://github.com/MatTew-png/patient-monitoring-system',
    figmaUrl: 'https://www.figma.com/design/B3oC8CcWBpeUV0S0GJKWm0/Ui-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2?node-id=197-650&p=f&t=htmq72h5vSGGPuFM-0',
    presentationUrl: 'https://www.canva.com/design/DAGeO_aA0cs/pS2S3Azgz4snI0YbM099cw/edit',
    accentColor: '#38bdf8'
  },
  {
    id: 'complaint-management',
    title: 'Complaint Management System',
    subtitle: 'Enterprise RBAC Platform with E2E Quality Assurance',
    role: 'Full-Stack Developer & QA Automation',
    category: 'Full-Stack',
    badge: 'Enterprise & E2E Tested',
    bannerImage: '/projects/complaint-system.png',
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
