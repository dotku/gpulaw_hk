'use client';

import { useState } from 'react';

export default function CaseIntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    urgency: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Family Law',
    'Consumer & Debt',
    'Housing & Landlord-Tenant',
    'Wills, Estates & Probate',
    'Immigration',
    'Traffic Cases',
    'Other',
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General question', color: 'text-green-600' },
    { value: 'medium', label: 'Medium - Need help within a week', color: 'text-yellow-600' },
    { value: 'high', label: 'High - Urgent matter', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical - Immediate assistance needed', color: 'text-red-600' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Case intake submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        urgency: '',
        description: '',
      });
    }, 3000);
  };

  return (
    <section id="get-help" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <div className="sticky top-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Get AI-Powered Legal Help Now
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Describe your legal issue and receive instant AI analysis, guidance, and next steps.
                If needed, connect with a licensed attorney.
              </p>

              {/* Process Steps */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Submit Your Issue</h3>
                    <p className="text-gray-600 text-sm">Tell us about your legal situation in your own words</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">AI Analysis</h3>
                    <p className="text-gray-600 text-sm">Our AI instantly analyzes your case and provides insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Get Guidance</h3>
                    <p className="text-gray-600 text-sm">Receive actionable legal guidance and document templates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Connect with Attorney</h3>
                    <p className="text-gray-600 text-sm">If needed, get matched with a licensed attorney</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <h4 className="font-bold text-gray-900">100% Confidential</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  All information is protected by attorney-client privilege and encrypted for your security.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-2xl border-2 border-blue-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Case Submitted!</h3>
                <p className="text-lg text-gray-600">
                  Our AI is analyzing your case. You'll receive guidance in your email within minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Intake Form</h3>
                  <p className="text-gray-600 text-sm mb-6">All fields are required for best AI analysis</p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-gray-900 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select urgency level</option>
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Describe Your Legal Issue
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Please provide as much detail as possible about your situation..."
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Be specific: Include dates, parties involved, documents you have, and what outcome you're seeking
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-950 hover:to-blue-800 text-white font-extrabold px-10 py-5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-blue-700 text-lg tracking-wide uppercase"
                >
                  Get AI Analysis Now
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
