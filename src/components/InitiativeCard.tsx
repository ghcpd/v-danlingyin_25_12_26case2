import { Initiative } from '../types/initiative';

interface Props {
  initiative: Initiative;
}

export const InitiativeCard = ({ initiative }: Props): JSX.Element => (
  <article className="glass-card p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-lg font-semibold text-dusk">{initiative.title}</h3>
      <span className="badge">{initiative.category}</span>
    </div>
    <p className="text-sm text-dusk/75 leading-relaxed">{initiative.description}</p>
  </article>
);
