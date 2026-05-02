import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticTag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Move the tag slightly towards the mouse
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="cursor-default"
    >
      <div className="px-4 py-2 border border-border bg-surface text-primary font-mono text-sm hover:border-secondary transition-colors hover:text-accent">
        {children}
      </div>
    </motion.div>
  );
};

const TechStack: React.FC = () => {
  const technologies = [
    { name: "C++", category: "Core" },
    { name: "Python", category: "Core" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "LangChain", category: "AI/ML" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
    { name: "Linux", category: "OS" },
    { name: "Go", category: "Core" }
  ];

  return (
    <section className="py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-6">/ Stack</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              <MagneticTag>{tech.name}</MagneticTag>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
