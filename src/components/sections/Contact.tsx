import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { profile } from '../../data/profile';
import { GithubIcon } from '../ui';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-12">/ Contact</h2>
          
          <p className="text-xl text-primary mb-12 max-w-[65ch] font-light leading-relaxed">
            {profile.contactIntro}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-3 text-secondary hover:text-primary transition-colors py-2"
            >
              <Mail size={18} />
              <span className="font-medium">发送邮件</span>
            </a>

            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-primary transition-colors py-2"
            >
              <GithubIcon size={18} />
              <span className="font-medium">GitHub</span>
            </a>

            <a 
              href="#" 
              className="flex items-center gap-3 text-secondary hover:text-primary transition-colors py-2"
            >
              <Globe size={18} />
              <span className="font-medium">个人博客</span>
            </a>
          </div>
        </motion.div>
        
        <div className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-secondary">
          <span>&copy; {new Date().getFullYear()} {profile.name}.</span>
          <span className="mt-2 sm:mt-0">Crafted with React & Tailwind</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
