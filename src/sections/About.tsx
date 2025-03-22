'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Code2, Gamepad, BookOpen, Coffee, Laptop, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SearchResult {
  title: string;
  link: string;
  description: string;
  type: 'profile' | 'interest';
  icon?: JSX.Element;
}

const searchResults: SearchResult[] = [
  {
    title: 'Aadithya Krishnan P - Web Developer | Kitchener, Ontario',
    link: 'https://linkedin.com/in/aadithya-krishnan-p',
    description: 'Front-End Developer skilled in React.js and the MERN stack. Creating dynamic, high-performance web applications with modern technologies.',
    type: 'profile'
  },
  {
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    title: 'Coding Adventures',
    link: '#coding',
    description: 'Building side projects and exploring new technologies in my free time',
    type: 'interest'
  },
  {
    icon: <Gamepad className="w-5 h-5 text-purple-400" />,
    title: 'Anime & Gaming',
    link: '#gaming',
    description: 'Enjoying anime series and playing video games to unwind in free time',
    type: 'interest'
  },
  {
    icon: <BookOpen className="w-5 h-5 text-pink-400" />,
    title: 'Learning Journey',
    link: '#education',
    description: 'Currently pursuing BTech in Computer Science and Engineering',
    type: 'interest'
  },
  {
    icon: <Coffee className="w-5 h-5 text-amber-400" />,
    title: 'Coffee & Code',
    link: '#work',
    description: 'Turning caffeine into code while working on freelance projects',
    type: 'interest'
  },
  {
    icon: <Laptop className="w-5 h-5 text-emerald-400" />,
    title: 'Tech Enthusiast',
    link: '#tech',
    description: 'Always excited to learn and experiment with cutting-edge technologies',
    type: 'interest'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    title: 'Creative Coder',
    link: '#creative',
    description: 'Blending creativity with technical expertise, I craft user-friendly solutions that are both functional and visually engaging',
    type: 'interest'
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-full border border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-white/70" />
              <div className="flex-1">
                <div className="text-lg text-white/90 font-medium">
                  Aadithya Krishnan P
                  <span className="animate-blink">|</span>
                </div>
                <div className="text-sm text-white/50">
                  Web Developer • Kitchener, Ontario, Canada
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-8">
          {/* Profile Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-white/70">Kitchener, Ontario</span>
                  <Briefcase className="w-4 h-4 text-purple-400 ml-2" />
                  <span className="text-white/70">Web Developer</span>
                </div>
                <p className="text-white/90 text-lg mb-4">
                As a final-year PG Diploma student in Web Design and Development at Conestoga College, I&apos;m actively seeking full-time opportunities and freelance projects. With a strong foundation in full-stack web development, I&apos;m passionate about building user-centric digital experiences and scalable solutions. 
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interest Results */}
          <div className="grid gap-4 md:grid-cols-2">
            {searchResults.slice(1).map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition duration-300 group-hover:opacity-75" />
                <div>
                  <div className="relative flex items-start gap-4 rounded-xl bg-white/5 backdrop-blur-lg p-4 transition duration-300 group-hover:bg-white/10">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {result.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-white/90">{result.title}</h3>
                        {/* <ExternalLink className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      </div>
                      <p className="text-sm text-white/70">{result.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
