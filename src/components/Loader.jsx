import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return prev;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-dark to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-[float_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-[float_4s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-12"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-4xl font-bold text-black">AI</div>
          </div>
          <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mentore Solution
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto bg-white/10 rounded-full h-3 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-glow"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <div className="text-2xl font-bold mt-4 text-primary">{Math.round(progress)}%</div>

        <motion.div
          className="mt-12 text-xl text-white/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading AI Marketing Mastery...
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;