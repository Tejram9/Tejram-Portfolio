export interface SkillDetail {
  name: string;
  category: 'languages' | 'backend' | 'frontend' | 'databases' | 'tools';
  status: 'Project-Tested' | 'Actively Deepening';
  icon: string;
  description: string;
  usedInProjects?: string[];
  focusNotes?: string;
}

export const skillsCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'languages', label: 'Programming' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export const skillsData: SkillDetail[] = [
  // Programming Languages
  {
    name: 'Java',
    category: 'languages',
    status: 'Project-Tested',
    icon: 'Coffee',
    description: 'Object-oriented programming, core concurrency, collections framework, and backend application development.',
    usedInProjects: ['Smart Krishi Sahayak', 'Suvidha4C (Backend)'],
  },
  {
    name: 'Python',
    category: 'languages',
    status: 'Project-Tested',
    icon: 'Terminal',
    description: 'Web development with Flask, scripting, data handling, and algorithmic problem solving.',
    usedInProjects: ['FocusPulse'],
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    status: 'Project-Tested',
    icon: 'FileCode2',
    description: 'Asynchronous event-driven development, DOM manipulation, promises, and modern full-stack workflows.',
    usedInProjects: ['FocusPulse', 'CivicServe', 'Suvidha4C'],
  },
  {
    name: 'TypeScript',
    category: 'languages',
    status: 'Project-Tested',
    icon: 'Code2',
    description: 'Type-safe interfaces, generics, structured component contracts, and robust enterprise codebases.',
    usedInProjects: ['Suvidha4C'],
  },
  {
    name: 'C',
    category: 'languages',
    status: 'Project-Tested',
    icon: 'Cpu',
    description: 'Foundational computer science, memory management, pointers, and low-level data structures.',
    focusNotes: 'Academic foundation at SSGMCE',
  },

  // Backend
  {
    name: 'Spring Boot',
    category: 'backend',
    status: 'Project-Tested',
    icon: 'Layers',
    description: 'Enterprise Java framework for REST APIs, dependency injection, service architecture, and JPA/Hibernate mapping.',
    usedInProjects: ['Smart Krishi Sahayak', 'Suvidha4C'],
  },
  {
    name: 'REST API Design',
    category: 'backend',
    status: 'Project-Tested',
    icon: 'Network',
    description: 'Stateless HTTP endpoints, status codes, query filtering, JSON payloads, and clean API contracts.',
    usedInProjects: ['Smart Krishi Sahayak', 'CivicServe', 'Suvidha4C'],
  },
  {
    name: 'Node.js',
    category: 'backend',
    status: 'Project-Tested',
    icon: 'Server',
    description: 'Server-side runtime for non-blocking I/O micro-services and full-stack backend APIs.',
    usedInProjects: ['CivicServe'],
  },
  {
    name: 'Express.js',
    category: 'backend',
    status: 'Project-Tested',
    icon: 'Workflow',
    description: 'Minimalist web framework for routing, middleware handling, and JSON API dispatching.',
    usedInProjects: ['CivicServe'],
  },
  {
    name: 'Flask',
    category: 'backend',
    status: 'Project-Tested',
    icon: 'FlaskConical',
    description: 'Python micro-framework for rapid API prototyping, template rendering, and database integrations.',
    usedInProjects: ['FocusPulse'],
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    status: 'Project-Tested',
    icon: 'Atom',
    description: 'Component lifecycles, hooks, modular state management, and high-performance interactive interfaces.',
    usedInProjects: ['Suvidha4C', 'Personal Portfolio'],
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    status: 'Project-Tested',
    icon: 'Palette',
    description: 'Utility-first modern styling, responsive breakpoints, design systems, and glassmorphic UI patterns.',
    usedInProjects: ['Suvidha4C', 'CivicServe', 'Personal Portfolio'],
  },
  {
    name: 'HTML5 & Semantic Web',
    category: 'frontend',
    status: 'Project-Tested',
    icon: 'Layout',
    description: 'Accessible DOM structuring, SEO metadata, multimedia tags, and standards-compliant layouts.',
    usedInProjects: ['FocusPulse', 'Suvidha4C', 'Personal Portfolio'],
  },
  {
    name: 'CSS3 & Motion',
    category: 'frontend',
    status: 'Project-Tested',
    icon: 'Sparkles',
    description: 'Transitions, keyframe animations, CSS variables, flexbox, and modern CSS grid architectures.',
    usedInProjects: ['FocusPulse', 'Suvidha4C', 'Personal Portfolio'],
  },

  // Databases
  {
    name: 'MySQL',
    category: 'databases',
    status: 'Project-Tested',
    icon: 'Database',
    description: 'Relational data modeling, table constraints, foreign keys, indexing, and SQL queries.',
    usedInProjects: ['Suvidha4C', 'Smart Krishi Sahayak'],
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    status: 'Project-Tested',
    icon: 'ServerCog',
    description: 'Advanced relational database with strict schema validation and cloud connectivity.',
    usedInProjects: ['CivicServe'],
  },
  {
    name: 'SQLite',
    category: 'databases',
    status: 'Project-Tested',
    icon: 'HardDrive',
    description: 'Embedded SQL database engine ideal for rapid local persistence and lightweight applications.',
    usedInProjects: ['FocusPulse'],
  },
  {
    name: 'Supabase',
    category: 'databases',
    status: 'Project-Tested',
    icon: 'Boxes',
    description: 'Cloud Postgres backend-as-a-service with instant REST APIs and secure storage.',
    usedInProjects: ['CivicServe'],
  },

  // Tools & Ecosystem
  {
    name: 'Git & GitHub',
    category: 'tools',
    status: 'Project-Tested',
    icon: 'GitPullRequest',
    description: 'Distributed version control, branch management, pull requests, and collaborative code reviews.',
    usedInProjects: ['FocusPulse', 'Suvidha4C', 'CivicServe', 'Smart Krishi Sahayak'],
  },
  {
    name: 'Prisma ORM',
    category: 'tools',
    status: 'Project-Tested',
    icon: 'FileSpreadsheet',
    description: 'Next-generation TypeScript and Node.js ORM with automated migrations and type-safe query builders.',
    usedInProjects: ['CivicServe'],
  },
  {
    name: 'Chart.js',
    category: 'tools',
    status: 'Project-Tested',
    icon: 'BarChart3',
    description: 'Flexible HTML5 canvas chart rendering for dynamic data visualisations and analytics.',
    usedInProjects: ['FocusPulse'],
  },
  {
    name: 'OpenRouter AI',
    category: 'tools',
    status: 'Project-Tested',
    icon: 'BrainCircuit',
    description: 'Unified LLM API gateway for routing natural language prompts across state-of-the-art models.',
    usedInProjects: ['CivicServe'],
  },
  {
    name: 'Vercel & Render',
    category: 'tools',
    status: 'Project-Tested',
    icon: 'Cloud',
    description: 'Cloud deployment, continuous integration from Git, environment variable management, and hosting.',
    usedInProjects: ['FocusPulse', 'CivicServe', 'Suvidha4C', 'Smart Krishi Sahayak'],
  },
];

export const currentlyLearningData = [
  {
    title: 'Java & Data Structures & Algorithms',
    stage: 'Daily Practice',
    description: 'Deepening algorithmic intuition: graphs, dynamic programming, trees, and time-space optimization.',
    tags: ['LeetCode', 'Recursion', 'Graphs', 'Trees'],
  },
  {
    title: 'Advanced Spring Boot & Microservices',
    stage: 'Architectural Exploration',
    description: 'Exploring Spring Security with JWT, Spring Data JPA caching, transactional boundaries, and service discovery.',
    tags: ['Spring Security', 'JWT', 'JPA', 'Microservices'],
  },
  {
    title: 'Database Indexing & Query Tuning',
    stage: 'Deep Dive',
    description: 'Understanding B-tree index traversal, execution plan analysis (EXPLAIN), connection pooling, and normalization trade-offs.',
    tags: ['MySQL', 'PostgreSQL', 'Query Plans', 'Indexing'],
  },
  {
    title: 'Full-Stack Software Engineering',
    stage: 'Hands-on Production',
    description: 'Designing end-to-end applications with clean decoupled architectures, type safety, and responsive client interfaces.',
    tags: ['React', 'TypeScript', 'Clean Code', 'REST Design'],
  },
];

