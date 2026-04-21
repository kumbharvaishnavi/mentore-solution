import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Search, Brain, Briefcase, Award } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Play, title: "Live Campaign Training", desc: "Real ads with real money" },
    { icon: Target, title: "Meta & Google Ads", desc: "Certified ad specialist" },
    { icon: Search, title: "SEO Optimization", desc: "Rank #1 on Google" },
    { icon: Brain, title: "AI Tools Training", desc: "ChatGPT + Midjourney + more" },
    { icon: Briefcase, title: "Freelancing Guidance", desc: "Get your first client" },
    { icon: Award, title: "Certification", desc: "Industry recognized cert" }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            What You'll Get
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Complete digital marketing transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl h-80 bg-gradient-to-br from-glass to-transparent p-8 hover:bg-primary/10 cursor-pointer"
              initial={{ opacity: 0, rotateX: -10 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              whileHover={{ rotateX: 5, rotateY: 5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <feature.icon className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;