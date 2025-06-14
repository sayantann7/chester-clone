import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Mountain, BookOpen, PenTool, Code, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-0 mb-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left column - Hero text */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-canela leading-relaxed text-foreground">
            <span className="text-muted-foreground font-normal">Hey there, I'm </span>
            <motion.span 
              className="font-medium text-foreground relative cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              Chester
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </motion.span>
            <span className="text-muted-foreground font-normal"> 👋 Welcome to my </span>
            <span className="font-medium text-foreground">digital garden</span>
            <span className="text-muted-foreground font-normal"> 🌱</span>
          </h1>
          
          <p className="text-xl font-crimson leading-relaxed text-muted-foreground">
            I like building <span className="font-medium text-foreground">things</span>, and I'm currently helping to build <span className="font-medium text-foreground">Mobbin</span>.
          </p>
          
          <p className="text-xl font-crimson leading-relaxed text-muted-foreground">
            In my free time, I enjoy brewing <span className="font-medium text-foreground">coffee</span>, tending to my <span className="font-medium text-foreground">plants</span>, and <span className="font-medium text-foreground">climbing</span> (plastic) rocks.
          </p>
          
          <p className="text-xl font-crimson leading-relaxed text-muted-foreground">
            I do some <span className="font-medium text-foreground">reading</span> and <span className="font-medium text-foreground">writing</span> as well, albeit not as consistently, but I'm working on being better at that.
          </p>
        </motion.div>

        {/* Right column - Projects grid */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroBentoGrid />
        </motion.div>
      </div>
    </div>
  );
};

// Side bento grid component specifically for the hero section
const HeroBentoGrid: React.FC = () => {
  const projects = [
    {
      title: "Design Spells",
      category: "Projects",
      image: "/lovable-uploads/030096e1-cddc-4e38-885a-590dff30eb44.png",
      link: "/projects/design-spells"
    },
    {
      title: "Billbreak",
      category: "Projects",
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png",
      link: "/projects/billbreak"
    },
    {
      title: "Coffee",
      category: "Hobbies",
      content: "Colombia • Apartment Coffee",
      icon: <Coffee className="h-4 w-4" />,
      color: "bg-amber-50/50",
      accentColor: "text-amber-700"
    },
    {
      title: "Climbing",
      category: "Hobbies",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png",
      link: "/hobbies/climbing"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          className={cn(
            project.featured ? "col-span-2 row-span-2" : "col-span-1"
          )}
        />
      ))}
    </div>
  );
};

type ProjectCardProps = {
  project: {
    title: string;
    category: string;
    image?: string;
    content?: string;
    icon?: React.ReactNode;
    link?: string;
    color?: string;
    accentColor?: string;
    featured?: boolean;
  };
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <motion.div
      className={cn(
        "group relative rounded-xl overflow-hidden border border-border/30 bg-card shadow-sm hover:shadow-md transition-all duration-300",
        project.color,
        className
      )}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {project.image ? (
        <div className={cn(
          "overflow-hidden",
          project.featured ? "aspect-[16/9]" : "aspect-square"
        )}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs font-medium opacity-80 mb-1">{project.category}</p>
            <h3 className="font-canela text-lg font-medium flex items-center justify-between">
              {project.title}
              <ArrowUpRight className="h-4 w-4 opacity-80" />
            </h3>
          </div>
        </div>
      ) : (
        <div className={cn(
          "p-4 h-full flex flex-col justify-between",
          project.featured ? "aspect-[16/9]" : "min-h-[8rem]"
        )}>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">{project.category}</p>
            <h3 className={cn("font-canela text-base font-medium mb-1", project.accentColor)}>{project.title}</h3>
            {project.content && (
              <p className="text-xs text-muted-foreground">{project.content}</p>
            )}
          </div>
          <div className="flex justify-between items-center mt-2">
            {project.icon && <div className={cn("", project.accentColor)}>{project.icon}</div>}
            {project.link && <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hero;