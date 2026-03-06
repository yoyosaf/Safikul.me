import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Youtube, Instagram, Twitter, Linkedin, Send, MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../constants';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              LET'S CREATE SOMETHING <span className="text-primary">EPIC</span>.
            </h1>
            <p className="text-xl text-text-muted mb-12">
              Have a project in mind? I'm always open to discussing new ideas, creative collaborations, or opportunities to be part of your vision.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Me</h4>
                  <p className="text-text-muted">{SITE_DATA.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-text-muted">{SITE_DATA.whatsapp}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href={SITE_DATA.socials.youtube} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                <Youtube size={20} />
              </a>
              <a href={SITE_DATA.socials.instagram} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                <Instagram size={20} />
              </a>
              <a href={SITE_DATA.socials.twitter} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                <Twitter size={20} />
              </a>
              <a href={SITE_DATA.socials.linkedin} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
