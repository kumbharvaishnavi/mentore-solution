import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const InstagramShowcase = () => {
  // Mock Instagram posts - replace with real API
  const posts = [
    { id: 1, src: "https://via.placeholder.com/400x500/8338ec/E6E6FA?text=📈+Marketing+Tip", caption: "AI Content Hack 🔥" },
    { id: 2, src: "https://via.placeholder.com/400x500/E11D23/FFFFFF?text=🚀+Reels+Strategy", caption: "Viral Reels Formula" },
    { id: 3, src: "https://via.placeholder.com/400x500/5ea501/FFFFFF?text=💰+Freelancing", caption: "First Client Guide" },
    { id: 4, src: "https://via.placeholder.com/400x500/FF6B35/FFFFFF?text=📱+Instagram+Growth", caption: "10x Followers" },
    { id: 5, src: "https://via.placeholder.com/400x500/4ECDC4/FFFFFF?text=🔥+Ad+Copy", caption: "Conversion Copy" },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-dark/50 to-black relative">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center space-x-3 mb-8 p-4 glass rounded-full">
            <Instagram className="w-8 h-8 text-pink-500" />
            <span className="font-bold text-xl">@mentore_solution</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
            Follow Us Daily
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Marketing Tips • AI Hacks • Case Studies • Freelancing
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/mentore_solution/"
              target="_blank"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-transparent hover:border-primary/50 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <img 
                src={post.src} 
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold text-white mb-2">{post.caption}</p>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <span>View Post</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;