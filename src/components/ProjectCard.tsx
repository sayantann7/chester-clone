
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  category: string;
  image?: string;
  tags?: string[];
  description?: string;
  size?: 'small' | 'medium' | 'large';
  author?: string;
  date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  category,
  image,
  tags = [],
  description,
  size = 'medium',
  author,
  date
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

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
    <motion.div 
      className={`project-card ${getSizeClasses()}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {image && (
        <div className="aspect-video bg-muted relative overflow-hidden rounded-t-2xl">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            {category}
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-60" />
        </div>
        
        <h3 className="text-xl font-crimson text-foreground mb-3 leading-tight">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-muted-foreground text-sm mb-3">
            {subtitle}
          </p>
        )}
        
        {author && (
          <p className="text-muted-foreground text-sm mb-3 font-medium">
            {author}
          </p>
        )}
        
        {date && (
          <p className="text-muted-foreground text-xs mb-3">
            {date}
          </p>
        )}
        
        {description && (
          <p className="text-foreground text-sm mb-4 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span 
                key={tag} 
                className={`tag ${getTagColor(tag)}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
