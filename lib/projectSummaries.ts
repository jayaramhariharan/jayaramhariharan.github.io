import boatHero1 from '../assets1/boat/hero1.webp';

export type HomeProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  isNDA?: boolean;
  isArchived?: boolean;
  details?: {
    role?: string;
    challenge?: string;
  };
};

const ALL_HOME_PROJECTS: HomeProject[] = [
  {
    id: 2,
    title: 'Wolf',
    category: 'Product Design',
    image: '/case-studies/wolf/iso.jpg',
    description: 'Designed and campaigned a battlebot that won the tournament with a low, impact-resistant chassis and a between-round wedge upgrade.',
  },
  {
    id: 3,
    title: 'Sealed RC Boat',
    category: 'Waterproofing / FDM',
    image: boatHero1,
    description: 'Printed hull, rotating shaft, zero ingress.',
  },
];

export const HOME_PROJECTS: HomeProject[] = ALL_HOME_PROJECTS.filter((project) => !project.isArchived);

export const getFooterProjects = (currentId: number): HomeProject[] =>
  HOME_PROJECTS.filter((project) => project.id !== currentId);
