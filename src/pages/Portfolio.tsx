import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            My Work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            SELECTED <span className="text-primary">PROJECTS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            Explore my portfolio of cinematic edits, commercial ads, and high-performance YouTube content.
          </motion.p>
        </div>

        <PortfolioGrid projects={PROJECTS} />
      </div>
    </div>
  );
}
