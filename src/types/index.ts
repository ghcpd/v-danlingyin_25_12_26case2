export interface Initiative {
  id: string;
  title: string;
  description: string;
  category: 'Climate' | 'Wildlife' | 'Ocean' | 'Recycling';
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  content: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  areaOfInterest: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type InitiativeCategory = 'All' | 'Climate' | 'Wildlife' | 'Ocean' | 'Recycling';
