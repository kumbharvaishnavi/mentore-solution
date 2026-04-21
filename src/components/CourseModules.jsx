import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CourseModules = () => {
  const [openModules, setOpenModules] = useState([0, 1]);

  const modules = [
    {
      title: "Digital Marketing Basics",
      topics: ["Marketing Funnels", "Customer Journey", "ROI Calculation", "Business Models"]
    },
    {
      title: "Market Research",
      topics: ["Audience Analysis", "Competitor Research", "Keyword Research", "Trend Analysis"]
    },
    {
      title: "WordPress Website Building",
      topics: ["Domain & Hosting", "Theme Customization", "Plugins Setup", "Speed Optimization"]
    },
    {
      title: "SEO Mastery",
      topics: ["On-Page SEO", "Technical SEO", "Local SEO", "Link Building"]
    },
    {
      title: "Facebook Marketing",
      topics: ["Page Setup", "Organic Growth", "Paid Campaigns", "Messenger Marketing"]
    },
    {
      title: "Google Ads",
      topics: ["Search Ads", "Display Ads", "Shopping Ads", "Remarketing"]
    },
    {
      title: "Retargeting",
      topics: ["Pixel Setup", "Custom Audiences", "Lookalike Audiences", "Dynamic Ads"]
    },
    {
      title: "Google Analytics",
      topics: ["GA4 Setup", "Event Tracking", "Conversion Tracking", "Reports"]
    },
    {
      title: "Email Marketing",
      topics: ["Email Lists", "Campaign Setup", "Automation", "A/B Testing"]
    },
    {
      title: "Branding",
      topics: ["Brand Identity", "Visual Design", "Brand Voice", "Storytelling"]
    },
    {
      title: "Content Marketing",
      topics: ["Content Strategy", "Blog Writing", "Video Content", "Case Studies"]
    },
    {
      title: "Sales Psychology",
      topics: ["Buying Triggers", "Objection Handling", "Urgency Creation", "Trust Building"]
    },
    {
      title: "Copywriting",
      topics: ["Headline Formulas", "Sales Copy", "Social Media Copy", "Ad Copy"]
    },
    {
      title: "Customer Service",
      topics: ["Chat Support", "Email Support", "Feedback Systems", "Retention"]
    },
    {
      title: "Instagram Marketing",
      topics: ["Profile Optimization", "Content Strategy", "Reels Mastery", "Stories"]
    },
    {
      title: "YouTube Marketing",
      topics: ["Channel Setup", "Video SEO", "Thumbnail Design", "Growth Hacks"]
    },
    {
      title: "YouTube Ads",
      topics: ["Video Ads", "Discovery Ads", "Bumper Ads", "Scaling"]
    },
    {
      title: "Pinterest Marketing",
      topics: ["Pin Design", "Board Strategy", "Traffic Generation", "E-commerce"]
    },
    {
      title: "LinkedIn & Twitter Marketing",
      topics: ["Profile Optimization", "Content Strategy", "B2B Lead Gen", "Engagement"]
    },
    {
      title: "Freelancing",
      topics: ["Profile Setup", "Client Finding", "Pricing Strategy", "Contracts"]
    },
    {
      title: "Conclusion",
      topics: ["Portfolio Building", "Career Launch", "Scaling Business", "Next Steps"]
    }
  ];

  const toggleModule = (index) => {
    setOpenModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="modules" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Complete Course Modules
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            50+ modules covering everything from basics to advanced AI strategies
          </p>
        </motion.div>

        <div className="space-y-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent pr-4">
          {modules.map((module, idx) => (
            <motion.div
              key={module.title}
              className="glass rounded-2xl overflow-hidden hover:bg-primary/5 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleModule(idx)}
            >
              <div className="flex items-center justify-between p-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    openModules.includes(idx) 
                      ? 'bg-gradient-to-br from-primary to-accent text-black' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-2 rounded-full" />
                  </div>
                </div>
                {openModules.includes(idx) ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary/70 group-hover:text-primary" />
                )}
              </div>
              
              <AnimatePresence>
                {openModules.includes(idx) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 space-y-3">
                      {module.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="flex items-center space-x-3 group">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-white/80">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;