import React from 'react';
import { Users, Heart, Shield, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient">
            About RareLinks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the story behind our mission to curate the web's finest digital resources for creators and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're dedicated to discovering and sharing the most valuable digital resources, helping professionals and creators excel in their work.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Heart className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quality, authenticity, and user value are at the heart of everything we do. We carefully evaluate each resource before sharing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Shield className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Our Promise</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We commit to maintaining high standards and only featuring resources that truly add value to your creative journey.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Sparkles className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Our Future</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're constantly evolving and expanding our collection to bring you the latest and most innovative digital resources.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Be part of our growing community of creators and professionals. Stay updated with the latest resources and insights.
          </p>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;