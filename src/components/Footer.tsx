
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="mt-32 py-12 border-t border-border/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <motion.div 
            className="flex items-center space-x-2 text-muted-foreground text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>🌱</span>
            <span>Planted by Chester</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
