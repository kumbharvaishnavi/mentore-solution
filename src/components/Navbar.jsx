import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaPhone, FaBars } from 'react-icons/fa';

const Navbar = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'why', label: 'Why Us' },
    { id: 'modules', label: 'Modules' },
    { id: 'ai', label: 'AI Mastery' },
    { id: 'features', label: 'Features' },
    { id: 'contact', label: 'Contact' }
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 glass px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-all"
        >
          Mentore Solution
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className={`relative group cursor-pointer font-medium transition-all ${
                activeSection === item.id 
                  ? 'text-primary glow-green' 
                  : 'hover:text-primary'
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}
              />
            </Link>
          ))}
          <a 
            href="tel:+919881922922"
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-semibold hover:scale-105 glow-green hover:glow-red transition-all ripple"
          >
            <FaPhone className="inline mr-2" /> Call Now
          </a>
        </div>

        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 p-6 rounded-xl backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`block py-3 font-medium hover:text-primary transition-all ${
                  activeSection === item.id ? 'text-primary glow-green' : ''
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="tel:+919881922922"
              className="block mt-4 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold text-center hover:scale-105 glow-green transition-all ripple"
            >
              Call Now +91 98819 22922
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;