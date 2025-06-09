
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <motion.h1 
          className="text-5xl font-crimson leading-relaxed text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hey there, I'm <span className="font-semibold">Chester</span> 👋 Welcome to my{' '}
          <span className="font-semibold">digital garden</span> 🌱 I like building{' '}
          <span className="font-semibold">things</span>, and I'm currently helping to build{' '}
          <motion.span 
            className="font-semibold underline decoration-blue-400 decoration-wavy"
            whileHover={{ scale: 1.05 }}
          >
            Mobbin
          </motion.span>.
        </motion.h1>
        
        <motion.p 
          className="text-2xl font-crimson leading-relaxed text-foreground mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          In my free time, I enjoy brewing <span className="font-semibold">coffee</span>, tending to my{' '}
          <span className="font-semibold">plants</span> and <span className="font-semibold">climbing</span>{' '}
          (plastic) rocks.
        </motion.p>
        
        <motion.p 
          className="text-2xl font-crimson leading-relaxed text-foreground mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I do some <span className="font-semibold">reading</span> and{' '}
          <span className="font-semibold">writing</span> as well, albeit not as consistently, but I'm working on being better at that.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
