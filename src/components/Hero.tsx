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
          <span className="text-muted-foreground font-normal">Hey there, I'm </span>
          <motion.span 
            className="font-semibold text-foreground relative cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            Chester
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </motion.span>
          <span className="text-muted-foreground font-normal"> 👋 Welcome to my </span>
          <span className="font-semibold text-foreground">digital garden</span>
          <span className="text-muted-foreground font-normal"> 🌱 I like building </span>
          <span className="font-semibold text-foreground">things</span>
          <span className="text-muted-foreground font-normal">, and I'm currently helping to build </span>
          <motion.span 
            className="font-semibold text-foreground relative cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            Mobbin
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.span>
          <span className="text-muted-foreground font-normal">.</span>
        </motion.h1>
        
        <motion.p 
          className="text-2xl font-crimson leading-relaxed mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-muted-foreground font-normal">In my free time, I enjoy brewing </span>
          <span className="font-semibold text-foreground">coffee</span>
          <span className="text-muted-foreground font-normal">, tending to my </span>
          <span className="font-semibold text-foreground">plants</span>
          <span className="text-muted-foreground font-normal"> and </span>
          <span className="font-semibold text-foreground">climbing</span>
          <span className="text-muted-foreground font-normal"> (plastic) rocks.</span>
        </motion.p>
        
        <motion.p 
          className="text-2xl font-crimson leading-relaxed mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-muted-foreground font-normal">I do some </span>
          <span className="font-semibold text-foreground">reading</span>
          <span className="text-muted-foreground font-normal"> and </span>
          <span className="font-semibold text-foreground">writing</span>
          <span className="text-muted-foreground font-normal"> as well, albeit not as consistently, but I'm working on being better at that.</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
