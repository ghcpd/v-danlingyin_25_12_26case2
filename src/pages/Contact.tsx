import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { validateEmail, validateRequired } from '../utils/validation';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or want to learn more about our work? 
          We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
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
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
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

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" fullWidth size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">📍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Location</h3>
                  <p className="text-gray-600">
                    123 Green Street<br />
                    Eco City, EC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">📧</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:info@greenearth.org" className="text-earth-600 hover:text-earth-700">
                    info@greenearth.org
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">📞</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-earth-600 hover:text-earth-700">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">⏰</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Connect on Social Media
            </h3>
            <p className="text-gray-600 mb-4">
              Follow us for the latest updates on our environmental initiatives and events.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-earth-100 hover:bg-earth-200 rounded-lg transition-colors text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-earth-100 hover:bg-earth-200 rounded-lg transition-colors text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-earth-100 hover:bg-earth-200 rounded-lg transition-colors text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-earth-100 hover:bg-earth-200 rounded-lg transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-800">How can I volunteer?</p>
                <p className="text-gray-600">Visit our Get Involved page to sign up as a volunteer.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Do you accept donations?</p>
                <p className="text-gray-600">Yes! Contact us to learn about donation opportunities.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Where do you operate?</p>
                <p className="text-gray-600">We have initiatives worldwide. Check our Initiatives page.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
