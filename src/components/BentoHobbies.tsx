import React from 'react';
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from './BentoGrid';

const BentoHobbies: React.FC = () => {
  const hobbies = [
    {
      title: "Colombia Finca La...",
      category: "Hobbies • Coffee",
      description: "Colombia • Apartment Coffee\nBlackberry, white peach and grapefruit",
      tags: ["FILTER", "NOW BREWING"],
      size: 'medium' as const,
    },
    {
      title: "Marimbus",
      category: "Hobbies • Coffee",
      description: "Brazil • Market Lane Coffee\nHazelnut and apricot",
      tags: ["ESPRESSO", "NOW BREWING"],
      size: 'medium' as const,
    },
    {
      title: "Philodendron hederaceum 'Micans'",
      category: "Hobbies • Plants",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      tags: ["ARACEAE"],
      size: 'wide' as const,
    },
    {
      title: "Mexico Mico De Noche",
      category: "Hobbies • Coffee",
      description: "Mexico • Mountain Kids Coffee Roasters\nFloral, pear and peach", 
      tags: ["ESPRESSO"],
      size: 'medium' as const,
    },
  ];

  const getTagColor = (tag: string) => {
    if (tag === 'TO READ') return 'tag-pink';
    if (tag === 'READING') return 'tag-orange';
    if (tag === 'READ') return 'tag-green';
    if (tag === 'FILTER') return 'tag-green';
    if (tag === 'NOW BREWING') return 'tag-orange';
    if (tag === 'ESPRESSO') return 'tag-purple';
    if (tag === 'ARACEAE') return 'tag-blue';
    
    const colors = ['tag-blue', 'tag-green', 'tag-orange', 'tag-purple', 'tag-pink'];
    return colors[Math.abs(tag.length) % colors.length];
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h1 className="text-6xl font-canela mb-8 text-foreground">hobbies.</h1>
        <p className="text-xl text-muted-foreground font-crimson leading-relaxed max-w-3xl">
          God knows I have too many hobbies... But I just can't help it though. I enjoy trying new 
          things and sometimes the new things stick.
        </p>
      </motion.div>

      <BentoGrid>
        {hobbies.map((hobby, index) => (
          <BentoGridItem key={index} size={hobby.size}>
            <div className="h-full p-6 flex flex-col">
              {hobby.image && (
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-sm text-muted-foreground mb-2">{hobby.category}</p>
              <h3 className="font-crimson text-xl font-semibold mb-2">{hobby.title}</h3>
              
              {hobby.description && (
                <p className="text-foreground text-sm mb-4 leading-relaxed whitespace-pre-line">
                  {hobby.description}
                </p>
              )}
              
              <div className="mt-auto pt-4">
                {hobby.tags && hobby.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {hobby.tags.map((tag, i) => (
                      <motion.span 
                        key={tag} 
                        className={`tag ${getTagColor(tag)}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </div>
  );
};

export default BentoHobbies;