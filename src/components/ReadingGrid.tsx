
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ReadingGrid: React.FC = () => {
  const books = [
    {
      title: "Beyond Self-Interest",
      category: "Reading • Books",
      author: "Krzysztof Pelc",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      tags: ["TO READ"]
    },
    {
      title: "The Design of Everyday Things", 
      category: "Reading • Books",
      author: "Donald A. Norman",
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png",
      tags: ["READING"]
    },
    {
      title: "Do Androids Dream of Electric Sheep?",
      category: "Reading • Books", 
      author: "Philip K. Dick",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png",
      tags: ["READ"]
    },
    {
      title: "How to Win Friends and Influence People",
      category: "Reading • Books",
      author: "Dale Carnegie", 
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png",
      tags: ["READ"]
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
        <h1 className="text-6xl font-crimson mb-8 text-foreground">reading.</h1>
        <p className="text-xl text-muted-foreground font-crimson leading-relaxed max-w-3xl">
          What I'm reading, what I've read and what I hope to read next. Recommendations are 
          always welcome!
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {books.map((book, index) => (
          <ProjectCard
            key={index}
            {...book}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ReadingGrid;
