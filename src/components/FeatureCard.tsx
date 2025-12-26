import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps): JSX.Element => (
  <div className="glass-card p-6 flex flex-col gap-4">
    <div className="h-12 w-12 rounded-xl bg-leaf/10 text-leaf flex items-center justify-center text-xl">{icon}</div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-dusk">{title}</h3>
      <p className="text-dusk/75 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);
