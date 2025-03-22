'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Code2, BookOpen, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  const techStack = [
    { name: 'React', icon: '/icons/react.svg', color: '#61DAFB' },
    { name: 'Redux', icon: '/icons/redux.svg', color: '#764ABC' },
    { name: 'HTML5', icon: '/icons/html5.svg', color: '#E34F26' },
    { name: 'CSS3', icon: '/icons/css3.svg', color: '#264DE4' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', color: '#F7DF1E' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg', color: '#563D7C' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg', color: '#38B2AC' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', color: '#339933' },
    { name: 'GitHub', icon: '/icons/github.svg', color: '#ffffff' }
  ];

  const displayTechStack = [...techStack, ...techStack, ...techStack];

  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-300" />,
      title: "Clean Code",
      description: "Writing maintainable and well-documented code following best practices"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-300" />,
      title: "Continuous Learning",
      description: "Actively learning new technologies and improving my development skills"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-pink-300" />,
      title: "Modern UI/UX",
      description: "Creating responsive and user-friendly web experiences"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(12, 12, 27)"
        gradientBackgroundEnd="rgb(19, 19, 35)"
        firstColor="89, 65, 255"
        secondColor="238, 100, 255"
        thirdColor="64, 221, 255"
        fourthColor="100, 85, 255"
        fifthColor="160, 100, 255"
        pointerColor="140, 100, 255"
        size="150%"
        blendingValue="lighten"
        className="absolute inset-0 !h-full !w-full opacity-60"
        containerClassName="!absolute !h-full !w-full !top-0 !left-0"
        interactive={true}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Main Content - Spans 7 columns */}
          <div className="md:col-span-7 space-y-8 bg-[rgba(12,12,27,0.7)] backdrop-blur-lg rounded-2xl border border-white/10 p-8 bento-card animate-slide-right">
            <div className="text-left">
              <h2 className="text-sm md:text-base text-indigo-300 font-semibold tracking-wider uppercase mb-4">
                Web Developer & Designer
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Crafting Digital Experiences That Matter
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Passionate about creating modern web applications with clean code and great user experiences. 
                Always eager to learn and grow in the ever-evolving world of web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="#work-and-skills"
                className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column - Spans 5 columns */}
          <div className="md:col-span-5 space-y-6">
            {/* Tech Stack Grid */}
            <div className="bg-[rgba(12,12,27,0.7)] backdrop-blur-lg rounded-2xl border border-white/10 p-6 bento-card animate-slide-up overflow-hidden">
              <h3 className="text-sm text-white/90 uppercase tracking-wider mb-6 font-medium">
                Tech Stack
              </h3>
              <div className="marquee-container marquee-pause-hover">
                <div className="flex gap-4 marquee">
                  {displayTechStack.map((tech, index) => (
                    <div 
                      key={`${tech.name}-${index}`}
                      className="group relative w-12 h-12 flex-shrink-0 hover:-translate-y-1 hover:scale-110 transition-all duration-200"
                      title={tech.name}
                    >
                      <div 
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 p-3
                        opacity-90 group-hover:opacity-100 group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-200"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className={`${tech.name === 'GitHub' ? 'invert' : ''} transition-transform duration-200`}
                            style={{
                              maxWidth: '100%',
                              height: 'auto'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developer Highlights */}
            <div className="bg-[rgba(12,12,27,0.7)] backdrop-blur-lg rounded-2xl border border-white/10 p-6 bento-card animate-slide-up">
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={highlight.title}
                    className="flex items-start gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-sm text-white/90">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
