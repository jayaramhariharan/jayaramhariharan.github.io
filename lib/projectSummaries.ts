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
    title: 'Precision Joystick Grip Upgrade',
    category: 'Mechatronics',
    image: '/case-studies/viper/home-card-latest.jpg',
    description: 'Upgraded a premium joystick grip with an added twist feature, preserving the original ergonomic shape while expanding control.',
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
    title: 'Sealed Hydrofoil Test Boat',
    category: 'Waterproofing / FDM',
    image: '/case-studies/hydrofoil/hero-home.jpg',
    description: 'Built a hydrofoil test boat to prove a waterproofing method for rotating shafts, printed hulls, and dynamic loads below the waterline.',
  },
];
