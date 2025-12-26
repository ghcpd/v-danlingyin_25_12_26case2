import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-600 to-ocean-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protecting Our Planet for Future Generations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-earth-50">
              Join us in the fight against climate change and environmental degradation. 
              Together, we can create a sustainable future for all.
            </p>
            <Button to="/get-involved" size="lg" variant="secondary">
              Take Action
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Focus Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Climate Change */}
          <Card hover>
            <div className="text-center">
              <div className="text-6xl mb-4">🌡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Climate Change</h3>
              <p className="text-gray-600 mb-6">
                Combating global warming through renewable energy adoption, carbon reduction, 
                and sustainable practices that protect our atmosphere.
              </p>
              <Link to="/initiatives" className="text-earth-600 hover:text-earth-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </Card>

          {/* Wildlife Protection */}
          <Card hover>
            <div className="text-center">
              <div className="text-6xl mb-4">🦁</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wildlife Protection</h3>
              <p className="text-gray-600 mb-6">
                Preserving biodiversity and protecting endangered species through 
                habitat conservation and sustainable ecosystem management.
              </p>
              <Link to="/initiatives" className="text-earth-600 hover:text-earth-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </Card>

          {/* Sustainable Living */}
          <Card hover>
            <div className="text-center">
              <div className="text-6xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Living</h3>
              <p className="text-gray-600 mb-6">
                Promoting eco-friendly lifestyles through waste reduction, 
                recycling programs, and sustainable consumption patterns.
              </p>
              <Link to="/articles" className="text-earth-600 hover:text-earth-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-earth-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every action counts. Whether it's volunteering, learning about environmental issues, 
              or making sustainable choices in your daily life, you can be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/get-involved" size="lg">
                Volunteer With Us
              </Button>
              <Button to="/articles" size="lg" variant="outline">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-earth-600 mb-2">500K+</div>
            <div className="text-gray-600 font-medium">Trees Planted</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-ocean-600 mb-2">1M+</div>
            <div className="text-gray-600 font-medium">Ocean Cleanup (kg)</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-earth-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Active Volunteers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-ocean-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Active Initiatives</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
