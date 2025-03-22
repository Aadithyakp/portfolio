'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import '../styles/navbar.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience & Project', href: '#work-and-skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'py-4' : 'py-6'}`}>
      {/* Background blur effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          hasScrolled ? 'bg-[rgb(12,12,27)]/90 backdrop-blur-lg' : 'bg-[rgb(12,12,27)]/60 backdrop-blur-md'
        } border-b border-white/5`}
      />

      {/* Header content */}
      <div className="container  relative z-10">
        <nav className="navbar flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
          <Image 
  src="/images/aadi.png" 
  alt="Aadi Logo" 
  width={80} 
  height={80} 
  className="navbar-logo w-[60px] h-auto object-contain"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://github.com/Aadithyakp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4 bg-[rgb(12,12,27)]/95 backdrop-blur-lg border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
