import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { formatDate } from '../utils/format';

export const ArticleDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const article = useMemo(() => articles.find((item) => item.id === id), [id]);

  if (!article) {
    return (
      <div className="container-responsive space-y-4">
        <p className="text-lg font-semibold text-dusk">Article not found.</p>
        <Link to="/articles" className="text-leaf font-semibold">Back to articles</Link>
      </div>
    );
  }

  return (
    <div className="container-responsive space-y-6">
      <Link to="/articles" className="text-leaf font-semibold hover:text-dusk">← Back to articles</Link>
      <div className="glass-card p-8 space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-dusk/60 uppercase tracking-wide">Published {formatDate(article.date)}</p>
          <h1 className="text-3xl font-bold text-dusk">{article.title}</h1>
        </div>
        <p className="text-dusk/80 leading-relaxed text-lg">{article.summary}</p>
        <p className="text-dusk/80 leading-relaxed whitespace-pre-line">{article.content}</p>
      </div>
    </div>
  );
};
