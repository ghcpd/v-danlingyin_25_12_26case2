import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { initiatives } from '../data/initiatives';
import { articles } from '../data/articles';

export const Home = (): JSX.Element => {
  const featuredInitiatives = initiatives.slice(0, 3);
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero
        title="Protecting our planet starts with community action"
        subtitle="GreenEarth connects people, projects, and knowledge so everyone can take meaningful steps for climate, wildlife, oceans, and zero-waste living."
        ctaLabel="Take Action"
        ctaHref="/get-involved"
        secondary={<Link to="/initiatives" className="font-semibold text-dusk hover:text-leaf">Explore initiatives →</Link>}
      />

      <section className="container-responsive space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-dusk">Focus areas</h2>
            <p className="text-dusk/75">Three pillars guide our work to keep ecosystems thriving.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Climate Resilience"
            description="Grow urban canopies, expand community solar, and support energy justice."
            icon={<span aria-hidden>🌿</span>}
          />
          <FeatureCard
            title="Wildlife Protection"
            description="Restore habitats, build pollinator pathways, and empower local stewards."
            icon={<span aria-hidden>🦋</span>}
          />
          <FeatureCard
            title="Sustainable Living"
            description="Cut single-use plastics, champion circular systems, and live zero-waste."
            icon={<span aria-hidden>♻️</span>}
          />
        </div>
      </section>

      <section className="container-responsive space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-dusk">Highlighted initiatives</h2>
          <Link to="/initiatives" className="font-semibold text-leaf hover:text-dusk">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredInitiatives.map((initiative) => (
            <div key={initiative.id} className="glass-card p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-dusk">{initiative.title}</h3>
                <span className="badge">{initiative.category}</span>
              </div>
              <p className="text-sm text-dusk/75 leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-responsive space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-dusk">Latest articles</h2>
          <Link to="/articles" className="font-semibold text-leaf hover:text-dusk">Browse library</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <div key={article.id} className="glass-card p-6 space-y-3">
              <div className="text-xs text-dusk/60 uppercase tracking-wide">{article.date}</div>
              <h3 className="text-lg font-semibold text-dusk">{article.title}</h3>
              <p className="text-sm text-dusk/75 leading-relaxed">{article.summary}</p>
              <Link to={`/articles/${article.id}`} className="text-leaf font-semibold hover:text-dusk">Read article →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
