export interface ProjectDetails {
  client: string;
  year: string;
  role: string;
  techStack: string[];
  challenge: string;
  solution: string;
  research: {
    title: string;
    content: string;
  }[];
  moodboard?: {
    keywords: string[];
    images: string[];
  };
  process: {
    title: string;
    description: string;
    image: string;
  }[];
  gallery?: {
    image: string;
    caption: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  cmf: {
    name: string;
    code: string; 
    finish: string;
    hex?: string;
  }[];
  outcome?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  heroImages?: string[];
  description: string;
  details?: ProjectDetails;
  isNDA?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  details?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface PhilosophyRule {
  title: string;
  description: string;
}

export interface PhilosophySetLogic {
  intro: string;
  points: string[];
  conclusion: string;
}
