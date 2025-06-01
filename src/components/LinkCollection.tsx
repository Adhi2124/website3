import React, { useState, useEffect } from 'react';
import { Link } from '../types';
import LinkCard from './LinkCard';
import CategoryFilter from './CategoryFilter';
import { categories } from '../data/links';

interface LinkCollectionProps {
  links: Link[];
}

const LinkCollection: React.FC<LinkCollectionProps> = ({ links }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLinks, setFilteredLinks] = useState<Link[]>(links);

  useEffect(() => {
    // Filter links based on active category and search query
    let filtered = links;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(link => link.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(link => 
        link.title.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredLinks(filtered);
  }, [activeCategory, searchQuery, links]);

  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Explore Our Collection
        </h2>
        
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-5 pr-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <div className="absolute right-4 top-3.5 text-sm text-gray-400">
              {filteredLinks.length} results
            </div>
          </div>
        </div>
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {filteredLinks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredLinks.map((link, index) => (
              <div 
                key={link.id} 
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No links found matching your criteria. Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LinkCollection;