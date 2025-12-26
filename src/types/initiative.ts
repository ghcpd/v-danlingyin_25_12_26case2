export type InitiativeCategory = 'Climate' | 'Wildlife' | 'Ocean' | 'Recycling';

export interface Initiative {
  id: string;
  title: string;
  description: string;
  category: InitiativeCategory;
}
