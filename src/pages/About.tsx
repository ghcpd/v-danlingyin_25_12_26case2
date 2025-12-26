import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About GreenEarth
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a global environmental organization dedicated to protecting our planet 
          and creating a sustainable future for generations to come.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="mb-16">
        <Card>
          <div className="text-center">
            <div className="text-6xl mb-6">🌍</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              GreenEarth's mission is to protect and restore the natural environment through 
              education, advocacy, and direct action. We work to combat climate change, preserve 
              biodiversity, promote sustainable living, and empower communities to become stewards 
              of the Earth. Our goal is to create a world where humans and nature thrive together 
              in harmony.
            </p>
          </div>
        </Card>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card hover>
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We believe in solutions that meet present needs without compromising 
              the ability of future generations to meet theirs.
            </p>
          </Card>

          <Card hover>
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Collaboration</h3>
            <p className="text-gray-600">
              Environmental challenges require collective action. We work with communities, 
              governments, and organizations worldwide.
            </p>
          </Card>

          <Card hover>
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Education</h3>
            <p className="text-gray-600">
              Knowledge is power. We educate and empower people to make informed 
              decisions about environmental protection.
            </p>
          </Card>

          <Card hover>
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Science-Based</h3>
            <p className="text-gray-600">
              Our initiatives are grounded in scientific research and evidence-based 
              approaches to environmental conservation.
            </p>
          </Card>

          <Card hover>
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Action-Oriented</h3>
            <p className="text-gray-600">
              We don't just talk about change—we implement it through concrete 
              projects and measurable outcomes.
            </p>
          </Card>

          <Card hover>
            <div className="text-5xl mb-4">🌈</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Inclusivity</h3>
            <p className="text-gray-600">
              Environmental protection is everyone's responsibility. We welcome 
              diverse perspectives and voices in our movement.
            </p>
          </Card>
        </div>
      </section>

      {/* Environmental Goals */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Environmental Goals
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Carbon Neutrality by 2030</h3>
                <p className="text-gray-600">
                  Achieve net-zero carbon emissions through renewable energy transition, 
                  reforestation projects, and carbon offset programs.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">🐾</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Biodiversity Protection</h3>
                <p className="text-gray-600">
                  Protect 30% of land and ocean ecosystems by 2030 to preserve biodiversity 
                  and endangered species habitats.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">🌊</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ocean Conservation</h3>
                <p className="text-gray-600">
                  Remove 1 million tons of plastic from oceans and prevent future pollution 
                  through education and policy advocacy.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">♻️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Waste Communities</h3>
                <p className="text-gray-600">
                  Establish zero waste programs in 100 communities worldwide, reducing 
                  landfill waste by 80%.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">🌳</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reforestation Initiative</h3>
                <p className="text-gray-600">
                  Plant 10 million trees by 2035 to restore forests, combat climate change, 
                  and provide wildlife habitats.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">👥</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  Engage 100,000 volunteers and educate 1 million people about sustainable 
                  practices and environmental stewardship.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
