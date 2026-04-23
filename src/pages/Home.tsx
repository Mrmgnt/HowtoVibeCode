import React from 'react';
import { TopNavBar } from '../components/organisms/TopNavBar';
import { HeroSection } from '../components/organisms/HeroSection';
import { ConceptSection } from '../components/organisms/ConceptSection';
import { WorkflowSection } from '../components/organisms/WorkflowSection';
import { Footer } from '../components/organisms/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 md:px-margin">
        <HeroSection />
        <ConceptSection />
        <WorkflowSection />
      </main>
      <Footer />
    </>
  );
};
