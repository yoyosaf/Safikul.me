import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { SITE_DATA, PROJECTS, SERVICES, TESTIMONIALS } from '../constants';
import PortfolioGrid from '../components/PortfolioGrid';
import * as Icons from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for new projects
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-none"
          >
            PROFESSIONAL <br />
            <span className="text-primary">VIDEO EDITOR</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
          >
            {SITE_DATA.bio}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              View Portfolio <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Showreel Section */}
      <section className="py-24 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">MY SHOWREEL</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group">
            <iframe
              src={SITE_DATA.showreelUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Storytelling'].map((skill, i) => (
            <motion.div 
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5 group hover:bg-primary transition-colors">
                <Icons.CheckCircle className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">FEATURED WORK</h2>
              <p className="text-text-muted max-w-md">A selection of my best projects across different categories.</p>
            </div>
            <Link to="/portfolio" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
          
          <PortfolioGrid projects={PROJECTS} limit={3} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CLIENT REVIEWS</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-8 relative">
                <Icons.Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12" />
                <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-text-muted uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
            READY TO BRING YOUR VISION TO LIFE?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform"
          >
            LET'S WORK TOGETHER
          </Link>
        </div>
      </section>
    </div>
  );
}
