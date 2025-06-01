import React from 'react';
import { Category } from '../types';
import * as LucideIcons from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  // Dynamic icon rendering from lucide-react
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeCategory === category.id 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}
            `}
          >
            {renderIcon(category.icon)}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;