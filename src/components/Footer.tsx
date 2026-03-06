import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Linkedin, Film, Mail } from 'lucide-react';
import { SITE_DATA } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Film className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              CINEMATIC<span className="text-primary">CUT</span>
            </span>
          </Link>
          <p className="text-text-muted max-w-md mb-6">
            {SITE_DATA.bio}
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE_DATA.socials.youtube} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href={SITE_DATA.socials.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SITE_DATA.socials.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={SITE_DATA.socials.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-text-muted">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-text-muted">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>{SITE_DATA.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <Film className="w-5 h-5 text-primary" />
              <span>Available for Freelance</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} CinematicCut. All rights reserved.</p>
      </div>
    </footer>
  );
}
