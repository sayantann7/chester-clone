
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const WritingGrid: React.FC = () => {
  const writings = [
    {
      title: "On weddings",
      category: "Writing • Blog",
      date: "February 16, 2025",
      description: "I've always wanted a small wedding. Just our immediate families and closest friends in a beautiful yet cozy venue. Formally dressed for sure, but it should still feel like..."
    },
    {
      title: "Consistency and spontaneity",
      category: "Writing • Blog", 
      date: "December 31, 2023",
      description: "So, here I am spending the last two days of 2023 down with a fever. I've been wanting to take some time to reflect on the year, but if I wasn't sick I probably wouldn't made..."
    },
    {
      title: "Out of focus",
      category: "Writing • Blog",
      date: "June 12, 2023", 
      description: "Last Friday, as I was heading home from work, my eyes were feeling the strain from staring at my computer screen all day. And I'm not quite sure what came over me, but..."
    },
    {
      title: "On copying",
      category: "Writing • Blog",
      date: "April 20, 2023",
      description: "Not too long ago, I completed a new iteration of my personal website and shared it online. The response far exceeded my initial expectations. It received a lot of lov..."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h1 className="text-6xl font-crimson mb-8 text-foreground">writing.</h1>
        <p className="text-xl text-muted-foreground font-crimson leading-relaxed max-w-3xl">
          I have a blog that doesn't really adhere to any fixed themes. From philosophy essays to 
          movie reviews to shower thoughts, it really is the wild west. These days, I'm trying to Tweet 
          more instead.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {writings.map((writing, index) => (
          <ProjectCard
            key={index}
            {...writing}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default WritingGrid;
