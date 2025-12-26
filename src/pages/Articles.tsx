import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { formatDate } from '../utils/validation';
import Card from '../components/Card';

const Articles: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Knowledge Center
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Educational articles and resources to help you understand environmental issues 
          and learn how to make a positive impact.
        </p>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map(article => (
          <Link key={article.id} to={`/articles/${article.id}`}>
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">📚</div>
                
                <div className="mb-3">
                  <span className="text-sm text-gray-500">
                    {formatDate(article.publishDate)}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-earth-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 flex-grow mb-4">
                  {article.summary}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-earth-600 hover:text-earth-700 font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-ocean-50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated on Environmental Issues
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Knowledge is the first step toward action. Explore our articles to learn 
          about climate change, conservation, and sustainable living.
        </p>
        <a
          href="/get-involved"
          className="inline-block bg-ocean-600 hover:bg-ocean-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        >
          Join Our Community
        </a>
      </div>
    </div>
  );
};

export default Articles;
