import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🌍</span>
              GreenEarth
            </h3>
            <p className="text-earth-100">
              Dedicated to protecting our planet through education, community action, and sustainable initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-earth-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/initiatives" className="text-earth-100 hover:text-white transition-colors">
                  Our Initiatives
                </a>
              </li>
              <li>
                <a href="/articles" className="text-earth-100 hover:text-white transition-colors">
                  Knowledge Center
                </a>
              </li>
              <li>
                <a href="/get-involved" className="text-earth-100 hover:text-white transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-earth-100 hover:text-white transition-colors text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-earth-100 hover:text-white transition-colors text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-earth-100 hover:text-white transition-colors text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-earth-100 hover:text-white transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-700 pt-8 text-center text-earth-100">
          <p>&copy; {currentYear} GreenEarth. All rights reserved. Together for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
