import React, { useState } from 'react';
import { links, categories } from '../data/links';
import CategoryFilter from '../components/CategoryFilter';
import LinkCard from '../components/LinkCard';

const CategoriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredLinks = activeCategory === 'all' 
    ? links 
    : links.filter(link => link.category === activeCategory);

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient">
            Browse by Category
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated collection of premium resources organized by category.
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

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
      </div>
    </div>
  );
};

export default CategoriesPage;