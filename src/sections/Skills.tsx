// 'use client';

// import { motion } from 'framer-motion';
// import { Star, Code2, Server, Wrench, Search, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

// const skills = [
//   {
//     category: "Frontend Development",
//     icon: <Code2 className="w-5 h-5 text-indigo-400" />,
//     items: [
//       { name: "React", level: 90, color: "#61DAFB" },
//       { name: "Next.js", level: 85, color: "#000000" },
//       { name: "TypeScript", level: 85, color: "#3178C6" },
//       { name: "Tailwind CSS", level: 90, color: "#38B2AC" }
//     ]
//   },
//   {
//     category: "Backend Development",
//     icon: <Server className="w-5 h-5 text-purple-400" />,
//     items: [
//       { name: "Node.js", level: 85, color: "#339933" },
//       { name: "Python", level: 80, color: "#3776AB" },
//       { name: "PostgreSQL", level: 75, color: "#336791" },
//       { name: "GraphQL", level: 80, color: "#E10098" }
//     ]
//   },
//   {
//     category: "Tools & Others",
//     icon: <Wrench className="w-5 h-5 text-pink-400" />,
//     items: [
//       { name: "Git", level: 85, color: "#F05032" },
//       { name: "Docker", level: 75, color: "#2496ED" },
//       { name: "AWS", level: 70, color: "#FF9900" },
//       { name: "Linux", level: 80, color: "#FCC624" }
//     ]
//   }
// ];

// const StarRating = ({ level }: { level: number }) => {
//   const stars = Array.from({ length: 5 }).map((_, index) => {
//     const filled = (level / 100) * 5 > index;
//     return (
//       <Star
//         key={index}
//         className={`w-4 h-4 ${
//           filled ? "fill-current text-amber-400" : "text-white/10"
//         }`}
//       />
//     );
//   });

//   return <div className="flex gap-1">{stars}</div>;
// };

// const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="h-full"
//     >
//       <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/10">
//         <div className="flex items-center gap-4 mb-8">
//           <div className="p-3 rounded-lg bg-white/5">
//             {skill.icon}
//           </div>
//           <h3 className="text-xl font-medium text-white/90">
//             {skill.category}
//           </h3>
//         </div>
//         <div className="space-y-5">
//           {skill.items.map((item: any) => (
//             <div key={item.name} className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-3 min-w-[140px]">
//                 <div
//                   className="w-2 h-2 rounded-full"
//                   style={{ backgroundColor: item.color }}
//                 />
//                 <span className="text-white/70 text-sm font-medium">{item.name}</span>
//               </div>
//               <StarRating level={item.level} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="relative py-32">
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
//                   technical expertise and proficiency
//                   <span className="animate-blink">|</span>
//                 </div>
//                 <div className="text-sm text-white/50">
//                   About 12 results (0.25 seconds)
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-6 md:grid-cols-3">
//               {skills.map((skill, index) => (
//                 <SkillCard key={skill.category} skill={skill} index={index} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
