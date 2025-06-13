
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Coffee, Mountain, BookOpen, Code, Camera, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-12">
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
          <span className="text-muted-foreground font-normal"> 🌱</span>
        </motion.h1>
        
        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Main Introduction Card */}
          <motion.div 
            className="col-span-5 row-span-3 bg-card border border-border/30 rounded-2xl p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-xl font-crimson text-foreground mb-3">Building things at</h3>
              <motion.span 
                className="text-2xl font-semibold text-foreground relative cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                Mobbin
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground self-end" />
          </motion.div>

          {/* Coffee Card */}
          <motion.div 
            className="col-span-3 row-span-2 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 border border-border/30 rounded-2xl p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Coffee className="w-8 h-8 text-amber-600" />
            <div>
              <h4 className="font-semibold text-foreground">Coffee</h4>
              <p className="text-sm text-muted-foreground">Brewing enthusiast</p>
            </div>
          </motion.div>

          {/* Climbing Card */}
          <motion.div 
            className="col-span-4 row-span-2 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 border border-border/30 rounded-2xl p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Mountain className="w-8 h-8 text-emerald-600" />
            <div>
              <h4 className="font-semibold text-foreground">Rock Climbing</h4>
              <p className="text-sm text-muted-foreground">Plastic rocks specialist</p>
            </div>
          </motion.div>

          {/* Reading Card */}
          <motion.div 
            className="col-span-3 row-span-3 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 border border-border/30 rounded-2xl p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <BookOpen className="w-8 h-8 text-purple-600" />
            <div>
              <h4 className="font-semibold text-foreground">Reading</h4>
              <p className="text-sm text-muted-foreground">Working on consistency</p>
            </div>
          </motion.div>

          {/* Plants Card */}
          <motion.div 
            className="col-span-2 row-span-2 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-border/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl mb-2">🌱</span>
            <h4 className="font-semibold text-foreground text-sm">Plants</h4>
          </motion.div>

          {/* Code Card */}
          <motion.div 
            className="col-span-4 row-span-1 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-border/30 rounded-2xl p-4 flex items-center justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold text-foreground">Building things</h4>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>

          {/* Music Card */}
          <motion.div 
            className="col-span-3 row-span-1 bg-gradient-to-r from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 border border-border/30 rounded-2xl p-4 flex items-center justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <Headphones className="w-6 h-6 text-pink-600" />
              <h4 className="font-semibold text-foreground">Music</h4>
            </div>
          </motion.div>

          {/* Writing Card */}
          <motion.div 
            className="col-span-5 row-span-1 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20 border border-border/30 rounded-2xl p-4 flex items-center justify-between"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h4 className="font-semibold text-foreground">Writing</h4>
              <p className="text-xs text-muted-foreground">Thoughts and reflections</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
