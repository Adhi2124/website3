import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block mb-6">
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
              Discover Premium Resources
            </span>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient">
            Discover Rare Digital Gems
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Curated collection of premium tools, resources, and services for designers, developers, and digital creators.
            Elevate your workflow with our handpicked selection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#featured" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              Explore Collection 
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#categories" 
              className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              Browse Categories
            </a>
          </div>
          
          <div className="w-full mt-16 md:mt-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900 z-10"></div>
            <div className="relative z-0 w-full h-24 md:h-32 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-purple-900/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;