import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Image, Video, BarChart } from 'lucide-react';

const AiContent = () => {
  const aiSteps = [
    { icon: Brain, title: "Prompt Engineering", desc: "Master AI conversations" },
    { icon: Zap, title: "AI Content Planning", desc: "Automated strategies" },
    { icon: Image, title: "AI Captions & Hooks", desc: "Viral copy generator" },
    { icon: Video, title: "AI Graphic Design", desc: "Canva + Midjourney" },
    { icon: Video, title: "AI Reels Automation", desc: "InVideo + CapCut" },
    { icon: BarChart, title: "AI Analytics", desc: "Predictive insights" }
  ];

  return (
    <section id="ai" className="py-32 px-6 bg-gradient-to-b from-black/50 to-dark relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Complete AI Content Mastery
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Social Media & Beyond - Generate 10x content with AI automation
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`glass p-8 rounded-3xl hover:bg-primary/10 cursor-pointer relative z-10 group-hover:scale-105 transition-all duration-300 ${
                  idx % 2 === 0 ? 'md:translate-x-12' : 'md:-translate-x-12 md:col-start-2'
                }`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <step.icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </div>
                
                {/* Node */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full shadow-glow animate-pulse"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiContent;