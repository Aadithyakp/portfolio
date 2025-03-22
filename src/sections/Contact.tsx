'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Aadithyakp',
    color: 'hover:text-[#2da44e]',
    accountName: '@Aadithyakp'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/aadithya-krishnan-p-515818273/',
    color: 'hover:text-[#0a66c2]',
    accountName: '@aadithya-krishnan-p'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white/90 font-display tracking-tight mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="space-y-6">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white/90 mb-2">
                  Contact Information
                </h3>
                <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Kitchener, Ontario
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Response time: ~24 hours
                  </div>
                </div>
                <a
                  href="mailto:aadikrishnan36@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors duration-300"
                >
                  aadikrishnan36@gmail.com
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid gap-4 md:grid-cols-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition duration-300 group-hover:opacity-75" />
                <div className="relative flex items-start gap-4 rounded-xl bg-white/5 backdrop-blur-lg p-4 border border-white/10">
                  <div className={`p-3 rounded-lg bg-white/5 ${social.color} transition-colors duration-300`}>
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-white/90">{social.name}</h3>
                      <ArrowUpRight className="w-4 h-4 text-white/50 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </div>
                    <p className="text-sm text-white/50">
                      {social.accountName}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
