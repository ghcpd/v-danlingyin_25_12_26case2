import { useMemo, useState } from 'react';
import { InitiativeCard } from '../components/InitiativeCard';
import { initiatives } from '../data/initiatives';
import { InitiativeCategory } from '../types/initiative';

const categories: Array<InitiativeCategory | 'All'> = ['All', 'Climate', 'Wildlife', 'Ocean', 'Recycling'];

export const Initiatives = (): JSX.Element => {
  const [selected, setSelected] = useState<InitiativeCategory | 'All'>('All');

  const filtered = useMemo(() => {
    if (selected === 'All') return initiatives;
    return initiatives.filter((item) => item.category === selected);
  }, [selected]);

  return (
    <div className="container-responsive space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-dusk">Environmental Initiatives</h1>
        <p className="text-dusk/75 max-w-2xl">
          Explore active projects across climate resilience, wildlife protection, ocean health, and circular living.
          Use filters to find initiatives that match your interests.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              selected === category
                ? 'bg-leaf text-white border-leaf'
                : 'bg-white/80 border-white/60 text-dusk hover:border-leaf/40'
            }`}
            aria-pressed={selected === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>
    </div>
  );
};
