
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const HobbiesGrid: React.FC = () => {
  const hobbies = [
    {
      title: "Colombia Finca La...",
      category: "Hobbies • Coffee",
      description: "Colombia • Apartment Coffee\nBlackberry, white peach and grapefruit",
      tags: ["FILTER", "NOW BREWING"]
    },
    {
      title: "Marimbus",
      category: "Hobbies • Coffee",
      description: "Brazil • Market Lane Coffee\nHazelnut and apricot",
      tags: ["ESPRESSO", "NOW BREWING"]
    },
    {
      title: "Finca Integral el...",
      category: "Hobbies • Coffee", 
      description: "Honduras • Simple Kaffa\nFloral, cocoa nibs, dark plum and citrus",
      tags: ["FILTER"]
    },
    {
      title: "Mexico Mico De Noche",
      category: "Hobbies • Coffee",
      description: "Mexico • Mountain Kids Coffee Roasters\nFloral, pear and peach", 
      tags: ["ESPRESSO"]
    },
    {
      title: "Philodendron hederaceum 'Micans'",
      category: "Hobbies • Plants",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      tags: ["ARACEAE"]
    },
    {
      title: "Alocasia baginda 'Silver Dragon'",
      category: "Hobbies • Plants", 
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png",
      tags: ["ARACEAE"]
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
        <h1 className="text-6xl font-crimson mb-8 text-foreground">hobbies.</h1>
        <p className="text-xl text-muted-foreground font-crimson leading-relaxed max-w-3xl">
          God knows I have too many hobbies... But I just can't help it though. I enjoy trying new 
          things and sometimes the new things stick.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {hobbies.map((hobby, index) => (
          <ProjectCard
            key={index}
            {...hobby}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HobbiesGrid;
