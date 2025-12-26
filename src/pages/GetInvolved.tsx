import React, { useState } from 'react';
import { VolunteerFormData } from '../types';
import { validateEmail, validateRequired } from '../utils/validation';
import Button from '../components/Button';
import Card from '../components/Card';

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: '',
    email: '',
    areaOfInterest: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof VolunteerFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const areasOfInterest = [
    'Climate Action',
    'Wildlife Conservation',
    'Ocean Protection',
    'Recycling & Waste Management',
    'Community Education',
    'Policy Advocacy',
    'Fundraising',
    'Event Organization'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof VolunteerFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof VolunteerFormData, string>> = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.areaOfInterest)) {
      newErrors.areaOfInterest = 'Please select an area of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        areaOfInterest: ''
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Get Involved
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our community of passionate volunteers and make a real difference 
          in protecting our planet. Every action counts!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Volunteer Form */}
        <div>
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Volunteer Sign-Up
            </h2>

            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Thank you for signing up!</p>
                    <p className="text-sm">We'll be in touch soon with volunteer opportunities.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Area of Interest Field */}
              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500 ${
                    errors.areaOfInterest ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select an area</option>
                  {areasOfInterest.map(area => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {errors.areaOfInterest && (
                  <p className="mt-1 text-sm text-red-500">{errors.areaOfInterest}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" fullWidth size="lg">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>

        {/* Why Volunteer Section */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Why Volunteer With Us?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">🌟</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Make Real Impact</h3>
                  <p className="text-gray-600 text-sm">
                    Your contributions directly support environmental protection and conservation efforts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">👥</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Join a Community</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with like-minded individuals passionate about environmental causes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Learn & Grow</h3>
                  <p className="text-gray-600 text-sm">
                    Gain valuable skills and knowledge about environmental science and conservation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Flexible Opportunities</h3>
                  <p className="text-gray-600 text-sm">
                    Choose from various activities that fit your schedule and interests.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Volunteer Opportunities
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Beach and park cleanup events
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Tree planting initiatives
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Educational workshop facilitation
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Wildlife monitoring and research
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Community outreach programs
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Social media and communications
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
