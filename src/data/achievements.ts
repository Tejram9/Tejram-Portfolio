import { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'civicserve-hackathon',
    title: '4th Place — AI-Tools Hackathon',
    organizationOrEvent: 'AI Innovation Hackathon',
    dateOrYear: '2025 - 2026',
    type: 'Award',
    badge: 'Hackathon Distinction',
    highlightText: 'Awarded 4th place for developing CivicServe, an AI-augmented service worker matching engine leveraging OpenRouter LLM capabilities to parse unstructured user requests and connect them with verified local workers.',
    description: 'Competed with student and developer teams, architecting a full-stack prototype within constrained hackathon deadlines. Recognized by the jury for practical societal utility and effective AI workflow design.',
  },
  {
    id: 'focuspulse-navonmesh',
    title: 'Project Expo Showcase — FocusPulse',
    organizationOrEvent: "Navonmesh'26 Annual Project Exhibition",
    dateOrYear: '2026',
    type: 'Showcase',
    badge: 'Technical Exhibition',
    highlightText: "Selected to present FocusPulse (developed with Team TrackX) at SSGMCE's premier annual technical project exposition Navonmesh'26.",
    description: 'Demonstrated the live productivity analytics platform to visiting faculty, industry evaluators, and peer engineering students, illustrating full-stack Flask architecture and dynamic Chart.js time-tracking mechanisms.',
  },
];

export interface LeadershipRole {
  title: string;
  organization: string;
  scope: string;
  statusNote: string;
  isConfirmed: boolean;
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: 'Technical Advisor',
    organization: "CESSA (Computer Engineering Students' Association)",
    scope: 'Student Technical Community & Event Advisory',
    statusNote: 'Subject to formal semester confirmation / Active participant',
    isConfirmed: true,
  },
  {
    title: 'Technical Advisor',
    organization: 'ISTE Students Chapter (SSGMCE)',
    scope: 'Technical workshops, hackathon organizing & peer development',
    statusNote: 'Subject to formal semester confirmation / Student Member',
    isConfirmed: true,
  },
  {
    title: 'Open Source Community Advisor',
    organization: 'Mozilla Campus Club / Open Source Community',
    scope: 'Open web advocacy, git guidance & student contributor sessions',
    statusNote: 'Subject to formal semester confirmation / Community Contributor',
    isConfirmed: true,
  },
];

