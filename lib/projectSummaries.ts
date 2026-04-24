import flightstickCloseup from '../assets1/flightstick/closeup.png';
import boatHero1 from '../assets1/boat/hero1.png';

export type HomeProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  isNDA?: boolean;
  details?: {
    role?: string;
    challenge?: string;
  };
};

export const HOME_PROJECTS: HomeProject[] = [
  {
    id: 1,
    title: 'Flightstick Twist Axis',
    category: 'Mechatronics',
    image: flightstickCloseup,
    description: 'Added yaw to a premium flight grip so the client could keep the grip they liked without pedals or a full replacement.',
  },
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

export const getFooterProjects = (currentId: number): HomeProject[] =>
  HOME_PROJECTS.filter((project) => project.id !== currentId);
