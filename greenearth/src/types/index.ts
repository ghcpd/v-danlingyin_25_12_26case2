/**
 * Initiative category types
 */
export type InitiativeCategory = 'Climate' | 'Wildlife' | 'Ocean' | 'Recycling';

/**
 * Initiative data structure
 */
export interface Initiative {
  id: string;
  title: string;
  description: string;
  category: InitiativeCategory;
  imageUrl?: string;
}

/**
 * Article data structure
 */
export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  author?: string;
  imageUrl?: string;
  tags?: string[];
}

/**
 * Volunteer form data structure
 */
export interface VolunteerFormData {
  name: string;
  email: string;
  areaOfInterest: AreaOfInterest;
}

/**
 * Areas of interest for volunteers
 */
export type AreaOfInterest = 
  | 'climate-action'
  | 'wildlife-protection'
  | 'ocean-conservation'
  | 'recycling-programs'
  | 'community-outreach'
  | 'education';

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Form validation error structure
 */
export interface FormErrors {
  [key: string]: string;
}

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string;
  path: string;
}

/**
 * Featured section on home page
 */
export interface FeaturedSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkPath: string;
}

/**
 * Organization value structure
 */
export interface OrganizationValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * Environmental goal structure
 */
export interface EnvironmentalGoal {
  id: string;
  title: string;
  description: string;
  progress?: number;
}
