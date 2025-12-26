import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardImage, CardContent, CardTitle, CardDescription, Button, Badge } from '../components';
import { initiatives } from '../data';
import type { InitiativeCategory } from '../types';

const categories: (InitiativeCategory | 'All')[] = ['All', 'Climate', 'Wildlife', 'Ocean', 'Recycling'];

const categoryBadgeVariant: Record<InitiativeCategory, 'climate' | 'wildlife' | 'ocean' | 'recycling'> = {
  Climate: 'climate',
  Wildlife: 'wildlife',
  Ocean: 'ocean',
  Recycling: 'recycling',
};

export const InitiativesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as InitiativeCategory | null;
  const [selectedCategory, setSelectedCategory] = useState<InitiativeCategory | 'All'>(
    initialCategory && categories.includes(initialCategory) ? initialCategory : 'All'
  );

  const filteredInitiatives = useMemo(() => {
    if (selectedCategory === 'All') {
      return initiatives;
    }
    return initiatives.filter((initiative) => initiative.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: InitiativeCategory | 'All') => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
            <p className="text-lg md:text-xl text-primary-100">
              Discover our environmental projects and initiatives making a real difference
              in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter initiatives by category">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            Showing {filteredInitiatives.length} initiative{filteredInitiatives.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInitiatives.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredInitiatives.map((initiative) => (
                <Card key={initiative.id} hoverable className="h-full flex flex-col">
                  {initiative.imageUrl && (
                    <CardImage src={initiative.imageUrl} alt={initiative.title} />
                  )}
                  <CardContent className="flex-grow">
                    <div className="mb-3">
                      <Badge variant={categoryBadgeVariant[initiative.category]}>
                        {initiative.category}
                      </Badge>
                    </div>
                    <CardTitle>{initiative.title}</CardTitle>
                    <CardDescription>{initiative.description}</CardDescription>
                  </CardContent>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <Button variant="outline" fullWidth>
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No initiatives found for this category.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => handleCategoryChange('All')}
              >
                View All Initiatives
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Support Our Initiatives?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of volunteers and help us make these initiatives a success.
            Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-involved">
              <Button size="lg">Become a Volunteer</Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
