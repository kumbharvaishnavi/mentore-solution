import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Briefcase, PlayCircle } from 'lucide-react';

const WhyCourse = () => {
  const cards = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      desc: "Master AI tools for content creation, analytics & automation"
    },
    {
      icon: Code,
      title: "Real Projects",
      desc: "Build live campaigns with real clients & budgets"
    },
    {
      icon: Briefcase,
      title: "Freelancing Ready",
      desc: "Get job-ready with portfolio & client acquisition strategies"
    },
    {
      icon: PlayCircle,
      title: "100% Practical",
      desc: "No boring theory - only hands-on training"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-dark to-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#5ea50120_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.h2 
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose This Course?
        </motion.h2>
        <motion.p 
          className="text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your career with cutting-edge AI + Digital Marketing skills
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="glass p-8 rounded-3xl hover:bg-primary/10 cursor-pointer group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(94, 165, 1, 0.25)" 
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <card.icon className="w-10 h-10 text-black" />
            </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {card.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyCourse;