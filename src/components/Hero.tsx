
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Text content */}
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

        {/* Right side - Bento Grid */}
        <motion.div 
          className="grid grid-cols-6 grid-rows-6 gap-3 h-[600px] relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Design Spells Card */}
          <motion.div 
            className="col-span-3 row-span-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-4 border border-purple-200 dark:border-purple-700 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-xs text-muted-foreground mb-2">Projects • Design Spells</div>
            <h3 className="font-semibold text-lg mb-2">Design details that feel like magic.</h3>
            <div className="text-xs bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded-full inline-block">
              Magic ✨
            </div>
          </motion.div>

          {/* Small Climbing Card */}
          <motion.div 
            className="col-span-2 row-span-2 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-3 border border-orange-200 dark:border-orange-700 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🧗‍♂️</div>
              <div className="text-sm font-medium">Climbing</div>
              <div className="text-xs text-muted-foreground">(plastic) rocks</div>
            </div>
          </motion.div>

          {/* Coffee Card */}
          <motion.div 
            className="col-span-1 row-span-3 bg-gradient-to-b from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl p-2 border border-amber-200 dark:border-amber-700 shadow-sm flex flex-col items-center justify-center"
            whileHover={{ rotate: 3 }}
          >
            <div className="text-2xl mb-1">☕</div>
            <div className="text-xs font-medium text-center">Coffee</div>
          </motion.div>

          {/* Billbreak App Card */}
          <motion.div 
            className="col-span-2 row-span-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-xs text-muted-foreground mb-2">Projects • Billbreak</div>
            <div className="bg-black rounded-lg p-2 mb-2">
              <div className="bg-white rounded-md p-2 text-xs">
                <div className="font-medium mb-1">Let's Billbreak</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Paul</span>
                    <span>$4.13</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Barmen</span>
                    <span>$1.51</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Plants Card */}
          <motion.div 
            className="col-span-2 row-span-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-3 border border-green-200 dark:border-green-700 shadow-sm flex items-center justify-center"
            whileHover={{ y: -2 }}
          >
            <span className="text-lg mr-2">🌱</span>
            <span className="text-sm font-medium">Plants</span>
          </motion.div>

          {/* Reading/Writing Card */}
          <motion.div 
            className="col-span-3 row-span-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-3 border border-blue-200 dark:border-blue-700 shadow-sm flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-lg mr-2">📚</span>
            <span className="text-sm font-medium">Reading & Writing</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
