import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticTagProps {
  children: ReactNode;
}

const MagneticTag = ({ children }: MagneticTagProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

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
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="cursor-default"
    >
      <div className="px-4 py-2 border border-border bg-surface text-primary font-mono text-sm hover:border-secondary transition-colors hover:text-accent">
        {children}
      </div>
    </motion.div>
  );
};

export default MagneticTag;
