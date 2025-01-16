import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
      onClick={() => window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })}
    >
      {/* Text */}
      <motion.span 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="text-sm text-white/80 tracking-wider font-medium uppercase"
      >
        Scroll Down
      </motion.span>

      {/* Animated Container */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-12 h-12 rounded-full border-2 border-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="w-8 h-8 rounded-full border-2 border-white/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Center Icon */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent blur-xl -z-10" />
    </motion.div>
  );
};