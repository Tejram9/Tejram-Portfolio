import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: 'focuspulse',
    num: '01',
    title: 'FocusPulse',
    tagline: 'When focus goes, success flows.',
    category: 'Full-Stack',
    featured: true,
    description: 'A productivity and focus management platform designed to help users plan tasks, maintain deep work intervals, track progress analytics, and balance wellness routines.',
    problemStatement: 'Modern developers and students face constant attention fragmentation and burn out due to unstructured study sessions and lack of reflective progress metrics.',
    solution: 'An integrated deep-work environment combining Pomodoro timing intervals, structured daily task pipelines, interactive Chart.js analytics, and wellness prompts.',
    stack: ['Python', 'Flask', 'JavaScript', 'SQLite', 'Chart.js'],
    technologies: ['Python', 'Flask', 'JavaScript', 'SQLite', 'Chart.js'],
    features: [
      'Interactive focus timer with customizable interval intervals',
      'Daily task planning and completion tracking',
      'Chart.js analytics for focus duration and task trends',
      'Wellness tracking and mindful break prompts',
      'Calendar and deadline reminder integration'
    ],
    keyFeatures: [
      'Interactive focus timer with customizable intervals',
      'Daily task planning and completion tracking',
      'Chart.js analytics for focus duration and task trends',
      'Wellness tracking and mindful break prompts'
    ],
    myContribution: 'Architected backend routes with Python/Flask, designed SQLite schema, and implemented client-side timer and Chart.js dashboards.',
    architectureHighlights: [
      'Lightweight Python Flask backend with RESTful route handlers',
      'Zero-latency client-side Pomodoro state machine with Web Audio API alerts',
      'Relational SQLite database indexing user focus sessions'
    ],
    challengesEncountered: [
      'Maintaining background timer consistency during inactive tab intervals',
      'Optimizing chart re-rendering performance during continuous session updates'
    ],
    liveDemoUrl: 'https://focuspulse-mthc.onrender.com/',
    githubUrl: 'https://github.com/Tejram9/FocusPulse',
    badge: "Showcased at Navonmesh'26",
    accentColor: '#D5FF00',
  },
  {
    id: 'suvidha4c',
    num: '02',
    title: 'Suvidha4C',
    tagline: 'Simplifying access to digital services.',
    category: 'Full-Stack',
    featured: true,
    description: 'A platform designed to connect citizens with verified service providers and simplify document-related services, scheme information, and delivery tracking.',
    problemStatement: 'Citizens often struggle with complex paperwork, opaque government scheme verification, and difficulty finding reliable, authenticated service providers nearby.',
    solution: 'A unified citizen portal connecting residents directly with vetted local service centers, offering document status workflows, scheme directories, and college admission tools.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Spring Boot', 'MySQL/MariaDB'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Spring Boot', 'MySQL/MariaDB'],
    features: [
      'Secure document upload and encrypted application tracking',
      'Verified service provider matching and status updates',
      'Government welfare schemes discovery directory',
      'MHT-CET college cut-off and admission prediction tool',
      'Privacy-preserving document management system'
    ],
    keyFeatures: [
      'Secure document upload and encrypted application tracking',
      'Verified service provider matching and status updates',
      'Government welfare schemes discovery directory',
      'College prediction module for student career pathways'
    ],
    myContribution: 'Engineered frontend modular architecture with React, TypeScript and Tailwind CSS; configured REST integration for citizen application lifecycles.',
    architectureHighlights: [
      'Enterprise Spring Boot backend structured with JPA/Hibernate repositories',
      'Strict relational schemas in MySQL/MariaDB for tracking service requests',
      'Client-side state synchronization with React and Vite build optimizations'
    ],
    challengesEncountered: [
      'Handling multiple file formats and validating client-side size restrictions',
      'Structuring dynamic forms tailored to diverse government application types'
    ],
    liveDemoUrl: 'https://suvidhax-frontend.onrender.com/',
    accentColor: '#F3F1E8',
  },
  {
    id: 'civicserve',
    num: '03',
    title: 'CivicServe',
    tagline: 'Reliable Service Workers.',
    category: 'AI & Web',
    featured: true,
    description: 'A platform designed to improve matching between people and reliable service providers, leveraging AI-powered routing and verified service provider directories.',
    problemStatement: 'Urban service workers lack streamlined discovery platforms, while citizens face unstandardized pricing, slow response times, and unverified credentials.',
    solution: 'An intelligent service allocation engine integrating OpenRouter AI to parse user requirements, determine work categories, and match verified professionals.',
    stack: ['Vite', 'Node.js', 'Express', 'Prisma', 'Supabase PostgreSQL', 'OpenRouter'],
    technologies: ['Vite', 'Node.js', 'Express', 'Prisma', 'Supabase PostgreSQL', 'OpenRouter'],
    features: [
      'AI-powered natural language service requirement parsing via OpenRouter',
      'Verified service provider profiles and credibility ratings',
      'Full lifecycle job order and booking status management',
      'Supabase PostgreSQL persistence orchestrated with Prisma ORM'
    ],
    keyFeatures: [
      'AI service requirement parsing via OpenRouter API',
      'Verified service provider profiles and credibility ratings',
      'Supabase PostgreSQL database managed with Prisma ORM',
      'Real-time job order and booking status updates'
    ],
    myContribution: 'Implemented Node.js/Express backend services, integrated OpenRouter LLM parsing, configured Prisma schemas, and created responsive frontend views.',
    architectureHighlights: [
      'Asynchronous Node.js/Express REST micro-router architecture',
      'Prisma ORM enforcing strict relational schema consistency on Supabase',
      'Prompt-engineered OpenRouter integration for extracting structured intent'
    ],
    challengesEncountered: [
      'Handling API rate limits and fallback mechanisms during hackathon evaluation',
      'Formatting unstructured user requests into standardized service tickets'
    ],
    liveDemoUrl: 'https://civic-serve-169d.vercel.app/',
    backendUrl: 'https://civicserve-czvk.onrender.com/',
    achievement: '4th place in an AI-tools hackathon',
    badge: '4th Place AI Hackathon',
    accentColor: '#D5FF00',
  },
  {
    id: 'smart-krishi-sahayak',
    num: '04',
    title: 'Smart Krishi Sahayak',
    tagline: 'Technology-driven assistance for farmers.',
    category: 'Backend Systems',
    featured: true,
    description: 'An AI-powered agricultural assistance platform built to empower farmers with crop recommendations, plant disease guidance, and live meteorological insights.',
    problemStatement: 'Smallholder farmers frequently suffer harvest losses due to delayed crop disease diagnosis, unscientific fertilizer application, and lack of timely regional weather advisories.',
    solution: 'A technology-driven agricultural companion delivering rule-based and AI-guided crop suggestions based on soil metrics, pest diagnosis guidance, and local weather forecasts.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'AI Integration', 'MySQL'],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'AI Integration', 'MySQL'],
    features: [
      'Intelligent agricultural assistant for farming queries and crop tips',
      'Soil nutrient and seasonal crop recommendations',
      'Crop disease identification and organic remedy guidance',
      'Live weather forecasting and monsoon advisories',
      'Role-based authentication and administrative reporting'
    ],
    keyFeatures: [
      'Intelligent agricultural assistant for farmer queries',
      'Crop recommendation system tailored to seasonal soil parameters',
      'Plant disease guidance and preventive treatment tips',
      'Integrated live weather alerts and farming advisories'
    ],
    myContribution: 'Architected core Java Spring Boot service layer, created REST endpoints for agronomy queries, and integrated AI assistance modules.',
    architectureHighlights: [
      'Robust Java Spring Boot backend built on layered controller-service-repository patterns',
      'Transactional MySQL database capturing agronomic data and query histories',
      'Clean RESTful contract enabling rapid client-side integration'
    ],
    challengesEncountered: [
      'Structuring domain agronomy data into reliable algorithmic recommendation rules',
      'Ensuring low latency for queries in low-bandwidth rural connectivity scenarios'
    ],
    liveDemoUrl: 'https://smart-krishi-sahayak-86ks.vercel.app/',
    githubUrl: 'https://github.com/Tejram9/Smart-Krishi-Sahayak',
    badge: 'Java Spring Boot Core',
    accentColor: '#D5FF00',
  },
];
