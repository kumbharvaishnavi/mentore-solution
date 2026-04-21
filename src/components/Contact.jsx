import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your digital marketing journey?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-3xl hover:bg-primary/10 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Call Us</h3>
                  <a 
                    href="tel:+919881922922" 
                    className="text-xl font-semibold hover:text-primary transition-colors"
                  >
                    +91 98819 22922
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl hover:bg-primary/10 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Visit Us</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    1st floor, opp. Matoshree bungalow,<br/>
                    Mavale Basti, Hingne Budrukh,<br/>
                    Karvenagar, Vandevi, Pune,<br/>
                    Maharashtra 411052
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.instagram.com/mentore_solution/"
                target="_blank"
                className="glass p-4 rounded-2xl hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all flex items-center space-x-3"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.mentoresolution.com"
                target="_blank"
                className="glass p-4 rounded-2xl hover:bg-primary/20 transition-all flex items-center space-x-3"
              >
                <Globe className="w-6 h-6" />
                <span>Website</span>
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="glass rounded-3xl overflow-hidden h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.682486953109!2d73.8167!3d18.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI4JzAwLjIiTiA3M8KwNDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mentore Solution Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;