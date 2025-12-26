import React from 'react';
import { Card, CardContent } from '../components';
import { organizationValues, environmentalGoals } from '../data';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GreenEarth</h1>
            <p className="text-lg md:text-xl text-primary-100">
              We are a global community dedicated to protecting our planet through education,
              advocacy, and direct action. Together, we're building a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At GreenEarth, our mission is to protect and restore the natural environment
                through grassroots organizing, public education, and advocacy campaigns.
                We believe that every person has the power to make a difference, and together,
                we can create lasting change.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, we have grown from a small group of passionate environmentalists
                into a global movement with supporters in over 100 countries. Our work spans
                from local community projects to international policy advocacy.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where people live in harmony with nature, where clean air
                and water are available to all, and where biodiversity thrives for generations
                to come.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600"
                  alt="Volunteers working together on an environmental project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from how we work with communities
              to how we advocate for policy change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationValues.map((value) => (
              <Card key={value.id} className="h-full">
                <CardContent className="text-center py-8">
                  <span className="text-4xl mb-4 block" aria-hidden="true">{value.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Environmental Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've set ambitious targets to drive meaningful environmental impact.
              Here's our progress towards these goals.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {environmentalGoals.map((goal) => (
              <Card key={goal.id}>
                <CardContent>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    {goal.progress !== undefined && (
                      <span className="text-primary-600 font-medium">{goal.progress}%</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  {goal.progress !== undefined && (
                    <div className="w-full bg-gray-200 rounded-full h-3" role="progressbar" aria-valuenow={goal.progress} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className="bg-primary-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated team working to make our vision a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Green', role: 'Executive Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' },
              { name: 'Michael Rivers', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
              { name: 'Dr. Lisa Chen', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
              { name: 'James Okonkwo', role: 'Community Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <div className="pt-6 px-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a global movement, here's how we've grown.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { year: '2009', title: 'Founded', description: 'GreenEarth was founded by a group of environmental scientists and activists.' },
              { year: '2012', title: 'First Major Campaign', description: 'Launched our first international campaign on ocean conservation.' },
              { year: '2015', title: 'Global Expansion', description: 'Expanded operations to 50 countries with local chapters.' },
              { year: '2018', title: '1 Million Supporters', description: 'Reached the milestone of 1 million active supporters worldwide.' },
              { year: '2021', title: 'Climate Action Award', description: 'Received the Global Climate Action Award for our carbon reduction initiatives.' },
              { year: '2024', title: 'New Goals', description: 'Launched our most ambitious environmental goals for the next decade.' },
            ].map((event, index) => (
              <div key={index} className="flex gap-4 md:gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                    {event.year}
                  </div>
                  {index < 5 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
