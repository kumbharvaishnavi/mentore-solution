import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full animate-float animation-delay-2000 blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse" />
      </div>

      {/* Floating Charts & Icons */}
      <motion.div 
        className="absolute top-1/4 left-10 w-24 h-24"
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaChartLine className="w-full h-full text-primary glow-green animate-spin-slow" />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 right-20 w-16 h-16"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaFacebook className="w-full h-full text-blue-400 glow-green" />
      </motion.div>

      <motion.div 
        className="absolute top-1/3 right-32 w-12 h-12"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaInstagram className="w-full h-full text-pink-400 glow-red" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent mb-8 leading-tight"
        >
          AI Powered
          <br />
          <span className="text-primary glow-green">Social Media</span>
          <br />
          Marketing
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Complete Digital Marketing + AI Mastery Program
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link to="modules" smooth={true} duration={1000}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-[#6fc107] text-black px-12 py-6 rounded-full text-xl font-bold glow-green hover:glow-red ripple shadow-2xl"
            >
              Enroll Now 🚀
            </motion.button>
          </Link>
          
          <a href="tel:+919881922922" className="group">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-12 py-6 rounded-full text-xl font-bold hover:bg-primary hover:text-black glow-green group-hover:glow-red transition-all ripple"
            >
              <FaPhone className="inline mr-2 group-hover:animate-ping" />
              Call Now
            </motion.button>
          </a>
        </div>

        {/* AI Wave Animation */}
        <motion.div 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto glow-green"
        />
      </div>
    </section>
  );
};

export default Hero;