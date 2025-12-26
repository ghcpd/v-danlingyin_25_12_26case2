import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { formatDate } from '../utils/validation';
import Button from '../components/Button';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const currentIndex = articles.findIndex(a => a.id === id);
  const previousArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/articles"
          className="inline-flex items-center text-earth-600 hover:text-earth-700 font-medium"
        >
          ← Back to Articles
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="text-6xl mb-6 text-center">📚</div>
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">
                Published on {formatDate(article.publishDate)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600">
              {article.summary}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="bg-earth-100 text-earth-800 px-3 py-1 rounded-full text-sm font-medium">
                Environment
              </span>
              <span className="bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full text-sm font-medium">
                Sustainability
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Education
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousArticle ? (
            <Link
              to={`/articles/${previousArticle.id}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-gray-500 mb-2">← Previous Article</div>
              <div className="font-semibold text-gray-800 hover:text-earth-600 transition-colors">
                {previousArticle.title}
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextArticle && (
            <Link
              to={`/articles/${nextArticle.id}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-right"
            >
              <div className="text-sm text-gray-500 mb-2">Next Article →</div>
              <div className="font-semibold text-gray-800 hover:text-earth-600 transition-colors">
                {nextArticle.title}
              </div>
            </Link>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-earth-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Take Action?
          </h3>
          <p className="text-gray-600 mb-6">
            Learn more about our initiatives and how you can contribute to environmental protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/initiatives">
              Explore Initiatives
            </Button>
            <Button to="/get-involved" variant="outline">
              Get Involved
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
