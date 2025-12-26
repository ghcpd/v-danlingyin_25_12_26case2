import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../data/articles';

export const Articles = (): JSX.Element => (
  <div className="container-responsive space-y-10">
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-dusk">Articles & Knowledge</h1>
      <p className="text-dusk/75 max-w-2xl">
        Learn fast with concise guides on climate action, wildlife stewardship, ocean protection, and sustainable living.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  </div>
);
