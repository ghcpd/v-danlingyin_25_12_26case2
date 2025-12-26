import React from 'react';
import { Button, Input, Select, Card, CardContent } from '../components';
import { useForm } from '../hooks';
import { areasOfInterest } from '../data';
import { isValidEmail } from '../utils';
import type { FormErrors } from '../types';

interface VolunteerFormValues {
  name: string;
  email: string;
  areaOfInterest: string;
}

const initialValues: VolunteerFormValues = {
  name: '',
  email: '',
  areaOfInterest: '',
};

const validate = (values: VolunteerFormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!values.areaOfInterest) {
    errors.areaOfInterest = 'Please select an area of interest';
  }

  return errors;
};

export const GetInvolvedPage: React.FC = () => {
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm<VolunteerFormValues>({
    initialValues,
    validate,
    onSubmit: async (formValues) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Volunteer form submitted:', formValues);
    },
  });

  if (isSubmitted) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
              <p className="text-lg md:text-xl text-primary-100">
                Join our community of environmental advocates and make a real difference.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Thank You for Signing Up!
              </h2>
              <p className="text-gray-600 mb-6">
                We've received your volunteer application. Our team will reach out to you
                soon with more information about how you can contribute to our environmental
                initiatives.
              </p>
              <Button onClick={resetForm}>Sign Up Another Volunteer</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-lg md:text-xl text-primary-100">
              Join our community of environmental advocates and make a real difference.
              Whether you have a few hours or can commit regularly, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Volunteer Sign-Up
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to join our volunteer community. We'll match you
                with opportunities that align with your interests and availability.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />

                  <Select
                    label="Area of Interest"
                    name="areaOfInterest"
                    value={values.areaOfInterest}
                    onChange={handleChange}
                    error={errors.areaOfInterest}
                    options={areasOfInterest}
                    placeholder="Select your area of interest"
                    required
                  />

                  <Button type="submit" fullWidth isLoading={isSubmitting} size="lg">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Why Volunteer?</h3>
              
              <Card>
                <CardContent className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl" aria-hidden="true">🌱</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Make a Difference</h4>
                    <p className="text-gray-600 text-sm">
                      Your efforts directly contribute to environmental protection and restoration projects.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl" aria-hidden="true">🤝</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Join a Community</h4>
                    <p className="text-gray-600 text-sm">
                      Connect with like-minded individuals who share your passion for the environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl" aria-hidden="true">📚</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Learn & Grow</h4>
                    <p className="text-gray-600 text-sm">
                      Gain valuable skills and knowledge about environmental science and conservation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl" aria-hidden="true">⏰</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Options</h4>
                    <p className="text-gray-600 text-sm">
                      Choose from various opportunities that fit your schedule and interests.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of ways to get involved, both in-person and remotely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Tree Planting Events',
                description: 'Join our local tree planting initiatives to help restore urban and rural forests.',
                icon: '🌳',
                type: 'In-Person',
              },
              {
                title: 'Beach Cleanups',
                description: 'Help remove plastic and debris from coastal areas to protect marine life.',
                icon: '🏖️',
                type: 'In-Person',
              },
              {
                title: 'Environmental Education',
                description: 'Share your knowledge by teaching environmental topics to students and communities.',
                icon: '📖',
                type: 'Hybrid',
              },
              {
                title: 'Social Media Advocacy',
                description: 'Help spread awareness about environmental issues through digital campaigns.',
                icon: '📱',
                type: 'Remote',
              },
              {
                title: 'Wildlife Monitoring',
                description: 'Participate in citizen science projects to track and protect wildlife populations.',
                icon: '🦋',
                type: 'In-Person',
              },
              {
                title: 'Content Creation',
                description: 'Write articles, create graphics, or produce videos for our campaigns.',
                icon: '✍️',
                type: 'Remote',
              },
            ].map((opportunity, index) => (
              <Card key={index} className="h-full">
                <CardContent>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" aria-hidden="true">{opportunity.icon}</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      {opportunity.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
