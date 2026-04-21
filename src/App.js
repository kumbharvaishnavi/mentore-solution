import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyCourse from './components/WhyCourse';
import CourseModules from './components/CourseModules';
import AIContentMastery from './components/AIContentMastery';
import Features from './components/Features';
import InstagramShowcase from './components/InstagramShowcase';
import StrongCTA from './components/StrongCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 500);
      
      const sections = ['hero', 'why', 'modules', 'ai', 'features', 'insta', 'cta', 'contact'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black min-h-screen">
      {/* Cursor Glow Effect */}
      <div className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full mix-blend-difference z-50 pointer-events-none glow-green" 
           id="cursor-glow" />

      <ScrollProgress />
      
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <WhyCourse />
        <CourseModules />
        <AIContentMastery />
        <Features />
        <InstagramShowcase />
        <StrongCTA />
        <Contact />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-primary hover:bg-accent text-white rounded-full shadow-2xl glow-green hover:glow-red flex items-center justify-center ripple"
            >
              <FaArrowUp />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;