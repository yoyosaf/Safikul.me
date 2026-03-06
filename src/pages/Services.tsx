import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Instagram, Film, Video, Volume2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

const ICON_MAP: Record<string, any> = {
  Youtube,
  Instagram,
  Film,
  Video,
  Volume2
};

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            My Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            SERVICES I <span className="text-primary">OFFER</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            I provide end-to-end video post-production services tailored to your specific needs and platform requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Video;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 group hover:bg-primary transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all">
                  <Icon className="text-primary w-8 h-8 group-hover:text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-text-muted mb-8 group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">MY WORKFLOW</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We discuss your vision, goals, and requirements." },
              { step: "02", title: "Editing", desc: "I craft the first draft focusing on story and rhythm." },
              { step: "03", title: "Refining", desc: "Color grading, sound design, and revisions." },
              { step: "04", title: "Delivery", desc: "Final high-quality export ready for publishing." }
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{item.step}</span>
                <h4 className="text-xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-text-muted relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
