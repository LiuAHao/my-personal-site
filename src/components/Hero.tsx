import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GithubIcon } from './icons';

const DecryptedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Controls the speed of decryption
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className="font-mono">{displayText || '\u00A0'}</span>;
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start relative pt-32 px-6 max-w-4xl mx-auto">
      <div className="w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-primary mb-6">
            Hi, I'm <span className="text-primary pr-2">LiuAHao</span>.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-[65ch] font-normal leading-relaxed h-[64px] md:h-[32px]">
            <DecryptedText text="Architecting intelligent systems through elegant code and boundless curiosity." delay={500} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <a href="#projects" className="group flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-lg">
            View Projects
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="https://github.com/LiuAHao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium text-lg">
            <GithubIcon size={20} />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-12 left-6 flex items-center gap-3 cursor-pointer text-secondary hover:text-primary transition-colors"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={20} className="animate-bounce" style={{ animationDuration: '2s' }} />
        <span className="text-sm font-mono uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
