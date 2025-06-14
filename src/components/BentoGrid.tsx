import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export interface BentoGridItemProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {children}
    </div>
  );
}

export function BentoGridItem({ className, size = 'medium', children }: BentoGridItemProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className={cn(
        "row-span-1 col-span-1 rounded-3xl overflow-hidden border border-border/30 bg-card shadow-sm hover:shadow-lg transition-all duration-300",
        size === 'small' && "md:col-span-1 md:row-span-1",
        size === 'medium' && "md:col-span-1 md:row-span-1",
        size === 'large' && "md:col-span-2 md:row-span-2",
        size === 'wide' && "md:col-span-2 md:row-span-1",
        size === 'tall' && "md:col-span-1 md:row-span-2",
        className
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}