import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { keywords, type KeywordSize } from '../../data/profile';

const sizeMap = {
  sm: { px: 20, py: 10, fontSize: 14, baseRadius: 40 },
  md: { px: 24, py: 12, fontSize: 16, baseRadius: 50 },
  lg: { px: 32, py: 16, fontSize: 18, baseRadius: 60 }
} satisfies Record<KeywordSize, { px: number; py: number; fontSize: number; baseRadius: number }>;

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Physics state
  const physicsRef = useRef<{ x: number, y: number, vx: number, vy: number, width: number, height: number }[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Initialize physics state
    const { width: containerW, height: containerH } = container.getBoundingClientRect();
    
    physicsRef.current = keywords.map((kw, i) => {
      const el = bubblesRef.current[i];
      const w = el ? el.offsetWidth : sizeMap[kw.size].baseRadius * 2;
      const h = el ? el.offsetHeight : sizeMap[kw.size].baseRadius;
      
      // Spawn at random positions inside the container
      return {
        x: Math.random() * (containerW - w),
        y: Math.random() * (containerH - h),
        vx: (Math.random() - 0.5) * 1.5, // Random speed
        vy: (Math.random() - 0.5) * 1.5,
        width: w,
        height: h
      };
    });

    let lastTime = performance.now();

    const loop = (time: number) => {
      // Delta time normalization
      const dt = (time - lastTime) / 16.66; // Normalize to 60fps
      lastTime = time;

      const { width: cW, height: cH } = container.getBoundingClientRect();

      physicsRef.current.forEach((p, i) => {
        // Move
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bounce off walls
        if (p.x <= 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x + p.width >= cW) {
          p.x = cW - p.width;
          p.vx *= -1;
        }

        if (p.y <= 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y + p.height >= cH) {
          p.y = cH - p.height;
          p.vy *= -1;
        }

        // Mouse Repulsion Effect
        const bubbleCenterX = p.x + p.width / 2;
        const bubbleCenterY = p.y + p.height / 2;
        const dx = bubbleCenterX - mouseRef.current.x;
        const dy = bubbleCenterY - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) { // Repel radius
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.5 * dt;
          p.vy += (dy / dist) * force * 0.5 * dt;
        }

        // Friction (slow down slightly if pushed too fast by mouse)
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 1.0;
        if (speed > maxSpeed) {
          p.vx *= 0.98;
          p.vy *= 0.98;
        } else if (speed < 0.2) {
          // Add random jitter to keep them moving
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        // Apply DOM
        const el = bubblesRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        }
      });

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <section id="about" className="py-32 px-6 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-6">/ About</h2>
        </motion.div>

        {/* Physics Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full min-h-[700px] border border-border/30 rounded-3xl overflow-hidden"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)"
          }}
        >
          {keywords.map((kw, i) => (
            <div
              key={i}
              ref={el => { bubblesRef.current[i] = el; }}
              className="absolute left-0 top-0 rounded-full flex items-center justify-center whitespace-nowrap text-primary cursor-default"
              style={{
                padding: `${sizeMap[kw.size].py}px ${sizeMap[kw.size].px}px`,
                fontSize: `${sizeMap[kw.size].fontSize}px`,
                // Translucent Glassmorphism styles
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                willChange: "transform", // Hardware acceleration
              }}
            >
              <span className="font-light tracking-wide drop-shadow-md">{kw.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
