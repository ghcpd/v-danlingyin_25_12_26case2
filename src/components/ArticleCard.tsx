import { Link } from 'react-router-dom';
import { Article } from '../types/article';
import { formatDate } from '../utils/format';

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props): JSX.Element => (
  <article className="glass-card p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center justify-between text-xs text-dusk/60 uppercase tracking-wide">
      <span>Article</span>
      <span>{formatDate(article.date)}</span>
    </div>
    <h3 className="text-xl font-semibold text-dusk">{article.title}</h3>
    <p className="text-sm text-dusk/75 leading-relaxed flex-1">{article.summary}</p>
    <Link
      to={`/articles/${article.id}`}
      className="inline-flex items-center text-leaf font-semibold hover:text-dusk transition-colors"
    >
      Read more →
    </Link>
  </article>
);
