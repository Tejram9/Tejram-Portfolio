import { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'civicserve-hackathon',
    num: '01',
    title: '4th Place — AI-Tools Hackathon',
    organizationOrEvent: 'Competitive AI Innovation Challenge',
    dateOrYear: '2024',
    type: 'Award',
    highlightText: 'CivicServe secured 4th place in an intensive AI-tools hackathon by engineering an automated grievance intake workflow powered by OpenRouter LLM parsing and Supabase PostgreSQL persistence.',
    description: 'Developed an intelligent matching platform connecting urban citizens with verified local service workers, featuring automated natural language requirement extraction and priority queue dispatch.',
    badge: '4th Place Finalist',
    verified: true,
  },
  {
    id: 'focuspulse-navonmesh',
    num: '02',
    title: 'Navonmesh\'26 Technical Showcase',
    organizationOrEvent: 'Annual Engineering Innovation Exhibition (SSGMCE)',
    dateOrYear: '2024',
    type: 'Showcase',
    highlightText: 'FocusPulse was selected and presented at Navonmesh\'26, demonstrating an integrated deep-work environment with client-side interval state machines and real-time Chart.js productivity telemetry.',
    description: 'Exhibited full-stack Python/Flask architecture to faculty, peers, and industry evaluators, receiving commendations for user interface ergonomics and reflective analytics.',
    badge: 'Official Project Showcase',
    verified: true,
  },
];
