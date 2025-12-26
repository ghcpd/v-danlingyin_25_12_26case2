import type { NavLink, FeaturedSection, OrganizationValue, EnvironmentalGoal, AreaOfInterest } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Initiatives', path: '/initiatives' },
  { label: 'Articles', path: '/articles' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

export const featuredSections: FeaturedSection[] = [
  {
    id: '1',
    title: 'Climate Change',
    description: 'Understanding and combating the climate crisis through education, advocacy, and sustainable solutions.',
    icon: '🌡️',
    linkPath: '/initiatives?category=Climate',
  },
  {
    id: '2',
    title: 'Wildlife Protection',
    description: 'Preserving biodiversity and protecting endangered species through conservation efforts worldwide.',
    icon: '🦁',
    linkPath: '/initiatives?category=Wildlife',
  },
  {
    id: '3',
    title: 'Sustainable Living',
    description: 'Empowering individuals to make eco-friendly choices in their daily lives for a greener future.',
    icon: '♻️',
    linkPath: '/initiatives?category=Recycling',
  },
];

export const organizationValues: OrganizationValue[] = [
  {
    id: '1',
    title: 'Environmental Stewardship',
    description: 'We believe in responsible management and protection of the natural environment through conservation and sustainable practices.',
    icon: '🌿',
  },
  {
    id: '2',
    title: 'Scientific Integrity',
    description: 'Our actions and advocacy are grounded in peer-reviewed science and evidence-based approaches to environmental challenges.',
    icon: '🔬',
  },
  {
    id: '3',
    title: 'Community Engagement',
    description: 'We empower communities to take ownership of environmental protection efforts and foster grassroots movements.',
    icon: '🤝',
  },
  {
    id: '4',
    title: 'Inclusive Action',
    description: 'Environmental justice means ensuring that all communities have access to a clean and healthy environment.',
    icon: '🌍',
  },
  {
    id: '5',
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to tackle environmental challenges effectively.',
    icon: '💡',
  },
  {
    id: '6',
    title: 'Transparency',
    description: 'We operate with openness and accountability, sharing our progress and challenges with supporters.',
    icon: '📊',
  },
];

export const environmentalGoals: EnvironmentalGoal[] = [
  {
    id: '1',
    title: 'Carbon Neutrality by 2040',
    description: 'Working towards net-zero carbon emissions across all our operations and supported initiatives.',
    progress: 35,
  },
  {
    id: '2',
    title: 'Protect 1 Million Acres',
    description: 'Preserving critical habitats and ecosystems through land conservation and protection efforts.',
    progress: 62,
  },
  {
    id: '3',
    title: 'Plant 10 Million Trees',
    description: 'Reforestation efforts to restore degraded lands and combat climate change through carbon sequestration.',
    progress: 48,
  },
  {
    id: '4',
    title: 'Ocean Plastic Reduction',
    description: 'Removing 100,000 tons of plastic from oceans and preventing new plastic from entering marine ecosystems.',
    progress: 28,
  },
  {
    id: '5',
    title: 'Educate 5 Million People',
    description: 'Environmental education programs reaching students, communities, and professionals worldwide.',
    progress: 71,
  },
];

export const areasOfInterest: { value: AreaOfInterest; label: string }[] = [
  { value: 'climate-action', label: 'Climate Action' },
  { value: 'wildlife-protection', label: 'Wildlife Protection' },
  { value: 'ocean-conservation', label: 'Ocean Conservation' },
  { value: 'recycling-programs', label: 'Recycling Programs' },
  { value: 'community-outreach', label: 'Community Outreach' },
  { value: 'education', label: 'Education & Awareness' },
];
