import React from 'react';
import { Link } from '../types';
import LinkCard from './LinkCard';
import { Sparkles } from 'lucide-react';

interface FeaturedLinksProps {
  links: Link[];
}

const FeaturedLinks: React.FC<FeaturedLinksProps> = ({ links }) => {
  // Filter featured links
  const featuredLinks = links.filter(link => link.featured);

  return (
    <section id="featured\" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Links</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredLinks.map(link => (
            <div key={link.id} className="animate-fadeIn" style={{ animationDelay: `${parseInt(link.id) * 100}ms` }}>
              <LinkCard link={link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLinks;