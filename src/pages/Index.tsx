
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import WritingGrid from '@/components/WritingGrid';
import ReadingGrid from '@/components/ReadingGrid';
import HobbiesGrid from '@/components/HobbiesGrid';
import IsItToxicProject from '@/components/IsItToxicProject';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeTab, setActiveTab] = useState('chester');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsGrid />;
      case 'writing':
        return <WritingGrid />;
      case 'reading':
        return <ReadingGrid />;
      case 'hobbies':
        return <HobbiesGrid />;
      default:
        return (
          <>
            <Hero />
            <ProjectsGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Index;
