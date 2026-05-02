import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects, type Project } from '../../data/profile';
import { GithubIcon } from '../ui';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group bg-surface border border-border p-8 transition-colors"
    >
      {/* Interactive Hover Border Glow */}
      <div 
        className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.05), transparent 40%)",
          margin: "-1px"
        }}
      />

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-semibold text-primary">
          {project.title}
        </h3>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors shrink-0"
        >
          <GithubIcon size={16} />
          <span>代码仓库</span>
        </a>
      </div>
      
      <p className="text-secondary mb-8 font-normal leading-relaxed max-w-[65ch]" style={{ transform: "translateZ(20px)" }}>
        {project.desc}
      </p>
      
      <div className="flex flex-wrap gap-3" style={{ transform: "translateZ(40px)" }}>
        {project.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className="px-2.5 py-1 text-xs font-mono text-secondary bg-background border border-border hover:border-accent transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 border-t border-border bg-background" style={{ perspective: "1000px" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-6">/ Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-12" 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
