export interface ArchitectureStep {
  step: string;
  title: string;
  description: string;
  tech: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  category?: 'Full-Stack' | 'AI & Web' | 'Backend Systems';
  featured?: boolean;
  team?: string;
  description: string;
  problemStatement?: string;
  solution?: string;
  features: string[];
  keyFeatures?: string[];
  stack: string[];
  technologies?: string[];
  myContribution?: string;
  architectureHighlights?: string[];
  architecturePipeline?: ArchitectureStep[];
  challengesEncountered?: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  backendUrl?: string;
  achievement?: string;
  badge?: string;
  accentColor: string;
  metricsOrHighlight?: string;
}

export interface SkillItem {
  name: string;
  projectIds?: string[];
  learning?: boolean;
  category?: string;
  description?: string;
}

export interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

export interface AchievementItem {
  id: string;
  num: string;
  title: string;
  organizationOrEvent: string;
  dateOrYear: string;
  type: 'Award' | 'Showcase';
  description: string;
  highlightText: string;
  badge: string;
  verified: boolean;
}

export interface JourneyMilestone {
  id: string;
  year?: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}
