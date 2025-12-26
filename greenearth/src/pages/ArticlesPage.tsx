import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardContent, CardTitle, CardDescription, Button } from '../components';
import { articles } from '../data';
import { formatDate } from '../utils';

export const ArticlesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge & Articles</h1>
            <p className="text-lg md:text-xl text-primary-100">
              Explore our collection of educational articles covering climate science,
              conservation, and sustainable living practices.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`}>
                <Card hoverable className="h-full flex flex-col">
                  {article.imageUrl && (
                    <CardImage src={article.imageUrl} alt="" />
                  )}
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(article.publishDate)}
                      {article.author && ` • ${article.author}`}
                    </p>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.summary}</CardDescription>
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <span className="text-primary-600 font-medium hover:underline">
                      Read More →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest environmental news and articles delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Email address for newsletter"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
