import { motion } from 'framer-motion';
import { technologies } from '../../data/profile';
import { MagneticTag } from '../ui';

const TechStack = () => {
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
