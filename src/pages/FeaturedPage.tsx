import React from 'react';
import { links } from '../data/links';
import LinkCard from '../components/LinkCard';
import { Sparkles } from 'lucide-react';

const FeaturedPage: React.FC = () => {
  const featuredLinks = links.filter(link => link.featured);

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient">
              Featured Resources
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium tools and resources that stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredLinks.map((link, index) => (
            <div 
              key={link.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LinkCard link={link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;