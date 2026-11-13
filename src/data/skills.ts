import { SkillCategory, SkillItem } from '../types';

export type { SkillCategory, SkillItem };

export interface CurrentlyLearningItem {
  name: string;
  focus: string;
  category: string;
  status: 'Actively Exploring' | 'Continuous Mastery';
}

export const currentlyLearningData: CurrentlyLearningItem[] = [
  {
    name: 'Advanced Java & DSA',
    focus: 'Data structures, algorithm optimization, and complexity analysis for high-throughput systems',
    category: 'Core Computer Science',
    status: 'Actively Exploring',
  },
  {
    name: 'Spring Boot Microservices',
    focus: 'Distributed architecture, API gateway routing, and inter-service messaging',
    category: 'Backend Architecture',
    status: 'Actively Exploring',
  },
  {
    name: 'Modern Full-Stack Systems',
    focus: 'Event-driven architectures, persistent streaming, and resilient deployment pipelines',
    category: 'System Design',
    status: 'Continuous Mastery',
  },
];

export const skillsData: SkillCategory[] = [
  {
    label: 'PROGRAMMING',
    skills: [
      { name: 'Java', projectIds: ['smart-krishi-sahayak'], description: 'Primary backend language, OOP principles, data structures, and enterprise application logic.' },
      { name: 'C', description: 'Systems programming fundamentals, memory management, pointers, and foundational algorithms.' },
      { name: 'JavaScript', projectIds: ['focuspulse', 'suvidha4c', 'civicserve'], description: 'Modern ES6+, DOM manipulation, asynchronous programming, and full-stack integration.' },
      { name: 'Python', projectIds: ['focuspulse'], description: 'Backend routing with Flask, data handling, scripting, and algorithmic problem solving.' },
    ],
  },
  {
    label: 'FRONTEND',
    skills: [
      { name: 'HTML', description: 'Semantic document structure, accessibility standards, and SEO markup.' },
      { name: 'CSS', description: 'Responsive box models, Flexbox, CSS Grid, and custom animations.' },
      { name: 'React', projectIds: ['suvidha4c', 'civicserve'], description: 'Component lifecycle, hooks, reactive state management, and modern SPA architecture.' },
      { name: 'TypeScript', projectIds: ['suvidha4c', 'civicserve'], description: 'Static typing, interface contracts, compile-time safety, and scalable refactoring.' },
      { name: 'Tailwind CSS', projectIds: ['suvidha4c', 'civicserve'], description: 'Utility-first styling, design system tokens, responsive layouts, and dark mode theming.' },
    ],
  },
  {
    label: 'BACKEND',
    skills: [
      { name: 'Java', projectIds: ['smart-krishi-sahayak'], description: 'Robust object-oriented backend foundation and core business service orchestration.' },
      { name: 'Spring Boot', projectIds: ['suvidha4c', 'smart-krishi-sahayak'], description: 'Enterprise REST APIs, Spring Data JPA, dependency injection, and security filters.' },
      { name: 'Node.js', projectIds: ['civicserve'], description: 'Event-driven runtime for asynchronous server logic and REST microservices.' },
      { name: 'Express.js', projectIds: ['civicserve'], description: 'Lightweight web framework for API routing, middleware chaining, and request validation.' },
      { name: 'Flask', projectIds: ['focuspulse'], description: 'Python micro-framework for modular REST endpoints and server-rendered workflows.' },
      { name: 'REST APIs', projectIds: ['focuspulse', 'suvidha4c', 'civicserve', 'smart-krishi-sahayak'], description: 'Standardized HTTP verbs, JSON contracts, status code handling, and endpoint documentation.' },
    ],
  },
  {
    label: 'DATABASE',
    skills: [
      { name: 'MySQL', projectIds: ['suvidha4c', 'smart-krishi-sahayak'], description: 'Relational schema design, normalization, complex joins, and transactional consistency.' },
      { name: 'PostgreSQL', projectIds: ['civicserve'], description: 'Advanced open-source relational database supporting JSON types and indexing.' },
      { name: 'SQLite', projectIds: ['focuspulse'], description: 'Self-contained zero-configuration serverless database for lightweight applications.' },
      { name: 'Supabase', projectIds: ['civicserve'], description: 'Cloud-hosted PostgreSQL backend with real-time capabilities and instant API generation.' },
    ],
  },
  {
    label: 'TOOLS',
    skills: [
      { name: 'Git', description: 'Distributed version control, branching strategies, and commit hygiene.' },
      { name: 'GitHub', description: 'Repository hosting, collaborative code reviews, issue tracking, and actions.' },
      { name: 'Prisma', projectIds: ['civicserve'], description: 'Next-generation TypeScript ORM providing declarative data modeling and automated migrations.' },
      { name: 'Chart.js', projectIds: ['focuspulse'], description: 'Canvas-based data visualization for interactive metrics and historical analytics.' },
      { name: 'OpenRouter', projectIds: ['civicserve'], description: 'Multi-LLM gateway integration for prompt execution and structured intent parsing.' },
      { name: 'Vercel', projectIds: ['civicserve', 'smart-krishi-sahayak'], description: 'Global edge deployment platform optimized for modern frontend applications.' },
      { name: 'Render', projectIds: ['focuspulse', 'suvidha4c', 'civicserve'], description: 'Cloud container hosting for backend web services and scheduled background tasks.' },
    ],
  },
];
