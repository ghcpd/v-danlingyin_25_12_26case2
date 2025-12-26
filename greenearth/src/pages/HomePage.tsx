import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardTitle, CardDescription } from '../components';
import { featuredSections } from '../data';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Our Planet for Future Generations
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
              Join millions of people around the world taking action to combat climate change,
              protect wildlife, and create a sustainable future. Every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-involved">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Take Action
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-20 fill-gray-50"
            viewBox="0 0 1440 74"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50M+', label: 'Trees Planted' },
              { value: '100+', label: 'Countries Reached' },
              { value: '1M+', label: 'Volunteers' },
              { value: '500K', label: 'Species Protected' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We tackle environmental challenges on multiple fronts, from climate change
              to wildlife protection and sustainable living practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSections.map((section) => (
              <Link key={section.id} to={section.linkPath}>
                <Card hoverable className="h-full">
                  <CardContent className="text-center py-8">
                    <span className="text-5xl mb-4 block" aria-hidden="true">{section.icon}</span>
                    <CardTitle className="text-xl mb-3">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                    <span className="inline-block mt-4 text-primary-600 font-medium hover:underline">
                      Learn More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Making Real Impact Together
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since our founding, we've worked with communities, governments, and organizations
                worldwide to create lasting environmental change. Our programs focus on:
              </p>
              <ul className="space-y-4">
                {[
                  'Reducing carbon emissions through renewable energy advocacy',
                  'Protecting endangered species and their habitats',
                  'Promoting sustainable practices in local communities',
                  'Educating the next generation of environmental stewards',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/initiatives">
                  <Button>View Our Initiatives</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
                  alt="Sunlight streaming through a lush forest canopy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold text-primary-600">15+ Years</p>
                <p className="text-gray-600">of Environmental Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our community of environmental advocates and take meaningful action
            to protect our planet. Together, we can create a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/articles">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Read Our Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Updates
            </h2>
            <Link
              to="/articles"
              className="text-primary-600 font-medium hover:underline hidden sm:block"
            >
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'New Partnership Announced for Ocean Conservation',
                date: 'December 20, 2024',
                image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=400',
              },
              {
                title: 'Community Tree Planting Event a Huge Success',
                date: 'December 15, 2024',
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
              },
              {
                title: 'Youth Climate Summit Draws Record Attendance',
                date: 'December 10, 2024',
                image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400',
              },
            ].map((news, index) => (
              <Card key={index} hoverable>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link to="/articles">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
