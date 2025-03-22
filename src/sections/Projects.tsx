// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, Calendar, Eye, Search, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   featured?: boolean;
//   date: string;
//   views: number;
//   links: {
//     github?: string;
//     live?: string;
//   };
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'Usable Query',
//     description: 'A revolutionary approach to data fetching that simplifies React Query integration with built-in caching and real-time updates.',
//     image: '/images/projects/usable-query.webp',
//     tags: ['React Query', 'TypeScript', 'Developer Tools'],
//     featured: true,
//     date: 'Mar 2025',
//     views: 1205,
//     links: {
//       github: 'https://github.com',
//       live: 'https://demo.com'
//     }
//   },
//   {
//     id: 2,
//     title: 'Empty Canvas',
//     description: 'Minimalist art gallery platform featuring immersive 3D artwork previews and virtual exhibition spaces.',
//     image: '/images/projects/empty-canvas.webp',
//     tags: ['Three.js', 'WebGL', 'Next.js'],
//     featured: true,
//     date: 'Feb 2025',
//     views: 856,
//     links: {
//       github: 'https://github.com',
//       live: 'https://demo.com'
//     }
//   },
//   {
//     id: 3,
//     title: 'Outbar Analytics',
//     description: 'Real-time analytics dashboard with AI-powered insights and predictive modeling capabilities.',
//     image: '/images/projects/outbar.webp',
//     tags: ['Machine Learning', 'D3.js', 'React'],
//     date: 'Jan 2025',
//     views: 642,
//     links: {
//       github: 'https://github.com',
//       live: 'https://demo.com'
//     }
//   },
//   {
//     id: 4,
//     title: 'Neural Design System',
//     description: 'A modern component library that adapts to user behavior and accessibility preferences.',
//     image: '/images/projects/neural.webp',
//     tags: ['React', 'Accessibility', 'UI/UX'],
//     date: 'Dec 2024',
//     views: 489,
//     links: {
//       github: 'https://github.com',
//       live: 'https://demo.com'
//     }
//   }
// ];

// const ProjectCard = ({ project }: { project: Project }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="h-full"
//     >
//       <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
//         <div className="relative aspect-video">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
//           <div className="absolute bottom-4 left-4 right-4">
//             <Link href={project.links.live || '#'} className="group/title">
//               <h3 className="text-xl font-medium text-white/90 mb-2 flex items-center gap-2">
//                 {project.title}
//                 <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 transition-all" />
//               </h3>
//             </Link>
//             <div className="flex items-center gap-4 text-sm text-white/50">
//               <div className="flex items-center gap-1.5">
//                 <Calendar className="w-4 h-4" />
//                 {project.date}
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Eye className="w-4 h-4" />
//                 {project.views.toLocaleString()} views
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="p-6">
//           <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
//             {project.description}
//           </p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             {project.links.github && (
//               <Link
//                 href={project.links.github}
//                 target="_blank"
//                 className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm"
//               >
//                 <Github className="w-4 h-4" />
//                 View Repository
//               </Link>
//             )}
//             {project.links.live && (
//               <Link
//                 href={project.links.live}
//                 target="_blank"
//                 className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 Live Demo
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="relative py-32">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
//         {/* Browser UI */}
//         <div className="max-w-4xl mx-auto mb-12">
//           <div className="rounded-t-xl bg-white/5 backdrop-blur-lg border border-white/10 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex items-center gap-1.5">
//                 <div className="w-3 h-3 rounded-full bg-red-400" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                 <div className="w-3 h-3 rounded-full bg-green-400" />
//               </div>
//               <div className="flex-1 flex justify-center">
//                 <div className="flex items-center gap-4 px-4 py-1 rounded-md bg-white/5">
//                   <ArrowLeft className="w-4 h-4 text-white/40" />
//                   <ArrowRight className="w-4 h-4 text-white/40" />
//                   <RotateCw className="w-4 h-4 text-white/40" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-b-xl bg-white/5 backdrop-blur-lg border-x border-b border-white/10 p-8">
//             <div className="flex items-center gap-3 mb-8">
//               <Search className="w-5 h-5 text-white/70" />
//               <div className="flex-1">
//                 <div className="text-lg text-white/90 font-medium">
//                   featured development projects and work
//                   <span className="animate-blink">|</span>
//                 </div>
//                 <div className="text-sm text-white/50">
//                   About 4 results (0.18 seconds)
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2">
//               {projects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <Link
//                 href="https://github.com"
//                 target="_blank"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300"
//               >
//                 <Github className="w-5 h-5" />
//                 <span className="text-white/90 font-medium">Explore All Projects</span>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
