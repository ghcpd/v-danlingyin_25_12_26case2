import React, { useState } from 'react';
import { initiatives } from '../data/initiatives';
import { InitiativeCategory } from '../types';
import Card from '../components/Card';

const Initiatives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<InitiativeCategory>('All');

  const categories: InitiativeCategory[] = ['All', 'Climate', 'Wildlife', 'Ocean', 'Recycling'];

  const filteredInitiatives = selectedCategory === 'All'
    ? initiatives
    : initiatives.filter(initiative => initiative.category === selectedCategory);

  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      Climate: '🌡️',
      Wildlife: '🦁',
      Ocean: '🌊',
      Recycling: '♻️'
    };
    return icons[category] || '🌍';
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Climate: 'bg-orange-100 text-orange-800',
      Wildlife: 'bg-green-100 text-green-800',
      Ocean: 'bg-blue-100 text-blue-800',
      Recycling: 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Initiatives
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our environmental projects and programs making a real difference 
          in protecting our planet and creating a sustainable future.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-earth-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-earth-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-earth-600">{filteredInitiatives.length}</span> initiatives
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInitiatives.map(initiative => (
          <Card key={initiative.id} hover>
            <div className="flex flex-col h-full">
              <div className="text-5xl mb-4">{getCategoryIcon(initiative.category)}</div>
              
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(initiative.category)}`}>
                  {initiative.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {initiative.title}
              </h3>
              
              <p className="text-gray-600 flex-grow">
                {initiative.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="text-earth-600 hover:text-earth-700 font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredInitiatives.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No initiatives found</h3>
          <p className="text-gray-600">Try selecting a different category</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-earth-50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Want to Support These Initiatives?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our community of volunteers and help make these projects a success. 
          Your time and effort can create real environmental impact.
        </p>
        <a
          href="/get-involved"
          className="inline-block bg-earth-600 hover:bg-earth-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        >
          Get Involved
        </a>
      </div>
    </div>
  );
};

export default Initiatives;
