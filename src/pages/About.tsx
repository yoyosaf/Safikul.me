import React from 'react';
import { motion } from 'motion/react';
import { SITE_DATA, SKILLS } from '../constants';
import SkillBar from '../components/SkillBar';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-primary/20">
              <img 
                src={SITE_DATA.profilePhoto} 
                alt={SITE_DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block">
              <span className="block text-5xl font-black text-white leading-none mb-1">{SITE_DATA.yearsOfExperience}+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              I'M {SITE_DATA.name.toUpperCase()}, A <span className="text-primary">STORYTELLER</span> AT HEART.
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              {SITE_DATA.bio}
            </p>
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              My journey in video editing started with a passion for cinema and a curiosity for how rhythm can influence emotion. Today, I work with top brands and creators to deliver content that doesn't just look good, but performs exceptionally well.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-2">Location</h4>
                <p className="text-white">Remote / Worldwide</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Specialty</h4>
                <p className="text-white">Cinematic Storytelling</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-display font-bold mb-12">TECHNICAL SKILLS</h2>
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-12">TOOLS I USE</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {SITE_DATA.tools.map((tool) => (
                <div key={tool.name} className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                  <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
