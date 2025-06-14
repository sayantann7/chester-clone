import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BentoGrid, BentoGridItem } from './BentoGrid';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "Design details that feel like magic.",
      category: "Projects • Design Spells",
      description: "Magic in your mailbox, every alternate Saturday.",
      size: 'large' as const,
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png",
      bgColor: "bg-blue-50",
    },
    {
      title: "Fields of Chess",
      category: "Projects • Fields of Chess",
      size: 'medium' as const,
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png"
    },
    {
      title: "Progression",
      category: "Projects • Progression", 
      size: 'medium' as const,
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png"
    },
    {
      title: "Foldaway",
      category: "Projects • Foldaway",
      size: 'wide' as const,
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mt-0 pt-0">

      <BentoGrid className="mb-24">
        {projects.map((project, index) => (
          <BentoGridItem key={index} size={project.size} className={project.bgColor}>
            <div className="relative h-full w-full overflow-hidden">
              {project.image && (
                <div className={`${project.size === 'large' ? 'aspect-[16/9]' : 'aspect-video'} overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                    <h3 className={`font-crimson ${project.size === 'large' ? 'text-4xl' : 'text-2xl'} font-semibold tracking-tight mb-2`}>
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    )}
                  </div>
                  <div className="rounded-full p-2 bg-background/50 backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </div>
  );
};

export default FeaturedProjects;