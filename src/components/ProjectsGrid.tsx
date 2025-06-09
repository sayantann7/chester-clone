
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsGrid: React.FC = () => {
  const projects = [
    {
      title: "Design details that feel like magic.",
      category: "Projects • Design Spells",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      size: "large" as const,
      description: "Magic in your mailbox, every alternate Saturday."
    },
    {
      title: "Let's Billbreak",
      category: "Projects • Billbreak",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      size: "medium" as const
    },
    {
      title: "2022.12.05 @ Fit Bloc",
      category: "Hobbies • Climbing",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      size: "medium" as const
    },
    {
      title: "What the heck is a digital garden?",
      category: "Writing • Blog",
      date: "February 1, 2023",
      description: "So you've landed on my site (or not, that's okay you can check it out here), and you're curious about this \"digital garden\" thing. Or perhaps you've heard of digital gardens..."
    },
    {
      title: "FilmNeverDie KIRO 400",
      category: "Projects • Snob",
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png"
    },
    {
      title: "Fields of Chess",
      category: "Projects • Fields of Chess",
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png"
    },
    {
      title: "The Design of Everyday Things",
      category: "Reading • Books",
      author: "Donald A. Norman",
      tags: ["READING"]
    },
    {
      title: "Colombia Finca La...",
      category: "Hobbies • Coffee",
      description: "Colombia • Apartment Coffee\nBlackberry, white peach and grapefruit",
      tags: ["FILTER", "NOW BREWING"]
    },
    {
      title: "Snob.",
      category: "Projects • Snob",
      description: "Notes of joy 🌈, miscat and berries.",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png"
    },
    {
      title: "Kentmere Pan 400",
      category: "Reading • Books",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png"
    },
    {
      title: "Children of Dune",
      category: "Reading • Books",
      author: "Frank Herbert",
      tags: ["READ"]
    },
    {
      title: "Philodendron hederaceum 'Micans'",
      category: "Hobbies • Plants",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png",
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
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
