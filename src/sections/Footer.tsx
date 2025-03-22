'use client';

import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import '../styles/navbar.css'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
          <Image 
  src="/images/aadi.png" 
  alt="Aadi Logo" 
  width={80} 
  height={80} 
  className="navbar-logo w-[60px] h-auto object-contain"
/>
          </Link>
            </div>
            <p className="text-white/70 text-sm">
              Crafting digital experiences that matter
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Aadithyakp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aadithya-krishnan-p-515818273/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
