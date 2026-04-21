import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Zap, Rocket } from 'lucide-react';

const StrongCta = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-accent via-primary to-accent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl mb-8 shadow-2xl">
            <Rocket className="w-12 h-12 text-accent animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent leading-tight">
            Start Your Digital Marketing
            <br />
            <span className="block animate-pulse text-6xl md:text-8xl">Career Today 🚀</span>
          </h2>
          
          <p className="text-2xl mb-12 max-w-2xl mx-auto text-black/90 font-semibold">
            Learn AI + Marketing + Earn Online
            <br />
            <span className="text-xl text-black/70 block mt-2">Join 500+ successful students</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="tel:+919881922922"
              className="ripple bg-black text-white px-12 py-6 rounded-3xl text-xl font-bold flex items-center space-x-3 shadow-2xl hover:shadow-glow hover:scale-105 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <span>Call Now: 98819 22922</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-white text-black px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-glow hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now →
            </motion.a>
          </div>

          {/* Urgency Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-12 border-t-2 border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">24/7</div>
              <div className="text-lg text-black/80">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">7 Days</div>
              <div className="text-lg text-black/80">Refund</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">Lifetime</div>
              <div className="text-lg text-black/80">Access</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-1">₹50K+</div>
              <div className="text-lg text-black/80">Avg Earnings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrongCta;