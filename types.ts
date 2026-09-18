export type ThemeMode = 'dark' | 'light';

export type BlurIntensity = 'dreamy' | 'soft' | 'subtle';
export type MotionSpeed = 'gentle' | 'dynamic' | 'calm';
export type GravityMode = 'repel' | 'attract' | 'float';

export interface BackgroundSettings {
  blurIntensity: BlurIntensity;
  constellations: boolean;
  speed: MotionSpeed;
  gravityMode: GravityMode;
  stardust: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'web' | 'ai' | 'experiments' | 'coming-soon';
  status: 'Learning Project' | 'Concept' | 'Coming Soon' | 'In Progress';
  technologies: string[];
  features: string[];
  futureImprovements: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'core' | 'tools' | 'creative';
  status: 'Building' | 'Learning' | 'Exploring';
  levelPercent: number;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  isCurrent?: boolean;
}

export interface EducationNode {
  grade: string;
  phase: string;
  focus: string;
  description: string;
  status: 'Completed' | 'Current Focus' | 'Upcoming';
  keyTopics: string[];
}

export interface GoalItem {
  id: string;
  category: string;
  title: string;
  description: string;
  target: string;
  icon: string;
  accent: 'blue' | 'red';
}
