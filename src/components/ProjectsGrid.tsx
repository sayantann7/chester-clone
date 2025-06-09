
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsGrid: React.FC = () => {
  const projects = [
    {
      title: "Fields of Chess",
      category: "Projects • Fields of Chess",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      size: "medium" as const
    },
    {
      title: "Design details that feel like magic.",
      category: "Projects • Design Spells",
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png",
      size: "medium" as const,
      description: "Magic in your mailbox, every alternate Saturday."
    },
    {
      title: "Progression",
      category: "Projects • Progression",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png",
      size: "medium" as const
    },
    {
      title: "Foldaway",
      category: "Projects • Foldaway",
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png",
      size: "medium" as const
    },
    {
      title: "MouseHunt Helper",
      category: "Projects • MouseHunt Helper",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      size: "medium" as const
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
        <h1 className="text-6xl font-crimson mb-8 text-foreground">projects.</h1>
        <p className="text-xl text-muted-foreground font-crimson leading-relaxed max-w-3xl">
          I like building things. Here are a few things I've built thus far that I'm pretty pleased with.
          <br />
          Most, if not all of them, were built for fun.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsGrid;
