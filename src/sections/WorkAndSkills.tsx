'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Code2, Server, Wrench, Github, ExternalLink, Calendar, Eye, Search, ArrowLeft, ArrowRight, RotateCw, Briefcase, Code } from 'lucide-react';

// Import existing data from Skills and Projects components
const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "Tailwind CSS", level: 90, color: "#38B2AC" }
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5 text-purple-400" />,
    items: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "PostgreSQL", level: 75, color: "#336791" },
      { name: "GraphQL", level: 80, color: "#E10098" }
    ]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    items: [
      { name: "Git", level: 85, color: "#F05032" },
      { name: "Docker", level: 75, color: "#2496ED" },
      { name: "AWS", level: 70, color: "#FF9900" },
      { name: "Linux", level: 80, color: "#FCC624" }
    ]
  }
];

const projects = [
  {
    id: 1,
    title: 'Gympal',
    description: 'A modern gym management system that simplifies member tracking, scheduling, and payments. Designed for seamless user experience with intuitive dashboards and automation features.',
    image: '/images/projects/gp1.png',
    tags: ['React', 'Javascript', 'MongoDB', 'Stripe'],
    featured: true,
    date: 'Feb 2025',
    links: {
      github: 'https://github.com/Aadithyakp/capstone',
    }
  },
  {
    id: 2,
    title: 'Stuffwadrobe',
    description: 'An online fashion retail platform offering exclusive deals and a personalized shopping experience. Features a sleek interface and seamless browsing for fashion enthusiasts.',
    image: '/images/projects/sw1.png',
    tags: ['Typesc', 'SCSS',  'Stripe', 'MongoDB'],
    featured: true,
    date: 'Feb 2022',
    links: {
      github: 'https://github.com/Aadithyakp/stuffwadrobe',
    }
  },
  {
    id: 3,
    title: 'DriveTest Booking',
    description: 'DriveTest Booking: Developed a DriveTest booking platform that allows users to schedule G2/G driving tests seamlessly, built using React for a smooth and responsive user experience.',
    image: '/images/projects/dt1.png',
    tags: ['React', 'MongoDB'],
    date: 'June 2024',
    links: {
      github: 'https://github.com/Aadithyakp/project/tree/master',
    }
  },
  {
    id: 4,
    title: 'AutoClub',
    description: 'Built a Car Rental platform that simplifies vehicle booking, featuring a modern UI/UX with accessibility enhancements and API integration using React.',
    image: '/images/projects/cw.png',
    tags: ['NextJS', 'TS', 'API', 'UI/UX'],
    date: 'Dec 2024',
    links: {
      github: 'https://github.com/Aadithyakp/autoclub_showcase',
    }
  }
];

const StarRating = ({ level }: { level: number }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => {
    const filled = (level / 100) * 5 > index;
    return (
      <div key={index} className="relative inline-block w-4 h-4">
        <Star
          className={`absolute inset-0 w-full h-full ${
            filled ? "text-amber-400" : "text-white/10"
          }`}
          fill={filled ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      </div>
    );
  });

  return (
    <div className="flex items-center shrink-0">
      <div className="flex -space-x-0.5">
        {stars}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 shrink-0">
            {skill.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-space-grotesk font-semibold tracking-tight text-white/90 truncate">
            {skill.category}
          </h3>
        </div>
        <div className="space-y-3">
          {skill.items.map((item: any) => (
            <div key={item.name} className="grid grid-cols-[1fr,auto] items-center gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white/70 text-sm font-medium tracking-wide">
                  {item.name}
                </span>
              </div>
              <StarRating level={item.level} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Link href={project.links.live || '#'} className="group/title">
              <h3 className="text-xl font-medium text-white/90 mb-2 flex items-center gap-2">
                {project.title}
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 transition-all" />
              </h3>
            </Link>
            {/* <div className="flex items-center gap-4 text-sm text-white/50">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {project.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {project.views.toLocaleString()} views
              </div>
            </div> */}
          </div>
        </div>
        <div className="p-6">
          <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                <Github className="w-4 h-4" />
                View Repository
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkAndSkills = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'projects'>('projects');

  return (
    <section id="work-and-skills" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Browser UI */}
          <div className="rounded-t-xl bg-white/5 backdrop-blur-lg border border-white/10 p-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-4 px-4 py-1 rounded-md bg-white/5">
                  <ArrowLeft className="w-4 h-4 text-white/40" />
                  <ArrowRight className="w-4 h-4 text-white/40" />
                  <RotateCw className="w-4 h-4 text-white/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="rounded-b-xl bg-white/5 backdrop-blur-lg border-x border-b border-white/10">
            {/* Search Bar */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-white/70" />
                <div className="flex-1">
                  <div className="text-lg font-space-grotesk font-medium tracking-tight text-white/90">
                    {activeTab === 'skills' ? 'technical expertise and proficiency' : 'featured development projects and work'}
                    <span className="animate-blink">|</span>
                  </div>
                  <div className="text-sm text-white/50">
                    {activeTab === 'skills' ? 'About 12 results (0.25 seconds)' : 'About 4 results (0.18 seconds)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10">
              <div className="flex gap-8 px-8">
                
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`flex items-center gap-2 py-4 text-sm font-medium tracking-wide transition-colors ${
                    activeTab === 'projects'
                      ? 'border-indigo-400 text-indigo-400 font-space-grotesk'
                      : 'border-transparent text-white/50 hover:text-white/70'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Featured Projects
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex items-center gap-2 py-4 text-sm font-medium tracking-wide transition-colors ${
                    activeTab === 'skills'
                      ? 'border-indigo-400 text-indigo-400 font-space-grotesk'
                      : 'border-transparent text-white/50 hover:text-white/70'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  Technical Expertise
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'skills' ? (
                <div className="grid gap-6 md:grid-cols-3">
                  {skills.map((skill, index) => (
                    <SkillCard key={skill.category} skill={skill} index={index} />
                  ))}
                </div>
              ) : (
                <>
                  <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                  >
                    <Link
                      href="https://github.com/Aadithyakp?tab=repositories"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-white/90 font-medium">Explore All Projects</span>
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAndSkills;
