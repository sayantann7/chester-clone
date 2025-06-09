
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

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
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Index;
