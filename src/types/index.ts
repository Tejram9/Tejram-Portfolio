export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & Web' | 'Backend Systems';
  featured: boolean;
  team?: string;
  description: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  myContribution: string;
  architectureHighlights: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  backendUrl?: string;
  badge?: string;
  accentColor: string;
  metricsOrHighlight?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Project-Tested' | 'Active Exploration' | 'Core Competency';
    tags?: string[];
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organizationOrEvent: string;
  dateOrYear: string;
  type: 'Award' | 'Showcase' | 'Leadership';
  description: string;
  highlightText: string;
  badge: string;
  isConfirmedRole?: boolean;
}

export interface Milestone {
  id: string;
  period: string;
  title: string;
  category: 'Foundation' | 'Project Execution' | 'Competition' | 'Architectural Growth';
  description: string;
  keyLearnings: string[];
  status: 'Completed' | 'In Progress' | 'Continuous';
}
