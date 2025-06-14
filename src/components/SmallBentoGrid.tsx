import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SmallBentoItem {
  title: string;
  content?: string;
  icon?: React.ReactNode;
  className?: string;
  link?: string;
  cta?: string;
  color?: string;
}

interface SmallBentoGridProps {
  items: SmallBentoItem[];
  className?: string;
}

export const SmallBentoGrid: React.FC<SmallBentoGridProps> = ({ items, className }) => {
  return (
    <div className={cn("grid grid-cols-3 gap-3 py-4", className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={cn(
            "row-span-1 rounded-xl border border-border/30 bg-card p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between",
            item.className,
            item.color
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          whileHover={{ y: -5, scale: 1.01 }}
        >
          <div>
            {item.icon && <div className="mb-2">{item.icon}</div>}
            <h3 className="font-canela text-base font-medium mb-1">{item.title}</h3>
            {item.content && <p className="text-xs text-muted-foreground">{item.content}</p>}
          </div>
          {(item.link || item.cta) && (
            <div className="flex items-center justify-between mt-3">
              {item.cta && <span className="text-xs">{item.cta}</span>}
              <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};