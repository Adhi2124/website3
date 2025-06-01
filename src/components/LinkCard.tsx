import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Link as LinkType } from '../types';

interface LinkCardProps {
  link: LinkType;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
    >
      <RouterLink to={`/link/${link.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={link.image}
            alt={link.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {link.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-yellow-500/90 text-white rounded-full z-10">
              Featured
            </div>
          )}
          
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute right-3 bottom-3 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 z-10"
            aria-label={`Visit ${link.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </RouterLink>
      
      <div className="flex flex-col flex-grow p-5">
        <RouterLink to={`/link/${link.id}`}>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              {link.title}
            </h3>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {link.description}
          </p>
        </RouterLink>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
            {link.category.charAt(0).toUpperCase() + link.category.slice(1)}
          </span>
          
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Added {new Date(link.dateAdded).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;