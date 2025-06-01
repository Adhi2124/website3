import React from 'react';
import Hero from '../components/Hero';
import FeaturedLinks from '../components/FeaturedLinks';
import LinkCollection from '../components/LinkCollection';
import { links } from '../data/links';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedLinks links={links} />
      <LinkCollection links={links} />
    </>
  );
};

export default HomePage;