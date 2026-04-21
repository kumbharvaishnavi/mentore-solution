import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <motion.div 
            className="order-3 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a href="https://www.instagram.com/mentore_solution/" target="_blank" className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
                <Instagram className="w-8 h-8" />
              </a>
              <div className="text-center md:text-left">
                <div className="font-bold text-xl mb-1">Mentore Solution</div>
                <div className="text-primary text-sm">AI Digital Marketing</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-3 text-white/70">
              <a href="#hero" className="hover:text-primary transition-colors block">Home</a>
              <a href="#modules" className="hover:text-primary transition-colors block">Course</a>
              <a href="#ai" className="hover:text-primary transition-colors block">AI Mastery</a>
              <a href="#contact" className="hover:text-primary transition-colors block">Contact</a>
            </div>
          </motion.div>

          <motion.div 
            className="order-2 md:order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-white/70">
              <a href="tel:+919881922922" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98819 22922</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">Pune, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Copyright className="w-4 h-4" />
              <span>2024 Mentore Solution. All rights reserved.</span>
            </div>
            <a href="https://www.mentoresolution.com" className="hover:text-primary transition-colors font-medium">
              www.mentoresolution.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;