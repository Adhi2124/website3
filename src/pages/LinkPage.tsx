import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Tag, Calendar } from 'lucide-react';
import { links } from '../data/links';

const LinkPage: React.FC = () => {
  const { id } = useParams();
  const link = links.find(l => l.id === id);

  if (!link) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
        <RouterLink 
          to="/"
          className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </RouterLink>
      </div>
    );
  }

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <RouterLink 
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all resources
        </RouterLink>

        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 md:h-96">
            <img 
              src={link.image}
              alt={link.title}
              className="w-full h-full object-cover"
            />
            {link.featured && (
              <div className="absolute top-4 left-4 px-3 py-1.5 text-sm font-medium bg-yellow-500/90 text-white rounded-full">
                Featured
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Tag className="h-4 w-4" />
                {link.category.charAt(0).toUpperCase() + link.category.slice(1)}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                Added {new Date(link.dateAdded).toLocaleDateString('en-US', { 
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{link.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {link.description}
            </p>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
            >
              Visit Resource
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;